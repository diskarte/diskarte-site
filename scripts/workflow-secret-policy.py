# VENDORED from diskarte/actions@942becea881ae9b1d17a6068bdd87d48d0cef62e (custody tooling v1.2).
# diskarte-site is the org's only PUBLIC repo and public repos cannot
# resolve actions from private repos — the shared composite is unreachable
# here. Re-sync this copy whenever the tooling bumps.
#!/usr/bin/env python3
"""workflow-secret-policy — parsed-workflow enforcement of ADR 0045 §5.

A workflow may not depend on GitHub Actions secrets in ANY form. This walks
the PARSED YAML tree of every workflow (comments can never trip it) and flags:

  1. `secrets.<name>` or `secrets['<name>']` / `secrets["<name>"]` inside any
     `${{ ... }}` expression — including `secrets.GITHUB_TOKEN` (the sanctioned
     spelling is `${{ github.token }}`, so steady state is ZERO `secrets`
     expressions);
  2. a `secrets:` mapping on a reusable-workflow (`uses:`) job — forwarding;
  3. `secrets: inherit`;
  4. an `on.workflow_call.secrets` declaration — a reusable ASKING for secrets.

Python + PyYAML (both in every ubuntu runner image) rather than Node: zero
install steps, zero third-party fetch at check time.

Exceptions require a founder-approved ADR 0045 entry and are passed
explicitly: --allow NAME (repeatable). The default allowlist is EMPTY.
"""

from __future__ import annotations

import argparse
import glob
import re
import sys

import yaml

# Expression spans only: text outside ${{ }} is inert to GitHub and shell
# prose mentioning "secrets." must not trip the check. `secrets` must be a
# ROOT identifier in the expression: the negative lookbehind excludes member
# accesses like steps.gcp-secrets.outputs.x, where "secrets" is merely the
# tail of a step id (proven false-positive on diskarte-desktop, 2026-07-20).
EXPR = re.compile(r"\$\{\{(.*?)\}\}", re.DOTALL)
SECRET_DOT = re.compile(r"(?<![\w.-])secrets\s*\.\s*([A-Za-z_][A-Za-z0-9_-]*)")
SECRET_BRACKET = re.compile(r"(?<![\w.-])secrets\s*\[\s*['\"]([^'\"]+)['\"]\s*\]")


def walk(node, path, hits):
    if isinstance(node, dict):
        for k, v in node.items():
            walk(v, path + [str(k)], hits)
    elif isinstance(node, list):
        for i, v in enumerate(node):
            walk(v, path + [str(i)], hits)
    elif isinstance(node, str):
        for m in EXPR.finditer(node):
            expr = m.group(1)
            for rx in (SECRET_DOT, SECRET_BRACKET):
                for sm in rx.finditer(expr):
                    hits.append((".".join(path), sm.group(1)))


def check_file(fname, allowed):
    violations = []
    with open(fname, encoding="utf-8") as f:
        doc = yaml.safe_load(f)
    if not isinstance(doc, dict):
        return violations

    # 1. secrets expressions anywhere in the tree
    hits: list[tuple[str, str]] = []
    walk(doc, [], hits)
    for where, name in hits:
        if name not in allowed:
            violations.append(f"{fname}: `secrets` expression ({name}) at {where}")

    # 2./3. job-level secrets forwarding / inherit
    jobs = doc.get("jobs") or {}
    if isinstance(jobs, dict):
        for jname, job in jobs.items():
            if not isinstance(job, dict) or "secrets" not in job:
                continue
            sec = job["secrets"]
            if sec == "inherit":
                violations.append(f"{fname}: job '{jname}' uses `secrets: inherit`")
            elif isinstance(sec, dict):
                bad = [k for k in sec if k not in allowed]
                if bad:
                    violations.append(
                        f"{fname}: job '{jname}' forwards secrets to a reusable workflow: {', '.join(bad)}"
                    )

    # 4. reusable workflow declaring secrets inputs.
    # YAML 1.1 parses a bare `on:` key as boolean True — check both spellings.
    on = doc.get("on", doc.get(True)) or {}
    if isinstance(on, dict):
        wc = on.get("workflow_call") or {}
        if isinstance(wc, dict) and wc.get("secrets"):
            declared = [k for k in wc["secrets"] if k not in allowed]
            if declared:
                violations.append(
                    f"{fname}: workflow_call declares secrets inputs: {', '.join(declared)}"
                )
    return violations


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--allow", action="append", default=[],
                    help="founder-approved exception (must be recorded in ADR 0045)")
    ap.add_argument("--dir", default=".github/workflows",
                    help="workflow directory to check")
    args = ap.parse_args()
    allowed = set(args.allow)

    files = sorted(glob.glob(f"{args.dir}/*.yml") + glob.glob(f"{args.dir}/*.yaml"))
    if not files:
        print(f"workflow-secret-policy: no workflow files under {args.dir} — nothing to check")
        return 0

    all_violations = []
    for fname in files:
        try:
            all_violations += check_file(fname, allowed)
        except yaml.YAMLError as e:
            all_violations.append(f"{fname}: unparseable YAML ({e})")

    if all_violations:
        print("workflow-secret-policy FAIL (ADR 0045 §5 — durable credentials live in")
        print("Secret Manager via diskarte/actions/fetch-secrets; use ${{ github.token }}")
        print("for the ephemeral GitHub token):")
        for v in all_violations:
            print(f"  {v}")
        return 1

    print(f"workflow-secret-policy OK: {len(files)} workflow file(s), zero `secrets` dependencies")
    return 0


if __name__ == "__main__":
    sys.exit(main())

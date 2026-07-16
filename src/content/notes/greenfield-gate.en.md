---
title: 'Closing the Greenfield gate'
summary: 'The Greenfield Alpha path — install, claim, assess, recommend, adjudicate, activate, execute — is now implemented end to end and proven against the real stack. What that means, and what it deliberately does not mean.'
date: 2026-07-15
lang: en
category: 'Build journal'
readingTime: '4 min'
translationOf: greenfield-gate.ja
---

The engineering gate we call **GF-0** — the Greenfield Alpha — is closed. Every milestone in it shipped with its verification green, across every repository in the federation.

## What now exists

A new organization can travel the entire founding journey through the product's own front door:

1. **Install and claim.** A setup code, a browser sign-in, a rendered preview, and a deliberate human confirmation. Four independent planes — identity provider, operations, desktop, runtime — each verifying for itself; no plane vouches for another.
2. **Environment evidence.** The desktop observes the machine and produces a secret-free report. Evidence, not authority.
3. **A grounded recommendation.** A deterministic, founder-side engine ranks deployment profiles against the evidence — including honest ineligibility, with reasons.
4. **Activation as decomposition.** Adopting a profile decomposes into an organization-owned substrate policy plus bindings. The profile object never enters the constitution.
5. **Governed execution with provenance.** Work executes with authority computed and completion verified, and every machine-produced artifact durably records what produced and judged it.

Along the way, two laws became enforceable rather than aspirational: *requests address capabilities, never models* (the schema refuses vendor names), and *share utilization, never share cognition* (the managed appliance model — one appliance per organization, compute multiplexed, organizational state never).

## What it deliberately does not mean

Closing an engineering gate is not launching a product. The public claim surface is not yet deployed; the managed worker runs on a deterministic backend until a production model backend is licensed; the visual onboarding screen is presentation work still ahead. Zero external organizations have used Diskarte.

Those are not gaps discovered after the fact. They are the explicit human gates the system was designed to stop at: deployment, spend, and licensing are decisions a person makes — not side effects of CI.

The next stage is dogfooding: Diskarte operating Diskarte as its own first organization, through the same door everyone else will use.

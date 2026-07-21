# diskarte-site

The public website for Diskarte — diskarte.jp. Astro 5, fully static,
bilingual (EN at `/`, JA at `/ja/…`), deployed to GitHub Pages.

## Local review

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # production build → dist/
    npm run preview    # serve the production build
    npm run check      # type-check

## Structure

    src/pages/            thin routes (en at root, ja under /ja)
    src/components/pages/ one shared component per page (locale-aware)
    src/copy/             ALL page copy, en + ja side by side
    src/i18n/ui.ts        nav/footer/status strings, routes, waitlist copy
    src/content/notes/    Notes entries (name.en.md / name.ja.md pairs)
    src/layouts/Base.astro head/SEO/hreflang/JSON-LD + a11y scaffolding
    public/               static assets and OG cards
    legacy/               the previous single-file site, preserved

## Editing copy

Copy never lives inside components. Edit `src/copy/*.ts` (page copy)
or `src/i18n/ui.ts` (chrome). Notes are Markdown with frontmatter
(title, summary, date, lang, category, readingTime, draft).

## Status discipline

Statuses on the site use the five-label vocabulary (Vision /
Architecturally Complete / Implemented / Deployed · Internal Dev /
Planned). Do not add a capability claim without a chip.

## Deployment (founder act)

GitHub Pages must be set to "GitHub Actions" source once
(Settings → Pages → Source: GitHub Actions). Then:

    git add -A && git commit -m "site: v2" && git push origin main

The workflow in .github/workflows/deploy.yml builds and publishes.
The `diskarte.jp` custom domain is configured in Settings → Pages.
`public/CNAME` is copied into the published `dist/` artifact by Astro.

## Alpha waitlist (the customer front door)

The customer flow is: **website (waitlist signup → founder approval → setup
code by email → download) → desktop (install → claim → configure cognition →
use)**. The site owns step one only. It never issues a download link and never
promises an instant one — the Operations Console is internal and does no
customer onboarding.

`src/components/Waitlist.astro` is the whole implementation: one Astro
component with a plain hoisted `<script>` (the site's existing interactivity
pattern — no framework, no dependencies). It POSTs
`{"email": "…"}` to `<endpoint>/v1/waitlist` and treats any 2xx (the service
always answers `202`, identically for new and existing addresses — deliberately
enumeration-safe) as success. Copy lives in `src/i18n/ui.ts → waitlist`.

It is rendered inline by `CtaSection.astro` (home, runtime, architecture,
about) and by `AlphaPage.astro`. Header and footer CTAs are in-site anchors to
`/alpha#waitlist` via `waitlistHref()` — the site links out to no external form.

### Configuration

| Variable | Purpose |
| --- | --- |
| `PUBLIC_DISKARTE_WAITLIST_URL` | Base URL of the acquisition service. The full contract path (`…/v1/waitlist`) is also accepted. |

Read at **build time** (`import.meta.env`), so it is inlined into the static
output — public by definition, never a secret. See `.env.example`.

**Unset ⇒ honest unavailable state.** The form is not rendered at all; a short
"alpha signup opens shortly" note takes its place. The site never ships a form
that quietly drops addresses.

In CI the value comes from the GitHub Actions repository **variable** of the
same name (Settings → Secrets and variables → Actions → Variables). This repo
is secretless by design and `scripts/workflow-secret-policy.py` enforces it.

## Analytics

No analytics are installed, deliberately; the privacy page reflects that. The
only data the site transmits is a waitlist email address you deliberately type.

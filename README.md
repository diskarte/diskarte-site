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
    src/i18n/ui.ts        nav/footer/status strings, routes, Tally URL
    src/content/notes/    Notes entries (name.en.md / name.ja.md pairs)
    src/layouts/Base.astro head/SEO/hreflang/JSON-LD + a11y scaffolding
    public/               static assets, overview previews, OG cards
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

## Forms & analytics

The design-partner form is Tally (src/i18n/ui.ts → TALLY_URL).
No analytics are installed, deliberately; the privacy page reflects that.

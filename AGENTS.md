# Survey Report Workspace Rules

## Purpose

This repository hosts the public Desky survey report library. The GitHub Pages
root is a durable report index, and every individual survey or design review
lives under its own stable subdirectory.

## Site Structure

- `site/index.html`: public root catalog for `https://purryc.github.io/survey-report/`.
- `site/404.html`: friendly Pages fallback that routes readers back to the catalog.
- `slides.md`: source for the bilingual Slidev decision deck.
- `public/reports/<report-slug>/`: static HTML reports and their `report_assets/`.
- `dist/`: generated deploy output; do not edit it by hand.

## Current Reports

- `reports/screen-integrated-mini-pc-display-design/`: restored static HTML source report from the original Claude material.
- `reports/mini-pc-screen-survey/`: synthesized bilingual Slidev decision deck.
- `reports/agent-pc-8-design-review/`: Agent PC eight-scheme design review.
- `reports/agent-pc-sketch-gallery/`: engineering sketch atlas.

## Content Rules

- Every published slide must include Chinese and English.
- Every competitor product must have at least one image.
- Folding, rotating, or storage-focused products should show use, storage, and desk-placement states when sources allow.
- Product facts must have source entries in `research/source-registry.md`.
- Claude HTML report content must be tracked in `research/html-report-content-ledger.md`; do not silently drop products, charts, laws, matrices, risks, recommendations, sources, or local assets.
- Image generation prompts must be saved before or alongside generated images.
- Do not store secrets, tokens, cookies, raw auth files, or private keys.

## Build And Publish

- Local build: `npm run build`
- Local checks: `npm run check`
- Publish: push `main` when publication is explicitly requested; GitHub Actions `Deploy Pages` builds and deploys GitHub Pages.
- Re-run current remote `main` publication: `npm run deploy`.
- A pushed branch, triggered workflow, or successful local build is not enough; live public availability is the completion gate.
- `npm run build` must keep the root as the catalog and output the Slidev deck into `dist/reports/mini-pc-screen-survey/`.

## Future Reports

Future surveys should add a new `public/reports/<report-slug>/` folder, then add one card to `site/index.html` and one coverage check in `scripts/check-report.mjs`. Do not replace the root catalog with a single report.

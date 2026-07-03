# Survey Report

Public Desky survey report library.

## Public URLs

- Report index: `https://purryc.github.io/survey-report/`
- Restored static mini PC screen report: `/survey-report/reports/screen-integrated-mini-pc-display-design/`
- Bilingual Slidev decision deck: `/survey-report/reports/mini-pc-screen-survey/`
- Agent PC 8 design review: `/survey-report/reports/agent-pc-8-design-review/`
- Agent PC design options Slidev report: `/survey-report/reports/agent-pc-design-options/`
- Agent PC sketch gallery: `/survey-report/reports/agent-pc-sketch-gallery/`

The root URL is the durable catalog. Individual surveys and design reviews must
live in their own subdirectories so older report links are not swallowed by the
latest report.

## Commands

```bash
npm install
npm run extract
npm run build
npm run check
npm run deploy
```

`npm run build` creates the root catalog and builds the Slidev deck into
`dist/reports/mini-pc-screen-survey/`. `npm run deploy` re-runs the GitHub
Actions Pages workflow for the current remote `main`. When publishing fresh
local changes, push `main` first, then verify the live GitHub Pages URLs return
HTTP 200.

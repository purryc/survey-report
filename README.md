# Survey Report

Reusable Slidev survey reports.

## Current Report

Desky mini PC screen industrial-design survey:

- bilingual Slidev report;
- competitor image and specification matrix;
- Claude HTML report integration ledger;
- Desky screen/camera/light/voice/compute-box recommendations;
- GitHub Pages publication.

## Public URLs

- Current Slidev report: `https://purryc.github.io/survey-report/`
- Slide navigation: use the right arrow, spacebar, or on-screen controls. Direct slide links use hash routing, for example `https://purryc.github.io/survey-report/#/survey-report/2`.
- Legacy static report path: `/survey-report/reports/screen-integrated-mini-pc-display-design/` now redirects to the current Slidev report so old links do not 404.

## Commands

```bash
npm install
npm run extract
npm run build
npm run check
npm run deploy
```

`npm run deploy` re-runs the GitHub Actions Pages workflow for the current
remote `main`. When publishing fresh local changes, push `main` first, then
verify the live GitHub Pages URL returns HTTP 200.

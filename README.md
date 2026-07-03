# Survey Report

Reusable Slidev survey reports.

## Current Report

Desky mini PC screen industrial-design survey:

- bilingual Slidev report;
- competitor image and specification matrix;
- Claude HTML report integration ledger;
- Desky screen/camera/light/voice/compute-box recommendations;
- GitHub Pages publication.

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

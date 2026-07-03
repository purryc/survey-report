# Survey Report Workspace Rules

## Purpose

This repository hosts reusable Slidev-based survey reports. Each report should be a source-backed, visual decision artifact, not a loose collection of notes.

## Current Report

The first report is the Desky mini PC screen industrial-design survey. It uses Claude's existing HTML report as the base material, then adds live web verification, bilingual copy, Desky-specific recommendations, and GitHub Pages publishing.

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
- Publish: `npm run deploy`, then verify the GitHub Pages URL returns HTTP 200.
- A pushed branch or successful local build is not enough; live public availability is the completion gate.

## Future Reports

Future surveys may add folders or additional Slidev entry points, but must not break the current public report URL without an explicit migration note.

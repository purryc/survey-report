import { cp, mkdir, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const distDir = path.join(repoRoot, "dist");
const slidevOutDir = path.join(distDir, "reports", "mini-pc-screen-survey");
const slidevBin = path.join(
  repoRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "slidev.cmd" : "slidev",
);

async function copySiteFile(sourceName, targetName = sourceName) {
  await cp(path.join(repoRoot, "site", sourceName), path.join(distDir, targetName));
}

async function patchSlidevHashRoutes(slidevDir) {
  const assetsDir = path.join(slidevDir, "assets");
  const assets = await readdir(assetsDir);
  const entryFileName = assets.find((fileName) => /^index-.*\.js$/.test(fileName));

  if (!entryFileName) {
    throw new Error("Could not find built Slidev entry JS");
  }

  const entryPath = path.join(assetsDir, entryFileName);
  const text = await readFile(entryPath, "utf8");
  const needle = "return`/survey-report/${n?`export/${r}`:t?`presenter/${r}`:`${r}`}`";
  const replacement = "return`/${n?`export/${r}`:t?`presenter/${r}`:`${r}`}`";

  if (!text.includes(needle)) {
    throw new Error("Could not find Slidev route prefix to patch");
  }

  await writeFile(entryPath, text.replace(needle, replacement));
}

async function patchNestedSlidevHashRoutes(slidevDir, routePrefix) {
  const assetsDir = path.join(slidevDir, "assets");
  const assets = await readdir(assetsDir);
  const entryFileName = assets.find((fileName) => /^index-.*\.js$/.test(fileName));

  if (!entryFileName) {
    throw new Error(`Could not find nested Slidev entry JS: ${slidevDir}`);
  }

  const normalizedRoutePrefix = routePrefix.replace(/\/$/, "");
  const entryPath = path.join(assetsDir, entryFileName);
  const text = await readFile(entryPath, "utf8");
  const needle = `return\`${normalizedRoutePrefix}/\${n?\`export/\${r}\`:t?\`presenter/\${r}\`:\`\${r}\`}\``;
  const replacement = "return`/${n?`export/${r}`:t?`presenter/${r}`:`${r}`}`";
  const relativeReplacement = "return`./${n?`export/${r}`:t?`presenter/${r}`:`${r}`}`";

  if (text.includes(needle)) {
    await writeFile(entryPath, text.replace(needle, replacement));
    return;
  }

  if (!text.includes(replacement) && !text.includes(relativeReplacement)) {
    throw new Error(`Could not find nested Slidev route prefix to patch: ${normalizedRoutePrefix}`);
  }
}

async function main() {
  const tmpSlidevDir = await mkdtemp(path.join(os.tmpdir(), "survey-report-slidev-"));

  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  const result = spawnSync(
    slidevBin,
    [
      "build",
      "slides.md",
      "--base",
      "/survey-report/",
      "--out",
      tmpSlidevDir,
      "--router-mode",
      "hash",
    ],
    {
      cwd: repoRoot,
      stdio: "inherit",
    },
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  await patchSlidevHashRoutes(tmpSlidevDir);
  await mkdir(slidevOutDir, { recursive: true });
  await cp(path.join(tmpSlidevDir, "index.html"), path.join(slidevOutDir, "index.html"));
  await cp(path.join(tmpSlidevDir, "assets"), path.join(distDir, "assets"), { recursive: true });
  await cp(path.join(tmpSlidevDir, "images"), path.join(distDir, "images"), { recursive: true });
  await cp(path.join(repoRoot, "public", "reports"), path.join(distDir, "reports"), {
    recursive: true,
  });
  await patchNestedSlidevHashRoutes(
    path.join(distDir, "reports", "agent-pc-design-options"),
    "/survey-report/reports/agent-pc-design-options",
  );
  await copySiteFile("index.html");
  await copySiteFile("404.html");
  await rm(tmpSlidevDir, { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

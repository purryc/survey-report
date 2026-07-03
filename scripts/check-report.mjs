import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const errors = [];

const requiredProductFields = [
  "id",
  "name",
  "group",
  "aliases",
  "screen",
  "resolution",
  "panel",
  "touch",
  "mechanism",
  "camera",
  "light",
  "voice",
  "storageStacking",
  "sourceStatus",
  "imageStatus",
  "images",
];

const allowedImageStates = new Set(["use", "storage", "desk", "mechanism", "spec", "reference"]);
const allowedImageKinds = new Set(["local-claude-asset", "remote-source-image"]);
const correctedHigoleImageUrl =
  "https://www.cnx-software.com/wp-content/uploads/2022/07/mini-pc-with-touchscreen-display.jpg";
const legacyHigoleLocalImage = "public/images/competitors/local/higole-scene.png";
const requiredGeneratedImages = [
  "agent-screen-fixed-wide-angle.png",
  "agent-screen-micro-ptz.png",
  "flip-screen-developer-box.png",
  "stackable-compute-dock.png",
  "large-ptz-caution-route.png",
  "screen-size-band-diagram.png",
  "market-archetypes-synthesis.png",
];

const requiredLedgerSections = [
  "Products",
  "Local Assets",
  "Remote Images",
  "Distribution And Structure Visuals",
  "Eight Pattern Laws",
  "Morphology And Recommendations",
  "Risk Notes",
  "Source Appendix Groups",
];

function addError(message) {
  errors.push(message);
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function readRequiredText(relativePath) {
  const filePath = path.join(repoRoot, relativePath);
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      addError(`${relativePath} is missing`);
      return "";
    }
    throw error;
  }
}

async function readRequiredJson(relativePath) {
  const text = await readRequiredText(relativePath);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (error) {
    addError(`${relativePath} is not valid JSON: ${error.message}`);
    return null;
  }
}

function countMatches(text, regex) {
  return [...text.matchAll(regex)].length;
}

function hasChinese(text) {
  return /[\u3400-\u9fff]/u.test(text);
}

function hasEnglish(text) {
  return /[A-Za-z]/.test(text);
}

function stripSlidevFrontmatter(chunk) {
  const trimmed = chunk.trim();
  if (!trimmed.startsWith("---")) return trimmed;
  return trimmed.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, "").trim();
}

function isRealSlideChunk(chunk) {
  const withoutComments = chunk
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/^layout:.*$/gm, "")
    .trim();
  return withoutComments.length > 0;
}

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[“”‘’"'`]/g, "")
    .replace(/[()（）[\]{}]/g, " ")
    .replace(/[\/·:：,，.;；\-–—_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesTerm(haystack, term) {
  return haystack.includes(normalizeText(term));
}

function imageReferenceCandidates(image) {
  const candidates = new Set();
  if (typeof image.url === "string") candidates.add(image.url);
  if (typeof image.path === "string") {
    candidates.add(image.path);
    candidates.add(image.path.replace(/^public\//, ""));
    candidates.add(`/${image.path.replace(/^public\//, "")}`);
    candidates.add(`/survey-report/${image.path.replace(/^public\//, "")}`);
    candidates.add(path.basename(image.path));
  }
  return [...candidates].filter(Boolean);
}

function checkSlides(slidesText, products) {
  const draftMarkerPattern =
    /\b(?:TBD|TODO|FIXME|placeholder)\b|pending in qa|待定|待补|待完善|待确认|未完成|占位|稍后补|需补充|待核实|待验证/iu;
  const markerMatch = slidesText.match(draftMarkerPattern);
  if (markerMatch) {
    addError(`slides.md contains unresolved draft marker: ${markerMatch[0]}`);
  }

  const slideChunks = slidesText
    .split(/^---\s*$/m)
    .map(stripSlidevFrontmatter)
    .filter(isRealSlideChunk);

  slideChunks.forEach((chunk, index) => {
    if (!hasChinese(chunk) || !hasEnglish(chunk)) {
      addError(`Slide ${index + 1} must contain both Chinese and English`);
    }
  });

  const productSlideChunks = slideChunks.filter((chunk) => chunk.includes('class="product"'));
  if (Array.isArray(products) && productSlideChunks.length !== products.length) {
    addError(`slides.md must contain one product teardown slide per product: found ${productSlideChunks.length}`);
  }

  products.forEach((product) => {
    const aliases = Array.isArray(product.aliases) ? product.aliases : [];
    const candidates = [product.name, ...aliases].filter(Boolean);
    const productSlide = productSlideChunks.find((chunk) => {
      const normalizedChunk = normalizeText(chunk);
      return candidates.some((candidate) => includesTerm(normalizedChunk, candidate));
    });

    if (!productSlide) {
      addError(`Product teardown slide is missing: ${product.name}`);
      return;
    }

    const requiredProductSlideMarkers = [
      'class="image-grid"',
      'class="spec-list"',
      'class="factline"',
      "屏幕 / Screen",
      "机构 / Mechanism",
      "感知 / Sensing",
      "Desky 启示",
      "Camera / 摄像头",
      "Light / 灯光",
      "Voice / 语音",
      "Storage / 收纳",
    ];

    requiredProductSlideMarkers.forEach((marker) => {
      if (!productSlide.includes(marker)) {
        addError(`Product teardown slide for ${product.name} is missing marker: ${marker}`);
      }
    });

    const factlineMatch = productSlide.match(/<div class="factline">[\s\S]*?<\/div>/);
    if (factlineMatch && /\.\.\./.test(factlineMatch[0])) {
      addError(`Product teardown slide for ${product.name} has literal ellipsis in factline`);
    }

    const imageCandidates = Array.isArray(product.images) ? product.images.flatMap(imageReferenceCandidates) : [];
    if (!imageCandidates.some((candidate) => productSlide.includes(candidate))) {
      addError(`Product teardown slide for ${product.name} does not reference any listed product image`);
    }
  });

  requiredGeneratedImages.forEach((imageName) => {
    if (!slidesText.includes(`/images/generated/${imageName}`)) {
      addError(`slides.md does not reference generated image: ${imageName}`);
    }
  });
}

function checkProducts(products) {
  if (!Array.isArray(products)) {
    addError("research/products.json must contain an array");
    return;
  }

  if (products.length !== 20) {
    addError(`research/products.json must contain exactly 20 products, found ${products.length}`);
  }

  let unknownAfterExtractCount = 0;
  products.forEach((product, productIndex) => {
    requiredProductFields.forEach((field) => {
      if (!Object.hasOwn(product, field)) {
        addError(`Product ${productIndex + 1} is missing field: ${field}`);
      }
    });

    if (!Array.isArray(product.aliases)) {
      addError(`Product ${product.name ?? productIndex + 1} aliases must be an array`);
    }

    if (!Array.isArray(product.images) || product.images.length === 0) {
      addError(`Product ${product.name ?? productIndex + 1} images must be a non-empty array`);
    } else {
      product.images.forEach((image, imageIndex) => {
        const label = `Product ${product.name ?? productIndex + 1} image ${imageIndex + 1}`;
        if (!allowedImageKinds.has(image.kind)) {
          addError(`${label} has invalid kind: ${image.kind}`);
        }
        if (!allowedImageStates.has(image.state)) {
          addError(`${label} has invalid state: ${image.state}`);
        }
        if (typeof image.credit !== "string" || image.credit.trim().length === 0) {
          addError(`${label} credit is missing`);
        }
        if (image.kind === "local-claude-asset") {
          if (typeof image.path !== "string" || !image.path.startsWith("public/images/competitors/local/")) {
            addError(`${label} local path is invalid`);
          }
          if (Object.hasOwn(image, "url")) {
            addError(`${label} must not include url for local-claude-asset`);
          }
        }
        if (image.kind === "remote-source-image") {
          if (typeof image.url !== "string" || !/^https?:\/\//.test(image.url)) {
            addError(`${label} remote url is invalid`);
          }
          if (Object.hasOwn(image, "path")) {
            addError(`${label} must not include path for remote-source-image`);
          }
        }
      });
    }

    requiredProductFields.forEach((field) => {
      if (product[field] === "unknown-after-claude-html-extract") {
        unknownAfterExtractCount += 1;
      }
    });
  });

  if (unknownAfterExtractCount > 8) {
    addError(
      `Too many unknown-after-claude-html-extract values in products.json: ${unknownAfterExtractCount} (max 8)`,
    );
  }
}

function checkLedger(ledgerText) {
  if (/- \[ \]/.test(ledgerText)) {
    addError("research/html-report-content-ledger.md has unchecked ledger items");
  }

  const headingText = ledgerText
    .replace(/^## Product Coverage$/m, "## Products")
    .replace(/^## Remote Images Embedded In HTML$/m, "## Remote Images")
    .replace(/^## Pattern Laws$/m, "## Eight Pattern Laws")
    .replace(/^## Source Appendix Items$/m, "## Source Appendix Groups");

  requiredLedgerSections.forEach((section) => {
    const headingPattern = new RegExp(`^##\\s+${section.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "m");
    if (!headingPattern.test(headingText)) {
      addError(`research/html-report-content-ledger.md is missing section: ${section}`);
    }
  });
}

function checkSourceRegistry(sourceRegistryText) {
  const problemRows = sourceRegistryText
    .split("\n")
    .filter((line) => line.startsWith("|"))
    .filter((line) => /\b(?:seeded|unverified|needs-live-verification)\b/i.test(line));

  if (problemRows.length > 0) {
    addError(`research/source-registry.md has seeded/unverified rows: ${problemRows.length}`);
  }
}

function checkPackageScripts(packageJson) {
  const buildScript = packageJson?.scripts?.build ?? "";
  const devScript = packageJson?.scripts?.dev ?? "";

  if (!buildScript.includes("--base /survey-report/")) {
    addError("package.json build script must set --base /survey-report/ for GitHub Pages");
  }
  if (!buildScript.includes("--router-mode hash")) {
    addError("package.json build script must use --router-mode hash for GitHub Pages slide routes");
  }
  if (!devScript.includes("--router-mode hash")) {
    addError("package.json dev script must use --router-mode hash to match published navigation");
  }
}

function checkHigoleCorrectedImage(ledgerText, sourceRegistryText, imageInventoryText, products) {
  const productsText = JSON.stringify(products ?? []);
  const combined = `${ledgerText}\n${sourceRegistryText}\n${imageInventoryText}\n${productsText}`;
  if (!combined.includes(correctedHigoleImageUrl)) {
    addError("Corrected Higole CNX image URL is missing");
  }
  if (!combined.includes(legacyHigoleLocalImage) || !/higole-scene\.png[\s\S]{0,160}legacy\/non-final/i.test(combined)) {
    addError("Legacy higole-scene.png must be marked legacy/non-final");
  }

  const higole = Array.isArray(products)
    ? products.find((product) => product.id === "higole-gole1-pro")
    : null;
  if (!higole) {
    addError("Higole / Gole1 Pro product row is missing");
    return;
  }

  const higoleImages = Array.isArray(higole.images) ? higole.images : [];
  if (!higoleImages.some((image) => image.url === correctedHigoleImageUrl && image.state === "use")) {
    addError("Higole images[] must include the corrected CNX image URL with state use");
  }
  if (higoleImages.some((image) => image.path === legacyHigoleLocalImage || image.url === legacyHigoleLocalImage)) {
    addError("Higole images[] must not use legacy higole-scene.png");
  }
}

async function checkLocalImages(products) {
  const localImageDir = path.join(repoRoot, "public/images/competitors/local");
  let entries = [];
  try {
    entries = await readdir(localImageDir, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") {
      addError("public/images/competitors/local is missing");
      return;
    }
    throw error;
  }

  const files = entries.filter((entry) => entry.isFile());
  if (files.length !== 15) {
    addError(`public/images/competitors/local must contain exactly 15 files, found ${files.length}`);
  }

  const localFiles = new Set(files.map((file) => file.name));
  if (Array.isArray(products)) {
    products.forEach((product) => {
      if (!Array.isArray(product.images)) return;
      product.images
        .filter((image) => image.kind === "local-claude-asset")
        .forEach((image) => {
          const fileName = path.basename(image.path ?? "");
          if (!localFiles.has(fileName)) {
            addError(`Local image for ${product.name} is missing: ${image.path}`);
          }
        });
    });
  }
}

async function checkGeneratedImages() {
  const generatedDir = path.join(repoRoot, "public/images/generated");
  for (const imageName of requiredGeneratedImages) {
    if (!(await pathExists(path.join(generatedDir, imageName)))) {
      addError(`Generated image is missing: public/images/generated/${imageName}`);
    }
  }
}

function checkArchivedClaudeHtml(htmlText) {
  const remoteImageUrls = new Set(
    [...htmlText.matchAll(/<img\b[^>]*\bsrc=["'](https?:\/\/[^"']+)["']/gi)].map((match) => match[1]),
  );
  const reportAssetRefs = new Set(
    [...htmlText.matchAll(/(?:src|href)=["']([^"']*report_assets\/[^"']+)["']/gi)].map((match) => match[1]),
  );
  const lawBlockCount = countMatches(htmlText, /class=["'][^"']*\blaw\b[^"']*["']/gi);
  const riskBlockCount = countMatches(htmlText, /class=["'][^"']*\brisk\b[^"']*["']/gi);

  if (remoteImageUrls.size !== 16) {
    addError(`Archived Claude HTML must contain exactly 16 remote image URLs, found ${remoteImageUrls.size}`);
  }

  if (reportAssetRefs.size !== 15) {
    addError(`Archived Claude HTML must contain exactly 15 report_assets/ refs, found ${reportAssetRefs.size}`);
  }

  if (lawBlockCount !== 8) {
    addError(`Archived Claude HTML must contain exactly 8 .law blocks, found ${lawBlockCount}`);
  }

  if (riskBlockCount !== 5) {
    addError(`Archived Claude HTML must contain exactly 5 .risk blocks, found ${riskBlockCount}`);
  }
}

async function writeCheckLog() {
  const qaDir = path.join(repoRoot, "qa");
  await mkdir(qaDir, { recursive: true });
  const timestamp = new Date().toISOString();
  const lines = [
    "# Report QA Check Log",
    "",
    `Timestamp: ${timestamp}`,
    "",
    errors.length === 0 ? "Status: PASS" : "Status: FAIL",
    "",
    "## Errors",
    "",
    ...(errors.length === 0 ? ["- None"] : errors.map((error) => `- ${error}`)),
    "",
  ];
  await writeFile(path.join(qaDir, "check-log.md"), lines.join("\n"));
}

async function main() {
  const packageJson = await readRequiredJson("package.json");
  const products = await readRequiredJson("research/products.json");
  const ledgerText = await readRequiredText("research/html-report-content-ledger.md");
  const imageInventoryText = await readRequiredText("research/image-inventory.md");
  const sourceRegistryText = await readRequiredText("research/source-registry.md");
  const htmlText = await readRequiredText("research/source-html/claude-report.html");

  if (packageJson) checkPackageScripts(packageJson);
  if (products) checkProducts(products);
  if (ledgerText) checkLedger(ledgerText);
  if (ledgerText || sourceRegistryText || imageInventoryText || products) {
    checkHigoleCorrectedImage(ledgerText, sourceRegistryText, imageInventoryText, products);
  }
  if (sourceRegistryText) checkSourceRegistry(sourceRegistryText);
  if (htmlText) checkArchivedClaudeHtml(htmlText);
  await checkLocalImages(products);
  await checkGeneratedImages();

  const slidesPath = path.join(repoRoot, "slides.md");
  const slidesExists = await pathExists(slidesPath);
  if (!slidesExists) {
    addError("slides.md is missing");
  } else {
    const slidesText = await readFile(slidesPath, "utf8");
    if (products) checkSlides(slidesText, products);
  }

  await writeCheckLog();

  if (errors.length > 0) {
    console.error(`Report checks failed with ${errors.length} error(s):`);
    errors.forEach((error) => console.error(`- ${error}`));
    process.exit(1);
  }

  console.log("Report checks passed");
}

main().catch(async (error) => {
  addError(`Unexpected check failure: ${error.stack ?? error.message}`);
  await writeCheckLog();
  console.error(error);
  process.exit(1);
});

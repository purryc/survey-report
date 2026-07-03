import { copyFile, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = "/Users/hmi/Documents/survey-report";
const deskyRoot = "/Users/hmi/Documents/Desky";
const sourceHtmlPath = path.join(deskyRoot, "带屏迷你主机_屏幕设计调研报告.html");
const sourceAssetDir = path.join(deskyRoot, "report_assets");
const researchDir = path.join(repoRoot, "research");
const sourceHtmlDir = path.join(researchDir, "source-html");
const localImageDir = path.join(repoRoot, "public/images/competitors/local");

const localAssetFiles = [
  "acemagic-s1.png",
  "am01s-pair.png",
  "bmg800-diagram.png",
  "flip-desk-monitor.png",
  "flip-table-scene.png",
  "gem12-promax.png",
  "gflip-render.png",
  "higole-scene.png",
  "n150-8inch-views.png",
  "pipo-x8.png",
  "reterminal-banner.png",
  "tablet-8inch-pink.png",
  "uh185-stand.png",
  "viewdock-dock-scene.png",
  "viewdock-wireless-top.png",
];

const products = [
  {
    id: "lenovo-auto-twist",
    name: "Lenovo Auto Twist",
    group: "A 大屏交互终端",
    aliases: ["Lenovo ThinkBook Plus Gen 7 Auto Twist"],
    imageFiles: [],
  },
  {
    id: "amazon-echo-show-10",
    name: "Amazon Echo Show 10",
    group: "A 大屏交互终端",
    aliases: ["Echo Show 10", "Amazon Echo Show 10 (3rd Gen)"],
    imageFiles: [],
  },
  {
    id: "lg-stanbyme-go",
    name: "LG StanbyME Go",
    group: "A 大屏交互终端",
    aliases: ["LG StanbyME Go 27LX5QKNA"],
    imageFiles: [],
  },
  {
    id: "aoostar-g-flip-370",
    name: "AOOSTAR G-Flip 370",
    group: "B 翻转副屏迷你主机",
    aliases: ["G-Flip 370"],
    imageFiles: ["gflip-render.png", "flip-desk-monitor.png", "flip-table-scene.png"],
  },
  {
    id: "miniproca-aio-ryzen-7-inch-4k-flip-screen-mini-pc",
    name: "Miniproca AiO / Ryzen 7-inch 4K flip-screen mini PC",
    group: "B 翻转副屏迷你主机",
    aliases: ["Miniproca AiO", "Miniproca All-in-1 Mini PC"],
    imageFiles: [],
  },
  {
    id: "viewdock-gen2",
    name: "ViewDock Gen2",
    group: "B 翻转副屏迷你主机",
    aliases: ["ViewDock G2"],
    imageFiles: ["viewdock-wireless-top.png", "viewdock-dock-scene.png"],
  },
  {
    id: "ayaneo-am01s",
    name: "AYANEO AM01S",
    group: "B 翻转副屏迷你主机",
    aliases: ["AYANEO Retro Mini PC AM01S"],
    imageFiles: ["am01s-pair.png"],
  },
  {
    id: "minisforum-uh185-ultra",
    name: "Minisforum UH185 Ultra",
    group: "C 固定副屏迷你主机",
    aliases: ["UH185 Ultra"],
    imageFiles: ["uh185-stand.png"],
  },
  {
    id: "aoostar-gem12-pro-max",
    name: "AOOSTAR GEM12 Pro Max",
    group: "C 固定副屏迷你主机",
    aliases: ["GEM12 Pro Max"],
    imageFiles: ["gem12-promax.png"],
  },
  {
    id: "acemagic-s1",
    name: "ACEMAGIC S1",
    group: "C 固定副屏迷你主机",
    aliases: ["S1"],
    imageFiles: ["acemagic-s1.png"],
  },
  {
    id: "ayaneo-am02",
    name: "AYANEO AM02",
    group: "C 固定副屏迷你主机",
    aliases: ["AYANEO Retro Mini PC AM02"],
    imageFiles: [],
  },
  {
    id: "higole-gole1-pro",
    name: "Higole / Gole1 Pro",
    group: "D 平板一体式 / 工业 HMI",
    aliases: ["Higole Gole1", "Higole Gole1 Pro", "Higole Gole1 / Gole1 Pro 系列"],
    imageFiles: [],
    imageStatus: "suspect/wrong-image-needs-web-replacement",
  },
  {
    id: "pipo-x8",
    name: "PiPO X8",
    group: "D 平板一体式 / 工业 HMI",
    aliases: ["Pipo X8"],
    imageFiles: ["pipo-x8.png"],
  },
  {
    id: "8-inch-n150-white-label-touch-mini-pc",
    name: "8-inch N150 white-label touch mini PC",
    group: "D 平板一体式 / 工业 HMI",
    aliases: ["白牌 8″ N150 触屏主机", "8″ N150 白牌", "KOOFORWAY 8-inch N150"],
    imageFiles: ["n150-8inch-views.png", "tablet-8inch-pink.png"],
  },
  {
    id: "seeed-studio-reterminal",
    name: "Seeed Studio reTerminal",
    group: "D 平板一体式 / 工业 HMI",
    aliases: ["reTerminal"],
    imageFiles: ["reterminal-banner.png"],
  },
  {
    id: "bmg800-edge-gateway",
    name: "BMG800 edge gateway",
    group: "D 平板一体式 / 工业 HMI",
    aliases: ["佰马 BMG800", "佰马 BMG800 边缘计算网关", "Baimatech BMG800"],
    imageFiles: ["bmg800-diagram.png"],
  },
  {
    id: "violoop",
    name: "Violoop",
    group: "E Agent 专用硬件",
    aliases: [],
    imageFiles: [],
  },
  {
    id: "moore-threads-aicube",
    name: "Moore Threads AICUBE",
    group: "E Agent 专用硬件",
    aliases: ["摩尔线程 MTT AICUBE", "摩尔线程 AICUBE"],
    imageFiles: [],
  },
  {
    id: "nvidia-dgx-spark",
    name: "NVIDIA DGX Spark",
    group: "F 算力堆叠参考",
    aliases: ["DGX Spark"],
    imageFiles: [],
  },
  {
    id: "apple-mac-mini-m4",
    name: "Apple Mac mini M4",
    group: "F 算力堆叠参考",
    aliases: ["Mac mini (M4)", "Mac mini M4"],
    imageFiles: [],
  },
];

function assertCount(label, actual, expected) {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${expected}, got ${actual}`);
  }
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value) {
  return decodeEntities(
    value
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|tr|li|h\d)>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

function compact(value) {
  return stripHtml(value).replace(/\s+/g, " ").trim();
}

function valueOrUnknown(value) {
  const compacted = compact(value ?? "");
  return compacted && compacted !== "—" ? compacted : "unknown-after-claude-html-extract";
}

function normalizeMatchText(value) {
  return compact(value)
    .toLowerCase()
    .replace(/[″"]/g, "inch")
    .replace(/[()（）/·:：,-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMatches(html, regex) {
  return Array.from(html.matchAll(regex));
}

function extractRemoteImageUrls(html) {
  const urls = extractMatches(html, /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)
    .map((match) => decodeEntities(match[1]))
    .filter((src) => /^https?:\/\//i.test(src));
  return [...new Set(urls)];
}

function extractHtmlAssetRefs(html) {
  return extractMatches(html, /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)
    .map((match) => decodeEntities(match[1]))
    .filter((src) => src.startsWith("report_assets/"));
}

function extractLaws(html) {
  return extractMatches(html, /<div class="law">\s*<h5>([\s\S]*?)<\/h5>\s*<p>([\s\S]*?)<\/p>\s*<\/div>/gi).map(
    (match, index) => ({
      index: index + 1,
      title: compact(match[1]),
      body: compact(match[2]),
    }),
  );
}

function extractRisks(html) {
  return extractMatches(html, /<div class="risk">([\s\S]*?)<\/div>/gi).map((match, index) => ({
    index: index + 1,
    body: compact(match[1]),
  }));
}

function extractSourceItems(html) {
  const sourceSection = html.match(/<ul class="srcs">([\s\S]*?)<\/ul>/i)?.[1] ?? "";
  return extractMatches(sourceSection, /<li>([\s\S]*?)<\/li>/gi).map((match, index) => {
    const rawHtml = match[1].trim();
    const links = extractMatches(rawHtml, /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi).map((link) => ({
      label: compact(link[2]),
      url: decodeEntities(link[1]),
    }));
    return {
      index: index + 1,
      text: compact(rawHtml),
      links,
    };
  });
}

function extractCards(html) {
  return extractMatches(html, /<div class="pcard">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi).map((match) => {
    const block = match[1];
    const name = compact(block.match(/<div class="nm">([\s\S]*?)<span class="yr">/i)?.[1] ?? "");
    const year = compact(block.match(/<span class="yr">([\s\S]*?)<\/span>/i)?.[1] ?? "");
    const caption = compact(block.match(/<div class="cap">([\s\S]*?)<\/div>/i)?.[1] ?? "");
    const specs = extractMatches(block, /<tr><td>([\s\S]*?)<\/td><td(?: class="[^"]+")?>([\s\S]*?)<\/td><\/tr>/gi).map(
      (row) => ({
        key: compact(row[1]),
        value: compact(row[2]),
      }),
    );
    const images = extractMatches(block, /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*\balt=["']([^"']*)["'][^>]*>/gi).map(
      (img) => ({
        src: decodeEntities(img[1]),
        alt: decodeEntities(img[2]),
      }),
    );
    return { name, year, caption, specs, images };
  });
}

function extractSpecSummaryRows(html) {
  const section = html.match(/<h3 class="sub">规格汇总总表\(n=18 带屏 \+ 2 参考\)<\/h3>[\s\S]*?<table class="big">([\s\S]*?)<\/table>/i)?.[1] ?? "";
  return extractMatches(section, /<tr>([\s\S]*?)<\/tr>/gi)
    .slice(1)
    .map((match) => {
      const cells = extractMatches(match[1], /<td(?: class="[^"]+")?>([\s\S]*?)<\/td>/gi).map((cell) => compact(cell[1]));
      return {
        product: cells[0],
        group: cells[1],
        size: cells[2],
        resolution: cells[3],
        panelTouch: cells[4],
        mechanism: cells[5],
        camera: cells[6],
        light: cells[7],
        voice: cells[8],
      };
    });
}

function sourceForProduct(product, sourceItems) {
  const names = [product.name, ...product.aliases].map((name) => normalizeMatchText(name).split(" / ")[0]);
  return sourceItems.find((item) => {
    const sourceText = normalizeMatchText(item.text);
    return names.some((name) => sourceText.includes(name));
  });
}

function cardForProduct(product, cards) {
  const names = [product.name, ...product.aliases].map((name) => normalizeMatchText(name).split(" / ")[0]);
  return cards.find((card) => {
    const cardName = normalizeMatchText(card.name);
    return names.some((name) => cardName.includes(name));
  });
}

function summaryForProduct(product, summaryRows) {
  const names = [product.name, ...product.aliases].map((name) => normalizeMatchText(name).split(" / ")[0]);
  return summaryRows.find((row) => {
    const rowName = normalizeMatchText(row.product);
    return names.some((name) => rowName.includes(name) || name.includes(rowName));
  });
}

function splitPanelTouch(panelTouch) {
  const value = valueOrUnknown(panelTouch);
  if (value === "unknown-after-claude-html-extract") {
    return { panel: value, touch: value };
  }

  const hasTouch = /触控|touch/i.test(value);
  const panel = value
    .replace(/[·,，]?\s*(10 点)?触控(\+笔)?/g, "")
    .replace(/电容多点/g, "电容多点触控")
    .trim();

  return {
    panel: panel || value,
    touch: hasTouch ? value : "unknown-after-claude-html-extract",
  };
}

function storageStackingForProduct(product, summary, card) {
  const cardSpecs = Object.fromEntries((card?.specs ?? []).map((spec) => [spec.key, spec.value]));
  const combined = [summary?.mechanism, cardSpecs["结构"], cardSpecs["定位"], cardSpecs["算力"], cardSpecs["交互"], card?.caption]
    .filter(Boolean)
    .join(" · ");

  const specific = {
    "lg-stanbyme-go": "军规手提箱收纳; 完全平躺模式; 内置电池约 3h",
    "aoostar-g-flip-370": "翻转屏合拢可保护屏幕; Claude 未给堆叠方案",
    "miniproca-aio-ryzen-7-inch-4k-flip-screen-mini-pc": "顶盖整体翻起; 合盖即收纳",
    "viewdock-gen2": "顶部弹起铰链; 收纳态顶面复用为 15W Qi 无线充电板",
    "ayaneo-am01s": "0-90° 翻转; 合拢时与顶面齐平",
    "nvidia-dgx-spark": "官方支持双机 ConnectX-7 200Gb/s 背对背成簇",
    "apple-mac-mini-m4": "社区竖插/叠放收纳配件; 底面进风顶面排风限制直接堆叠",
  };

  if (specific[product.id]) return specific[product.id];
  if (/收纳|堆叠|成簇|竖插|手提箱|合拢|合盖|无线充|电池|支架|导轨|壁挂/i.test(combined)) {
    return valueOrUnknown(combined);
  }
  return "unknown-after-claude-html-extract";
}

function productJson(productRows) {
  return productRows.map((row) => {
    const { product, summary, card, source } = row;
    const status = product.imageStatus ?? "needs-live-verification";
    const cardSpecs = Object.fromEntries((card?.specs ?? []).map((spec) => [spec.key, spec.value]));
    const panelTouch = splitPanelTouch(summary?.panelTouch);
    return {
      id: product.id,
      name: product.name,
      group: product.group,
      aliases: product.aliases,
      screen: valueOrUnknown(summary?.size ?? cardSpecs["屏幕"]),
      resolution: valueOrUnknown(summary?.resolution),
      panel: panelTouch.panel,
      touch: panelTouch.touch,
      mechanism: valueOrUnknown(summary?.mechanism ?? cardSpecs["结构"]),
      camera: valueOrUnknown(summary?.camera),
      light: valueOrUnknown(summary?.light),
      voice: valueOrUnknown(summary?.voice),
      storageStacking: storageStackingForProduct(product, summary, card),
      sourceStatus: source ? "seeded-from-claude-appendix; needs-live-verification" : "needs-live-verification",
      imageStatus: status,
    };
  });
}

function markdownTable(headers, rows) {
  const escapeCell = (value) => String(value ?? "").replace(/\n/g, "<br>").replace(/\|/g, "\\|");
  return [
    `| ${headers.map(escapeCell).join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(escapeCell).join(" | ")} |`),
  ].join("\n");
}

function cardImageRefs(card) {
  if (!card?.images?.length) return "remote/no local asset";
  return card.images
    .map((image) => (image.src.startsWith("report_assets/") ? image.src.replace("report_assets/", "") : image.src))
    .join("<br>");
}

function buildDistributionAndStructureVisuals() {
  const visuals = [
    {
      name: "Distribution A: screen size by resolution",
      source: "HTML §01b, 分布图 A · 屏幕尺寸 × 分辨率(长边像素)",
      ledger: "Tracks the 1.9-27 inch screen band, secondary-screen band 1.9-5 inch, integrated-interaction band 5.5-8 inch, 10 inch+ terminal band, and the 1280x800 / 1280x720 mainstream line with 6 products on that line.",
    },
    {
      name: "Mechanical structure type statistics",
      source: "HTML §01b distribution/statistics visual",
      ledger: "Tracks the report's mechanical clustering across fixed, flip hinge, motorized, support-arm/case, tablet/HMI, and stackable compute references.",
    },
    {
      name: "Five mechanical structure archetypes",
      source: "HTML §02 structure archetype visual",
      ledger: "Tracks fixed embedded screen, flip-hinge secondary screen, motorized rotation, arm/case large-screen terminal, and tablet/HMI panel archetypes.",
    },
    {
      name: "Flip-hinge side view",
      source: "HTML 图 D · 翻转铰链侧视白描",
      ledger: "Tracks 0° storage, 65° common-use, and 90° upright hinge positions, top-front hinge placement, friction torque hinge, screen face-down protection when closed, FPC through-axis routing, and 20k+ open-close life target.",
    },
  ];

  return `## Distribution And Structure Visuals

${markdownTable(["Required content group", "HTML source", "Ledger note"], visuals.map((visual) => [visual.name, visual.source, visual.ledger]))}
`;
}

function buildMorphologyAndRecommendations() {
  const rows = [
    [
      "Morphology matrix",
      "1,296 theoretical combinations",
      "3 screen sizes x 3 resolutions x 4 mechanisms x 2 camera options x 3 light options x 2 voice options x 3 stacking/interconnect options.",
    ],
    [
      "Feasibility reduction",
      "about 24 engineering-feasible architectures",
      "Removes mutually poor pairings including motorized tracking vs stackable top cover, 4K on small secondary screens, and 800x480 on interaction-grade screens.",
    ],
    [
      "Recommendation A",
      "灯塔 one-piece interaction tower",
      "8 inch touch module plus stackable compute base; sensor top cap remains on top; compute boxes grow downward.",
    ],
    [
      "Recommendation B",
      "潜望 flip secondary-screen workstation",
      "5 inch FHD flip touch display for Agent status and authorization; production view stays on external display.",
    ],
    [
      "Recommendation C",
      "分体 magnetic detachable screen",
      "8 inch battery screen module can detach as a roaming control panel; marked as Gen2 exploration due to BOM and firmware complexity.",
    ],
    [
      "Tower magnetic stacking",
      "Stacking sketch option I",
      "Preferred 1-4 unit tower; perception top cap fixed above compute layers; Pogo power/wake bus; side-in/rear-out airflow.",
    ],
    [
      "Vertical rack",
      "Stacking sketch option II",
      "托架竖插 rack; best cooling and hot-swap feel; wider desk footprint.",
    ],
    [
      "Side-by-side high-bandwidth pair",
      "Stacking sketch option III",
      "Horizontal side-by-side plus rear bridge; shortest interconnect path; best for two units and not for 3+ units.",
    ],
    [
      "Reconciliation note",
      "Original 8 inch baseline vs final 5-7.x direction",
      "Claude's base recommendation starts at 8 inch / 1280x800 for full Agent interaction and supply-chain maturity. Preserve this as source material while later design work may reconcile it with a smaller 5-7.x Desky direction after Task 4/5 verification.",
    ],
  ];

  return `## Morphology And Recommendations

${markdownTable(["Required content group", "Claude report content", "Ledger note"], rows)}
`;
}

function buildLedger({ copiedHtmlPath, productRows, laws, risks, sourceItems, htmlAssetRefs, remoteImageUrls }) {
  return `# Claude HTML Report Content Ledger

Source HTML: \`${sourceHtmlPath}\`

Copied HTML: \`${copiedHtmlPath}\`

Generated by: \`npm run extract\`

## Extraction Summary

- Products tracked: ${productRows.length}
- Local HTML asset refs discovered: ${htmlAssetRefs.length}
- Remote image URLs discovered: ${remoteImageUrls.length}
- Pattern laws extracted: ${laws.length}
- Risk notes extracted: ${risks.length}
- Source appendix items extracted: ${sourceItems.length}

## Important Carry-Forward Constraint

The source HTML now uses a CNX remote image for the Higole / Gole1 Pro card, but the product is still marked \`suspect/wrong-image-needs-web-replacement\` so Task 4/5 must verify the corrected source image before treating it as final evidence. \`higole-scene.png\` remains copied because it is still referenced by the current HTML as a collected Violoop night-scene asset, not as final Higole evidence.

## Local Assets

${markdownTable(
  ["#", "Asset", "Ledger status"],
  localAssetFiles.map((file, index) => [
    index + 1,
    `public/images/competitors/local/${file}`,
    file === "higole-scene.png"
      ? "copied; legacy filename; not final Higole evidence; Higole needs corrected-source verification"
      : "copied from Claude report_assets; needs-live-verification",
  ]),
)}

## Remote Images Embedded In HTML

${markdownTable(
  ["#", "Remote image URL"],
  remoteImageUrls.map((url, index) => [index + 1, url]),
)}

${buildDistributionAndStructureVisuals()}

${buildMorphologyAndRecommendations()}

## Product Coverage

${markdownTable(
  ["#", "Product", "Claude card matched", "Claude card image refs", "Image status", "Source status"],
  productRows.map((row, index) => [
    index + 1,
    row.product.name,
    row.card ? row.card.name : "not found in product-card HTML; retained from task list",
    cardImageRefs(row.card),
    row.product.imageStatus ?? "needs-live-verification",
    row.source ? "appendix item extracted; needs-live-verification" : "needs-live-verification",
  ]),
)}

## Pattern Laws

${laws.map((law) => `### ${law.index}. ${law.title}\n\n${law.body}`).join("\n\n")}

## Risk Notes

${risks.map((risk) => `### ${risk.index}\n\n${risk.body}`).join("\n\n")}

## Source Appendix Items

${sourceItems.map((item) => `${item.index}. ${item.text}`).join("\n")}
`;
}

function buildImageInventory({ htmlAssetRefs, remoteImageUrls, copiedAssets }) {
  const localRows = localAssetFiles.map((file) => [
    file,
    copiedAssets.includes(file) ? "copied" : "missing",
    file === "higole-scene.png"
      ? "legacy filename; not final Higole evidence; verify current CNX Higole image in Task 4/5"
      : "needs-live-verification",
  ]);

  return `# Image Inventory

## Local Assets Copied From Claude Report

${markdownTable(["File", "Copy status", "Research status"], localRows)}

## HTML Local Asset References

${htmlAssetRefs.map((ref) => `- \`${ref}\``).join("\n")}

## Remote Image URLs From HTML

${remoteImageUrls.map((url) => `- ${url}`).join("\n")}

## Higole Warning

The current source HTML uses the CNX remote image for the Higole / Gole1 Pro card. It still needs online verification or replacement confirmation in Task 4/5 before being accepted as final evidence. \`higole-scene.png\` is intentionally preserved because the HTML still references it as a collected Violoop night-scene asset; it must not be reused as final Higole evidence.
`;
}

function buildSourceRegistry(productRows, sourceItems) {
  const rows = productRows.map((row) => [
    row.product.name,
    row.source ? row.source.links.map((link) => `[${link.label}](${link.url})`).join("<br>") || row.source.text : "needs-live-verification",
    row.source ? "extracted-from-claude-appendix; needs-live-verification" : "needs-live-verification",
  ]);

  return `# Source Registry

All source entries are extracted from Claude's source appendix and still require live verification before publication.

${markdownTable(["Product", "Extracted source candidates", "Status"], rows)}

## Non-Product Appendix Notes

${sourceItems
  .filter((item) => item.links.length === 0)
  .map((item) => `- ${item.text}`)
  .join("\n")}
`;
}

function buildProductSpecMatrix(productRows) {
  const rows = productRows.map((row) => {
    const specs = Object.fromEntries((row.card?.specs ?? []).map((spec) => [spec.key, spec.value]));
    return [
      row.product.name,
      row.product.group,
      row.summary?.size ?? "needs-live-verification",
      row.summary?.resolution ?? "needs-live-verification",
      row.summary?.panelTouch ?? "needs-live-verification",
      row.summary?.mechanism ?? specs["结构"] ?? "needs-live-verification",
      row.summary?.camera ?? "needs-live-verification",
      row.summary?.light ?? "needs-live-verification",
      row.summary?.voice ?? "needs-live-verification",
      specs["交互"] ?? specs["算力"] ?? specs["定位"] ?? specs["对 Agent PC 的启示"] ?? "needs-live-verification",
      row.card?.caption ?? "summary-table-only/no-card-image-caption",
      row.product.imageStatus ?? "needs-live-verification",
    ];
  });

  return `# Product Spec Matrix

Claude HTML values are extracted as a starting point only. Task 4 must verify product facts against live sources before publication.

${markdownTable(["Product", "Group", "Claude size", "Claude resolution", "Claude panel/touch", "Claude mechanism", "Claude camera", "Claude light", "Claude voice", "Claude interaction/compute note", "Claude image caption", "Image status"], rows)}
`;
}

async function ensureFileExists(filePath) {
  await stat(filePath);
}

async function main() {
  await ensureFileExists(sourceHtmlPath);
  await mkdir(sourceHtmlDir, { recursive: true });
  await mkdir(localImageDir, { recursive: true });
  await mkdir(researchDir, { recursive: true });

  const html = await readFile(sourceHtmlPath, "utf8");
  const copiedHtmlPath = path.join(sourceHtmlDir, "claude-report.html");
  await copyFile(sourceHtmlPath, copiedHtmlPath);

  const copiedAssets = [];
  for (const file of localAssetFiles) {
    const source = path.join(sourceAssetDir, file);
    const target = path.join(localImageDir, file);
    await ensureFileExists(source);
    await copyFile(source, target);
    copiedAssets.push(file);
  }

  const remoteImageUrls = extractRemoteImageUrls(html);
  const htmlAssetRefs = extractHtmlAssetRefs(html);
  const laws = extractLaws(html);
  const risks = extractRisks(html);
  const sourceItems = extractSourceItems(html);
  const cards = extractCards(html);
  const summaryRows = extractSpecSummaryRows(html);
  const productRows = products.map((product) => ({
    product,
    card: cardForProduct(product, cards),
    source: sourceForProduct(product, sourceItems),
    summary: summaryForProduct(product, summaryRows),
  }));

  assertCount("products", products.length, 20);
  assertCount("local assets", copiedAssets.length, 15);
  assertCount("pattern laws", laws.length, 8);
  assertCount("risk notes", risks.length, 5);
  assertCount("source appendix items", sourceItems.length, 20);

  const productRecords = productJson(productRows);
  await writeFile(path.join(researchDir, "products.json"), `${JSON.stringify(productRecords, null, 2)}\n`);
  await writeFile(
    path.join(researchDir, "html-report-content-ledger.md"),
    buildLedger({ copiedHtmlPath, productRows, laws, risks, sourceItems, htmlAssetRefs, remoteImageUrls }),
  );
  await writeFile(
    path.join(researchDir, "image-inventory.md"),
    buildImageInventory({ htmlAssetRefs, remoteImageUrls, copiedAssets }),
  );
  await writeFile(path.join(researchDir, "source-registry.md"), buildSourceRegistry(productRows, sourceItems));
  await writeFile(path.join(researchDir, "product-spec-matrix.md"), buildProductSpecMatrix(productRows));

  console.log(`Extracted ${productRecords.length} products`);
  console.log(`Copied ${copiedAssets.length} local assets`);
  console.log(`Found ${remoteImageUrls.length} remote image URLs`);
  console.log(`Found ${laws.length} pattern laws`);
  console.log(`Found ${risks.length} risk notes`);
  console.log(`Found ${sourceItems.length} source appendix items`);
  console.log(`Discovered ${htmlAssetRefs.length} HTML asset refs`);
  for (const ref of htmlAssetRefs) {
    console.log(`- ${ref}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

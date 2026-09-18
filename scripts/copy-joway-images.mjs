/**
 * Copy selected product images from the shared library into public/products.
 * Library is read-only.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const LIBRARY = "/Users/solomon/Documents/Ecommerce-Product-Library";
const DEST = path.join(ROOT, "public", "products");

const catalog = JSON.parse(fs.readFileSync(path.join(LIBRARY, "data", "products.json"), "utf8"));
const byId = Object.fromEntries(catalog.products.map((p) => [p.id, p]));
const existingPaths = new Set(catalog.products.map((p) => p.path));

const selections = [
  ["arc-floor-lamp", "asset_094"],
  ["ceramic-table-lamp", "asset_098", "asset_099"],
  ["ceramic-vase", "asset_100", "asset_101"],
  ["glass-bud-vase", "asset_107", "asset_108"],
  ["knit-throw", "asset_109"],
  ["linen-cushion", "asset_112", "asset_113"],
  ["woven-basket", "asset_122", "asset_123"],
  ["storage-box", "asset_117"],
  ["wall-shelf", "asset_106"],
  ["ceramic-planter", "asset_096", "asset_097"],
  ["wooden-side-table", "asset_120"],
  ["round-wall-mirror", "asset_116"],
  ["wall-clock", "asset_114"],
  ["decorative-bowl", "asset_103"],
  ["bath-towel-set", "asset_078"],
  ["ceramic-mug", "asset_125", "asset_126"],
  ["wine-glass", "asset_141"],
  ["serving-board", "asset_142", "asset_143"],
  ["dinner-plate", "asset_137", "asset_138"],
  ["ceramic-teapot", "asset_140"],
  ["espresso-cup", "asset_129"],
  ["travel-tumbler", "asset_132"],
  ["salt-pepper-set", "asset_134"],
  ["serving-bowl", "asset_135"],
  ["tea-kettle", "asset_139"],
  ["kitchen-scale", "asset_133"],
  ["flatware-set", "asset_128"],
  ["glass-storage-jar", "asset_130", "asset_131"],
  ["picnic-blanket", "asset_175", "asset_176"],
  ["picnic-basket", "asset_174"],
  ["outdoor-hammock", "asset_159", "asset_160"],
  ["watering-can", "asset_179"],
  ["garden-tools", "asset_169"],
  ["fire-pit", "asset_166"],
  ["outdoor-lantern", "asset_161", "asset_162"],
  ["outdoor-bottle", "asset_173"],
  ["weekender-duffel", "asset_183"],
  ["travel-backpack", "asset_198", "asset_199"],
  ["luggage-tag", "asset_191"],
  ["canvas-daypack", "asset_189"],
  ["travel-suitcase", "asset_195", "asset_196"],
  ["document-cover", "asset_194"],
  ["key-organizer", "asset_008"],
  ["sunglasses", "asset_016", "asset_017"],
  ["phone-pouch", "asset_014"],
  ["messenger-bag", "asset_192"],
  ["umbrella", "asset_018"],
  ["crossbody-bag", "asset_185", "asset_186"],
  ["leather-wallet", "asset_010", "asset_011"],
  ["cotton-tee", "asset_027", "asset_028"],
  ["baseball-cap", "asset_022", "asset_023"],
  ["wool-scarf", "asset_019"],
  ["leather-belt", "asset_009"],
  ["casual-shorts", "asset_025"],
  ["everyday-sandals", "asset_039"],
  ["yoga-mat", "asset_076", "asset_077"],
  ["yoga-block", "asset_075"],
  ["sports-bottle", "asset_072"],
  ["essential-oil-set", "asset_079"],
  ["reed-diffuser", "asset_115"],
  ["soap-bar-set", "asset_090"],
  ["desk-lamp", "asset_045"],
  ["power-bank", "asset_055"],
  ["laptop-stand", "asset_148"],
  ["hardcover-notebook", "asset_146", "asset_147"],
  ["pen-cup", "asset_150"],
  ["fountain-pen", "asset_145"],
  ["weekly-planner", "asset_154"],
  ["gift-box", "asset_080", "asset_081"],
  ["chess-set", "asset_092"],
  ["scented-candle", "asset_088", "asset_089"],
  ["jewelry-dish", "asset_007"],
  ["playing-cards", "asset_085"],
  ["tea-gift-set", "asset_091"],
];

fs.mkdirSync(DEST, { recursive: true });

let copied = 0;
const used = new Set();

for (const [slug, primaryId, secondaryId] of selections) {
  const primary = byId[primaryId];
  if (!primary) throw new Error(`Missing ${primaryId}`);
  if (used.has(primary.path)) throw new Error(`Duplicate primary ${primary.path}`);
  used.add(primary.path);

  const src1 = path.join(LIBRARY, primary.path);
  const dest1 = path.join(DEST, `${slug}-1.jpg`);
  fs.copyFileSync(src1, dest1);
  copied++;

  let secondPath = null;
  if (secondaryId && byId[secondaryId]) {
    secondPath = byId[secondaryId].path;
  } else {
    const guess = primary.path.replace("-001.jpg", "-002.jpg");
    if (guess !== primary.path && existingPaths.has(guess)) secondPath = guess;
  }

  if (secondPath && !used.has(secondPath)) {
    used.add(secondPath);
    fs.copyFileSync(path.join(LIBRARY, secondPath), path.join(DEST, `${slug}-2.jpg`));
    copied++;
  }
}

console.log(`Copied ${copied} files for ${selections.length} products.`);
console.log(`Unique paths: ${used.size}`);

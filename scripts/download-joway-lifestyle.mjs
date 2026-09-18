/**
 * Download JOWAY homepage / category lifestyle images from Unsplash.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

const TARGETS = [
  { file: "hero/hero-1.jpg", id: "photo-1600210492486-724fe5c67fb0", width: 2400 },
  { file: "banners/intro.jpg", id: "photo-1600585154340-be6161a56a0c", width: 1800 },
  { file: "banners/living.jpg", id: "photo-1618220179428-22790b34118a", width: 1600 },
  { file: "banners/outdoor.jpg", id: "photo-1600566753190-17fedebaa088", width: 1600 },
  { file: "banners/travel.jpg", id: "photo-1469854523086-cc02fe5d8800", width: 1600 },
  { file: "banners/weekend.jpg", id: "photo-1500534314209-a25ddb2bd429", width: 1600 },
  { file: "banners/about.jpg", id: "photo-1600607687644-c7171b42498b", width: 1600 },
  { file: "banners/promo.jpg", id: "photo-1600566753086-00f18fb6b3ea", width: 1800 },
  { file: "banners/workspace.jpg", id: "photo-1497366216548-37526070297c", width: 1600 },
  { file: "categories/home.jpg", id: "photo-1616486338812-3dadae4b4ace", width: 1200 },
  { file: "categories/kitchen-dining.jpg", id: "photo-1556911220-b0c809dfd315", width: 1200 },
  { file: "categories/outdoor-leisure.jpg", id: "photo-1600210492486-724fe5c67fb0", width: 1200 },
  { file: "categories/travel.jpg", id: "photo-1488646953014-85cb44e25828", width: 1200 },
  { file: "categories/everyday.jpg", id: "photo-1553062407-98eeb64c6a62", width: 1200 },
  { file: "categories/apparel-accessories.jpg", id: "photo-1441986300917-64674bd600d8", width: 1200 },
  { file: "categories/wellness.jpg", id: "photo-1545205597-3d9d02c29597", width: 1200 },
  { file: "categories/tech-workspace.jpg", id: "photo-1593062096033-9a26b09da705", width: 1200 },
  { file: "categories/gifts.jpg", id: "photo-1549465220-1a8b9238cd48", width: 1200 },
];

function unsplashUrl(photoId, width) {
  return `https://images.unsplash.com/${photoId}?fm=jpg&q=85&w=${width}&auto=format&fit=crop`;
}

async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "JOWAY-Storefront/1.0" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error("File too small");
  return buf;
}

async function main() {
  let ok = 0;
  for (const target of TARGETS) {
    const dest = path.join(PUBLIC, target.file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    try {
      const buf = await download(unsplashUrl(target.id, target.width));
      fs.writeFileSync(dest, buf);
      ok++;
      console.log(`✓ ${target.file} (${Math.round(buf.length / 1024)}kb)`);
    } catch (err) {
      console.error(`✗ ${target.file}: ${err.message}`);
    }
  }
  console.log(`\nDone: ${ok}/${TARGETS.length}`);
  if (ok !== TARGETS.length) process.exit(1);
}

main();

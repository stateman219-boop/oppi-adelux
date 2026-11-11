import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "src", "main.ts");
let source = fs.readFileSync(sourcePath, "utf8");
const match = source.match(/((?:const|let)\s+products:\s*Product\[\]\s*=\s*\[)([\s\S]*?)(\n\];)/);
if (!match) throw new Error("Could not locate the ADELUX products array in src/main.ts (expected const or let products: Product[] = [...]).");

const mappings = [
  { folder: "images", category: "Traditional Wear", prefix: "Agbada Design", price: 20000, color: "Made to order", note: "Custom Agbada design · Enquire for fabric, colour and sizing." },
  { folder: "images 2", category: "Dresses", prefix: "Dress Design", price: 18000, color: "For her", note: "ADELUX dress collection." },
  { folder: "image 3", category: "Shirts & Tops", prefix: "Shirt Design", price: 15000, color: "Unisex", note: "ADELUX shirts and tops collection." },
  { folder: "image 4", category: "Sportswear", prefix: "Jersey Design", price: 25000, color: "Unisex", note: "ADELUX jersey collection." },
  { folder: "kids wear", category: "Kids", prefix: "Adelux Pro", price: 0, color: "Made to order", note: "ADELUX kids wear collection. Contact us for sizes, colours and pricing." }
];

const body = match[2];
const existingIds = [...body.matchAll(/\bid:\s*(\d+)/g)].map(item => Number(item[1]));
let nextId = Math.max(0, ...existingIds) + 1;
const knownHashes = new Set();
const knownPaths = new Set();

function localPathFromImageUrl(value) {
  try {
    const pathname = decodeURIComponent(new URL(value).pathname).replace(/^\/+/, "");
    const repoPrefix = "stateman219-boop/oppi-adelux/main/";
    const marker = pathname.indexOf(repoPrefix);
    if (marker < 0) return null;
    const relativePath = pathname.slice(marker + repoPrefix.length);
    const absolute = path.resolve(root, relativePath);
    if (!absolute.startsWith(root + path.sep)) return null;
    return absolute;
  } catch { return null; }
}
for (const item of body.matchAll(/image:\s*'([^']+)'/g)) {
  const absolute = localPathFromImageUrl(item[1]);
  if (absolute && fs.existsSync(absolute) && fs.statSync(absolute).isFile()) {
    knownPaths.add(absolute);
    knownHashes.add(crypto.createHash("sha256").update(fs.readFileSync(absolute)).digest("hex"));
  }
}
const categoryCounts = {};
for (const item of body.matchAll(/category:\s*'([^']+)'/g)) categoryCounts[item[1]] = (categoryCounts[item[1]] || 0) + 1;

const additions = [];
for (const mapping of mappings) {
  const directory = path.join(root, mapping.folder);
  if (!fs.existsSync(directory)) continue;
  const files = fs.readdirSync(directory).filter(name => /\.(jpe?g|png|webp|avif)$/i.test(name)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  for (const name of files) {
    const absolute = path.join(directory, name);
    if (!fs.statSync(absolute).isFile() || knownPaths.has(absolute)) continue;
    const hash = crypto.createHash("sha256").update(fs.readFileSync(absolute)).digest("hex");
    if (knownHashes.has(hash)) {
      console.log("Skipped duplicate image content:", path.relative(root, absolute));
      knownPaths.add(absolute);
      continue;
    }
    knownHashes.add(hash);
    knownPaths.add(absolute);
    categoryCounts[mapping.category] = (categoryCounts[mapping.category] || 0) + 1;
    const designNumber = String(categoryCounts[mapping.category]).padStart(2, "0");
    const productName = mapping.prefix + " " + designNumber;
    const relative = path.relative(root, absolute).split(path.sep).map(encodeURIComponent).join("/");
    const imageUrl = "https://raw.githubusercontent.com/stateman219-boop/oppi-adelux/main/" + relative;
    additions.push("  { id: " + nextId++ + ", name: '" + productName + "', category: '" + mapping.category + "', price: " + mapping.price + ", color: '" + mapping.color + "', image: '" + imageUrl + "', note: '" + mapping.note + "' },");
    console.log("Added:", productName, "from", path.relative(root, absolute));
  }
}

if (additions.length) {
  const updated = source.replace(match[0], match[1] + body + "\n" + additions.join("\n") + match[3]);
  fs.writeFileSync(sourcePath, updated);
}
console.log("ADELUX image sync complete. New products added:", additions.length);

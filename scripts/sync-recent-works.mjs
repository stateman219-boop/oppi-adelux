import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, "recent works");
const outputDir = path.join(root, "dist", "recent works");
const manifestPath = path.join(root, "dist", "recent-works.json");
if (!fs.existsSync(sourceDir)) throw new Error('The "recent works" folder is missing.');
fs.mkdirSync(outputDir, { recursive: true });
const files = fs.readdirSync(sourceDir)
  .filter(name => /\.(jpe?g|png|webp|avif)$/i.test(name))
  .filter(name => fs.statSync(path.join(sourceDir, name)).isFile())
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
for (const name of files) fs.copyFileSync(path.join(sourceDir, name), path.join(outputDir, name));
const manifest = files.map(name => ({
  name,
  src: "/recent%20works/" + encodeURIComponent(name)
}));
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Collected ${files.length} Recent Works image(s).`);

// Genera miniaturas WebP (máx. 1024 px de lado largo) para el anillo 3D.
//
// Uso:
//   npm i -D sharp
//   node scripts/make-thumbs.mjs
//
// Lee:    public/photos/full/*.(jpg|jpeg|png|webp)
// Escribe: public/photos/thumb/<nombre>.webp
// Imprime las medidas de cada miniatura para copiarlas a photos.js (width/height).
import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const FULL_DIR = "public/photos/full";
const THUMB_DIR = "public/photos/thumb";
const MAX_SIDE = 1024;
const QUALITY = 78;

await mkdir(THUMB_DIR, { recursive: true });

let files;
try {
  files = (await readdir(FULL_DIR)).filter((file) => /\.(jpe?g|png|webp)$/i.test(file));
} catch {
  console.error(`No existe ${FULL_DIR}. Poné ahí tus fotos originales y volvé a correr el script.`);
  process.exit(1);
}

if (!files.length) {
  console.error(`No hay imágenes en ${FULL_DIR}.`);
  process.exit(1);
}

for (const file of files) {
  const name = path.parse(file).name;
  const out = path.join(THUMB_DIR, `${name}.webp`);
  const info = await sharp(path.join(FULL_DIR, file))
    .rotate() // respeta la orientación EXIF
    .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);
  console.log(`${file} -> ${out}  (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`);
}

console.log(`\nListo: ${files.length} miniaturas en ${THUMB_DIR}`);

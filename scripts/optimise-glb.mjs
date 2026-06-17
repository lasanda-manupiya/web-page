/**
 * Optimise the temporary placeholder GLB for web delivery (PDF §9.6, §15.2).
 * Source: office_building.glb (37.9 MB, ~643k tris) -> public/models/{desktop,mobile}.
 * Geometry: dedup + weld + prune + Draco compression. Textures: WebP via sharp + resize.
 *
 * NOTE: This optimises a TEMPORARY placeholder model. When the real IFC4-derived GLB
 * arrives, point INPUT at it and re-run; no app code changes needed.
 */
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, draco, textureCompress } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';
import sharp from 'sharp';
import { statSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INPUT = resolve(ROOT, 'office_building.glb');
const OUT_DIR = resolve(ROOT, 'public/models');
mkdirSync(OUT_DIR, { recursive: true });

const mb = (p) => (statSync(p).size / 1024 / 1024).toFixed(2) + ' MB';

async function main() {
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  });

  console.log('Input:', INPUT, mb(INPUT));

  // ---- Desktop variant ----
  const desktop = await io.read(INPUT);
  await desktop.transform(
    dedup(),
    weld(),
    prune({ keepAttributes: false }),
    textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [1024, 1024], quality: 80 }),
    draco({ quantizePosition: 14, quantizeNormal: 10, quantizeTexcoord: 12 })
  );
  const desktopOut = resolve(OUT_DIR, 'office-desktop.glb');
  await io.write(desktopOut, desktop);
  console.log('Desktop:', desktopOut, mb(desktopOut));

  // ---- Mobile variant (smaller textures, tighter quantisation) ----
  const mobile = await io.read(INPUT);
  await mobile.transform(
    dedup(),
    weld(),
    prune({ keepAttributes: false }),
    textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [512, 512], quality: 70 }),
    draco({ quantizePosition: 12, quantizeNormal: 8, quantizeTexcoord: 10 })
  );
  const mobileOut = resolve(OUT_DIR, 'office-mobile.glb');
  await io.write(mobileOut, mobile);
  console.log('Mobile:', mobileOut, mb(mobileOut));

  console.log('Done.');
}

main().catch((e) => {
  console.error('GLB optimisation failed:', e);
  process.exit(1);
});

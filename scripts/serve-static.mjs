import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve('out');
const port = Number(process.env.PORT || 3000);

const types = {
  '.css': 'text/css; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.wasm': 'application/wasm',
  '.xml': 'application/xml; charset=utf-8',
};

function resolveFile(urlPath) {
  const cleanPath = normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  const candidates = [
    join(root, cleanPath),
    join(root, cleanPath, 'index.html'),
    join(root, `${cleanPath}.html`),
  ];

  return candidates.find((candidate) => {
    try {
      return candidate.startsWith(root) && existsSync(candidate) && statSync(candidate).isFile();
    } catch {
      return false;
    }
  });
}

createServer((req, res) => {
  const file = resolveFile(req.url || '/');
  if (!file) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' });
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Serving static export from ${root} at http://localhost:${port}`);
});

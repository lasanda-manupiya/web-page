// QA crawler: checks every route returns 200, has a single H1, a canonical tag,
// a meta description, and that all internal links resolve. Also validates JSON-LD blocks parse.
const BASE = 'http://localhost:3000';
const ROUTES = [
  '/', '/platform', '/how-it-works', '/3d-demo', '/resources', '/about', '/contact',
  '/bim-ifc-model-analysis', '/ifc-property-extraction', '/bim-quantity-takeoff',
  '/bim-cost-estimation', '/bim-carbon-assessment', '/bim-information-gap-analysis',
  '/digital-twin-risk-modelling', '/scenario-modelling',
  '/solutions/contractors', '/solutions/asset-managers', '/solutions/aviation',
  '/solutions/transport-infrastructure', '/solutions/insurance-risk', '/solutions/sustainability',
];

const internalLinks = new Set();
let failures = 0;

function count(re, s) { return (s.match(re) || []).length; }

for (const route of ROUTES) {
  const res = await fetch(BASE + route);
  const html = await res.text();
  const h1 = count(/<h1[\s>]/g, html);
  const hasCanonical = /<link[^>]+rel="canonical"/.test(html);
  const hasDesc = /<meta[^>]+name="description"/.test(html);
  const hasTitle = /<title>[^<]+<\/title>/.test(html);
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let jsonLdOk = true;
  for (const m of jsonLdBlocks) { try { JSON.parse(m[1]); } catch { jsonLdOk = false; } }
  // collect internal links
  for (const m of html.matchAll(/href="(\/[^"#]*)"/g)) internalLinks.add(m[1].replace(/\/$/, '') || '/');

  const ok = res.status === 200 && h1 === 1 && hasCanonical && hasDesc && hasTitle && jsonLdOk;
  if (!ok) failures++;
  console.log(
    `${ok ? 'PASS' : 'FAIL'} ${route}  status=${res.status} h1=${h1} canonical=${hasCanonical} desc=${hasDesc} title=${hasTitle} jsonld=${jsonLdBlocks.length}/${jsonLdOk ? 'ok' : 'BAD'}`
  );
}

console.log('\n--- internal link check ---');
const linkResults = [];
for (const link of [...internalLinks].sort()) {
  if (link.startsWith('/_next') || link.startsWith('/draco') || link.startsWith('/models') || link.startsWith('/posters')) continue;
  const r = await fetch(BASE + link, { redirect: 'manual' });
  const ok = r.status === 200;
  if (!ok) failures++;
  linkResults.push(`${ok ? 'OK ' : 'BROKEN'} ${r.status} ${link}`);
}
console.log(linkResults.join('\n'));

// 404 check
const nf = await fetch(BASE + '/this-page-does-not-exist');
console.log(`\n404 route status=${nf.status} (expect 404)`);
if (nf.status !== 404) failures++;

console.log(`\n=== ${failures === 0 ? 'ALL CHECKS PASSED' : failures + ' FAILURE(S)'} ===`);
process.exit(failures === 0 ? 0 : 1);

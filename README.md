# I-Cost Group — Integrated BIM Cost, Carbon and Risk Intelligence Platform

Marketing and product website for the **iCost + SustainZone** integrated platform, presented under the **I-Cost Group** brand. One BIM/IFC model becomes connected **cost, carbon, asset, information-gap and risk** intelligence.

> **Status: prototype.** All cost/carbon/gap/risk values and the 3D model are **clearly-labelled demonstration data**. No customers, results, savings, accuracy figures, certifications or partnerships are claimed. The site is built **staging-safe** (search engines blocked) until launch is approved.

Built with **Next.js 14 (App Router) + TypeScript**, **React Three Fiber / three.js** (interactive 3D), **GSAP** (subtle scroll reveals + camera), **Tailwind CSS**, **Zustand**.

---

## Quick start (local)

```bash
npm install
npm run dev          # http://localhost:3000
```

Production static export:

```bash
npm run build        # writes static files to out/
npm start            # optional local preview of out/ on PORT (default 3000)
```

## Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://platform.i-cost.co.uk` | Canonical/OG/sitemap base URL. **Set to your real domain.** |
| `NEXT_PUBLIC_INDEXABLE` | `false` | `true` makes the site indexable (robots `Allow`, pages `index`). Keep `false` until launch. |


Create `.env.production` (or set in the host panel):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_INDEXABLE=true
```

### Contact form

The enquiry form (`/contact` and the homepage section) is static-hosting friendly: it opens the visitor's email app with a prepared message to `kevin@i-cost.co.uk` and CCs `connect@sustainzone.earth`. No server-side API route or SMTP configuration is required for static hosting.

## Deploying on Hestia as a plain static website

This app is configured for `next export`, so Hestia can serve it from `public_html` without Node, PM2, or a reverse proxy.

1. Build the static website locally or on the server:
   ```bash
   npm ci
   npm run build
   ```
2. Upload the **contents of `out/`** into the Hestia web root, for example:
   ```
   /home/icostco/web/new.i-cost.co.uk/public_html/
   ```
3. In Hestia, keep the domain as a normal static website and enable SSL / Let's Encrypt. No Node proxy template is needed.

All required runtime assets are emitted into `out/` during the build.

### What to upload to Hestia

For a static deployment, upload only the generated files inside:

```
out/
```

Do **not** upload the source folders or regenerated development folders to `public_html`:

```
src/
node_modules/
.next/
```

If building directly on the server, keep the source in a separate folder such as `/home/icostco/web/new.i-cost.co.uk/app`, then copy/sync `app/out/` into `public_html/`.

## What's in here

- `src/app/**` — 26 routes (home, platform hub, 8 capability pages, 6 solution pages, how-it-works, 3d-demo, resources, about, contact, custom 404, sitemap.xml, robots.txt).
- `src/components/**` — header (with animated dropdowns), hero + interactive model stage, custom animated `Select`, capability cards, 3D viewer (`three/`), content sections, forms.
- `src/data/*.json` — **demonstration** data package keyed by placeholder IFC GlobalId (model-manifest, element-map, properties, quantities, cost, carbon, gaps, risk, routes, reports, pathways).
- `src/lib/**` — pathway engine, data selectors, SEO/metadata/schema, WebGL/capability helpers.
- `scripts/optimise-glb.mjs` — Draco + WebP GLB optimiser. `scripts/qa-crawl.mjs` — route/link/metadata/JSON-LD QA crawler.
- `phase-1/ … phase-4/`, `*_REGISTER.md`, `PROJECT_STATUS.md`, `CHANGELOG.md` — planning, decision and QA records.

## Swapping in the real model (when ready)

1. Replace `office_building.glb` with the IFC-derived GLB and run `npm run optimise:glb` (writes `public/models/office-{desktop,mobile}.glb`).
2. Update `src/data/element-map.json` to map the new GLB node names → real IFC GlobalIds, and replace the demonstration values in the other `src/data/*.json` files.
   No component changes are required — all data flows through `src/lib/data.ts`.

## Outstanding owner inputs (before go-live)

Purpose-built IFC4 model + verified data · completed capability/claims matrix · confirmed domain · confirmed contact email workflow · final vector logos. See `DECISION_REGISTER.md` / `DEPENDENCY_REGISTER.md`.

## Media credits / licences

- **Hero background video** — "Buildings under construction, aerial view" from [Mixkit](https://mixkit.co/free-stock-video/buildings-under-construction-aerial-view-4010/) (Mixkit Free Licence — free for commercial use, no attribution required). Self-hosted at `public/video/hero-bg.mp4`.
- **Section background images & video poster** — [Unsplash](https://unsplash.com) (Unsplash Licence — free for commercial use, no attribution required), loaded as links from `images.unsplash.com`. To self-host instead (recommended for full control), download them into `public/images/` and swap the URLs.

## Accessibility & performance notes

- Important content is pre-rendered semantic HTML; the 3D canvas is a progressive enhancement with poster / reduced-motion / no-WebGL / mobile fallbacks.
- The model's gentle auto-rotation and scroll/reveal animations respect `prefers-reduced-motion` (they pause when the OS "reduce motion" setting is on).
- Production build verified; QA crawler ("ALL CHECKS PASSED"); no console errors.

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

Production:

```bash
npm run build
npm start            # serves the production build on PORT (default 3000)
```

## Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://platform.i-cost.co.uk` | Canonical/OG/sitemap base URL. **Set to your real domain.** |
| `NEXT_PUBLIC_INDEXABLE` | `false` | `true` makes the site indexable (robots `Allow`, pages `index`). Keep `false` until launch. |
| `PORT` | `3000` | Port for `npm start`. |

Create `.env.production` (or set in the host panel):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_INDEXABLE=true
```

## Deploying on Hestia (Node app)

This is a server-rendered Next.js app. On a Hestia VPS:

1. **Node.js** 18+ installed on the server (the app was developed on Node 20+).
2. Upload / `git clone` this repository into the web domain's app directory.
3. Install and build:
   ```bash
   npm ci
   npm run build
   ```
4. Run it as a long-lived process (PM2 recommended):
   ```bash
   npm i -g pm2
   PORT=3000 NEXT_PUBLIC_SITE_URL=https://your-domain NEXT_PUBLIC_INDEXABLE=true pm2 start "npm start" --name icost-web
   pm2 save
   ```
5. In Hestia, point the domain's **proxy template** (e.g. `NodeJS` / a reverse proxy) at `http://127.0.0.1:3000`, or add an Nginx/Apache reverse-proxy rule forwarding to that port. Enable SSL (Let's Encrypt) for the domain.

All required runtime assets are committed (`public/models`, `public/draco`, `public/brand`, `public/posters`) — no extra downloads are needed to build and run.

> The original source model `office_building.glb` (~37 MB) is **not** committed (size). It is only needed to regenerate the optimised GLBs via `npm run optimise:glb`; the optimised `public/models/*.glb` are already committed, so the app builds and runs without it.

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

Purpose-built IFC4 model + verified data · completed capability/claims matrix · confirmed domain · wired contact backend · final vector logos. See `DECISION_REGISTER.md` / `DEPENDENCY_REGISTER.md`.

## Accessibility & performance notes

- Important content is server-rendered semantic HTML; the 3D canvas is a progressive enhancement with poster / reduced-motion / no-WebGL / mobile fallbacks.
- The model's gentle auto-rotation and scroll/reveal animations respect `prefers-reduced-motion` (they pause when the OS "reduce motion" setting is on).
- Production build verified; QA crawler ("ALL CHECKS PASSED"); no console errors.

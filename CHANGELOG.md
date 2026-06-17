# CHANGELOG

All notable additions, changes, approvals and replacements.
Format: date — change — affected files.

---

## 2026-06-17 — Phase 1 initiated

- **Added** project folder structure (`phase-1/`, `project-reference/09-bim-model/glb-desktop/`) and initialised a local Git repository.
- **Added** 8 management files: PROJECT_STATUS, PROJECT_MANIFEST, CHANGELOG, DECISION_REGISTER, DEPENDENCY_REGISTER, ASSET_INVENTORY.csv, ASSUMPTIONS_AND_LIMITATIONS, APPROVAL_LOG.
- **Reviewed** governing PDF `iCost_SustainZone_3D_Website_Project_Guide.pdf` — full text extracted and read (all 20 sections).
- **Reviewed** live reference site `https://new.i-cost.co.uk/` (fetched and analysed).
- **Inspected** `office_building.glb`: glTF 2.0, Sketchfab export, 131 nodes, 57 meshes, 14 materials, 3 textures, ~643k triangles, 37.9 MB. Generic office model — confirmed as a **temporary placeholder**, not the purpose-built IFC4 model the PDF requires.
- **Added** Phase 1 deliverables 01–18.
- **Status:** All Phase 1 outputs drafted; awaiting Approval Gate 1.

## 2026-06-17 — Gate 1 approved; Phase 2 prototype built

- **Approved** Gate 1 ("proceed" with recommended defaults).
- **Scaffolded** Next.js 14.2.15 + TS + Tailwind + R3F/three + drei + GSAP + Zustand (versions pinned).
- **Optimised** placeholder GLB → `public/models/office-desktop.glb` (0.32 MB) + `office-mobile.glb` (0.21 MB) via Draco + WebP (`scripts/optimise-glb.mjs`). Hosted Draco decoder locally at `public/draco/`.
- **Authored** demonstration data package `src/data/*.json` keyed by placeholder IFC GlobalId, all flagged `demonstrationStatus`.
- **Built** prototype: header, hero, 9×9 customer selectors + pathway engine, 3D viewer (loading/progress/error/poster), pointer + keyboard element selection, consistent info panel, 5 modes (Data/Cost/Carbon/Gaps/Risk), one GSAP scroll camera transition, reduced-motion / WebGL-unavailable / mobile fallbacks, evidence & limitations section, prototype enquiry form carrying selection context.
- **Validated** in-browser: production build green, model loads (Draco), mode recolouring + selection confirmed, no console errors. Tuned camera framing; removed double-fetch preload.
- **Added** `phase-2/PHASE_2_PROTOTYPE_REPORT.md`.

## 2026-06-17 — Gate 2 approved; Phase 3 full website built

- **Approved** Gate 2 ("proceed").
- **Added** SEO infrastructure: `lib/seo/{site,metadata,schema}.ts`; `app/sitemap.ts`; `app/robots.ts` (staging Disallow until `SITE.indexable` flipped at launch).
- **Added** content registry `src/content/pages.ts` (8 capabilities + 6 solutions, UK-English, distinct search intent, problem/input/analysis/output/limitations/related/CTA).
- **Added** reusable `ContentPage`, `Breadcrumbs` (+ BreadcrumbList schema), `StorySteps` (8-scene storyline, verbatim PDF §6/§8 messages).
- **Built** all 26 routes: home (now with storyline + Organisation/WebSite schema), `/platform` hub, dynamic `/[slug]` capabilities + `/solutions/[slug]`, `/how-it-works`, `/3d-demo`, `/resources`, `/about`, `/contact`, custom 404.
- **Updated** Header + Footer to real internal links across platform & solutions.
- **Verified** production build green (26/26 prerendered), unique titles/H1s server-rendered, robots/sitemap correct, no console errors.
- **Added** `phase-3/PHASE_3_REPORT.md`.

## Pending
- Owner approval of Phase 3 (Approval Gate 3) before Phase 4 QA & release work begins.

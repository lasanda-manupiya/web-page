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

## 2026-06-17 — Gate 3 approved; Phase 4 QA complete

- **Approved** Gate 3 ("proceed").
- **Fixed (QA-1)** missing mobile menu — added accessible disclosure menu to `Header` (hamburger, `aria-expanded`/`aria-controls`, Esc to close).
- **Fixed (QA-2)** missing home canonical — added `pageMetadata` to `app/page.tsx`.
- **Fixed (QA-3)** missing H1 on `/how-it-works` and `/contact` — added `headingLevel` prop to `HowItWorks`/`Contact`.
- **Added** `scripts/qa-crawl.mjs` (route/link/metadata/JSON-LD crawler) — result: ALL CHECKS PASSED.
- **Tested** responsive (mobile→large-desktop), navigation, selectors/pathways, 3D load/modes/selection, reduced motion, forms, keyboard/landmarks, links, metadata, structured data, sitemap/robots, 404, production build (no console errors).
- **Added** `phase-4/PHASE_4_QA_REPORT.md`.

## 2026-06-17 — Light enterprise redesign + I-Cost Group brand (layout only)

Scope: layout, styling, visual hierarchy only. No content, routes, functionality, selector options, 3D behaviour, model data, SEO metadata or form logic changed.

- **Brand fix:** header/footer now show the **I-Cost Group** logo (`public/brand/icost-group-logo-320.png`, optimised from supplied PNG) and wordmark, replacing the "iCost + SustainZone" lockup. Platform-name references retained in body content.
- **Light enterprise theme:** new Tailwind tokens (ink #0b1f3a, muted #52637a, line #dce4df, mist #f6f8f7, green #42a653). Repointed `accent` to green; migrated all components/pages from the dark navy theme to light.
- **Header:** compact white, logo left, nav centre, green CTA right, thin border; existing mobile menu retained.
- **Hero:** two-column 44/56 (`grid-cols-[44fr_56fr]`); left = eyebrow + H1 + support + selector panel + pathway; right = `HeroModelStage`.
- **HeroModelStage (new):** the interactive 3D model in a light grey rounded stage, compact mode chips (left), and floating white metric panels using existing demonstration values (Total project cost £143,975, Embodied carbon 39.8 tCO₂e, Information gaps). Light canvas background added to `Canvas3D`.
- **CapabilityCards (new):** the four platform layers as numbered cards (01–04) with icons + Explore links; 4-col desktop / 2-col tablet / 1-col mobile, equal height, hover lift.
- **Reveal (new):** subtle GSAP scroll-reveal (reduced-motion aware, visible without JS).
- **Adapted from reference (honesty):** omitted the reference's named client logos (Turner/ARUP/…) and invented stats ($142.7M ↓3.6%, 82% confidence) — these would fabricate endorsements/results, forbidden by the brief. Used existing labelled demonstration values instead.
- **Fixed** horizontal overflow at < lg (added `grid-cols-1` base + `min-w-0`). Verified no overflow mobile→large-desktop; QA crawler ALL CHECKS PASSED; no console errors.
- Full interactive demo (element selection + info panel) remains on `/3d-demo`; home hero keeps interactive modes + selection feedback (one canvas on home).

## Pending
- Owner approval of Phase 4 (Approval Gate 4 / release). Pre-launch tooling (Lighthouse/CWV, axe, screen-reader, real-device) and owner inputs (domain D-05, capability matrix D-01, contact D-04, logos D-03) remain before go-live.

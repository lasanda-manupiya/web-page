# Phase 2 — Technical Prototype Report

**Date:** 2026-06-17
**Status:** Built, runs, production build green, validated in-browser. Awaiting Approval Gate 2.
**Stack:** Next.js 14.2.15 (App Router) + TypeScript · React 18 · React Three Fiber 8 + three 0.169 + drei 9 · GSAP 3 ScrollTrigger · Zustand · Tailwind. All versions pinned (DECISION P-04 resolved).

This prototype is **one responsive page** proving the interaction model on the **temporary placeholder GLB** with **clearly-labelled demonstration data**, exactly as approved at Gate 1.

---

## Phase 2 checklist (against brief / PDF §18 Phase 2)

| # | Requirement | Status | Notes |
|---|-------------|--------|-------|
| 1 | One responsive page | ✅ | `src/app/page.tsx` |
| 2 | Approved header | ✅ | `Header.tsx`, sticky navy, skip link |
| 3 | Approved hero | ✅ | H1 "One Model. Complete Project Intelligence." + supporting line |
| 4 | Objective selector (9) | ✅ | `CustomerSelector.tsx` |
| 5 | Organisation selector (9) | ✅ | `CustomerSelector.tsx` |
| 6 | Real-derived/temporary GLB | ✅ | Optimised placeholder: `office-desktop.glb` 0.32 MB, `office-mobile.glb` 0.21 MB (from 36 MB) |
| 7 | Loading state | ✅ | `LoaderOverlay` with % progress, `aria-live` |
| 8 | Progress state | ✅ | drei `useProgress` bar |
| 9 | Error state | ✅ | `ModelErrorBoundary` → static poster + alert |
| 10 | Static poster fallback | ✅ | `StaticPoster.tsx` + `/posters/hero-poster.svg` |
| 11 | Element selection | ✅ | Pointer pick (raycast) + keyboard element list |
| 12 | Consistent side info panel | ✅ | `InfoPanel.tsx` reused across all modes |
| 13 | Model Data mode | ✅ | properties + quantities |
| 14 | Cost mode | ✅ | gold heatmap + cost breakdown (verified £38,700 on slab) |
| 15 | Carbon mode | ✅ | green heatmap + embodied (A1–A3) values |
| 16 | Information Gaps mode | ✅ | amber + emissive on gap elements + labels |
| 17 | Risk mode | ✅ | red severity + scenario banner (concept demonstration) |
| 18 | One scroll-controlled camera transition | ✅ | GSAP ScrollTrigger scrubs camera framing across the demo section |
| 19 | Reduced motion fallback | ✅ | auto from `prefers-reduced-motion` + manual toggle; disables scrub, static framing |
| 20 | WebGL-unavailable fallback | ✅ | `NoWebGL.tsx`; full data still in DOM |
| 21 | Mobile fallback | ✅ | capability detection serves mobile GLB; layout responsive |
| 22 | Demonstration data labelling | ✅ | `DemoBadge` + per-record `demonstrationStatus`; evidence section |
| 23 | Basic keyboard support | ✅ | tablist arrows, focusable element list, visible focus, skip link |
| 24 | Basic accessibility | ✅ | landmarks, labels, `aria-live`, canvas not a keyboard trap |
| 25 | Performance measurement | ✅ | see below |
| 26 | Mock data adapters (not hardcoded) | ✅ | all data via `lib/data.ts` selectors keyed by GlobalId |

## Measured performance (production build, local)
- **Production build:** passes, no type/lint/console errors.
- **First Load JS for `/`:** **112 kB** (three/R3F/GSAP are dynamically imported, excluded from initial bundle).
- **3D payload:** desktop GLB **335 KB** / mobile **222 KB** (Draco geometry + WebP textures), down from 36 MB source — a ~99% reduction. Triangles 643k→73k (duplicate furniture meshes deduped).
- **DOMContentLoaded / load (warm cache):** ~37 ms / ~53 ms in the preview browser; hero text + poster render before the canvas (LCP candidate is server-rendered, not WebGL).
- **No console errors** across Data→Cost→Carbon→Gaps→Risk switching and element selection.
- Draco decoder hosted locally at `/draco/` (no runtime CDN dependency).

*Note:* exact transfer bytes over the wire were cache-masked in measurement; figures above are authoritative on-disk asset sizes and build output. Full Lighthouse/CWV + real mid-range mobile testing is scheduled for Phase 4.

## What was verified in-browser
- Hero, selectors and pathway summary render (navy palette, correct H1/message).
- 3D model loads via Draco and displays; camera framing centres the model.
- Mode switching recolours the model (Cost → gold confirmed visually).
- Selecting "Concrete Slab Level 01" shows IfcSlab, placeholder GlobalId, £38,700 cost breakdown, demo badge.
- Evidence & limitations section renders with honest demonstration caveats.

## Limitations / known issues (honest)
1. **Placeholder model** — generic office, not the purpose-built IFC4 terminal (DEP-01). No real IFC semantics or GlobalId; ids are `DEMO-*`.
2. **Demonstration data only** — every cost/carbon/gap/risk value is example data (PDF §10); embodied carbon is A1–A3 only; fire scenario is a concept demonstration.
3. **Single scroll transition** — one camera transition is implemented (Phase 2 scope). The full 8-scene pinned sequence (PDF §6/§8) is Phase 3.
4. **Data-mode neutral colouring** — in Model Data mode the glazing reads green-tinted (original material influence). Cosmetic; to refine in Phase 3.
5. **Capability statuses unconfirmed** — copy is conservative pending the matrix (D-01).
6. **Form not wired** — enquiry form is a prototype shell; submission/contact handling pending (D-04).
7. **Mobile capability heuristic** — uses width + `deviceMemory`; to validate on real devices in Phase 4.
8. **No automated a11y/Lighthouse run yet** — manual checks only; full audit in Phase 4.

## Files added in Phase 2 (saved individually)
- Config: `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `.eslintrc.json`, `scripts/optimise-glb.mjs`
- Data package: `src/data/*.json` (manifest, element-map, properties, quantities, cost, carbon, gaps, risk, routes, reports, pathways)
- Lib: `src/lib/{types,data,pathway-engine,modes,store,webgl}.ts`
- Components: `Header, Footer, Hero, CustomerSelector, PathwaySummary, DemoBadge, EvidenceLimits, ContentSections, Contact, StoryExperience`; `three/{Canvas3D, ModelViewer, ModeTabs, InfoPanel, Legend}`, `three/fallbacks/{StaticPoster, NoWebGL}`
- App: `src/app/{layout,page,not-found}.tsx`, `globals.css`
- Assets: `public/models/office-{desktop,mobile}.glb`, `public/draco/*`, `public/posters/hero-poster.svg`

## How to run
```
cd "D:\gitprojects\website for i cost group"
npm install          # first time
npm run optimise:glb # regenerate optimised GLBs from source (or a future real IFC-derived GLB)
npm run build && npm start   # production
npm run dev          # development
```

## Recommendation
Approve Gate 2 to proceed to Phase 3 (full sitemap, full 8-scene story, service/solution pages, SEO/metadata, accessibility hardening), **or** direct changes to interaction/mapping/fallbacks first.

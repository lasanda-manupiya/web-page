# 09 — Front-end Component Architecture

Implements PDF §13.2. Next.js (App Router) + TypeScript. Important content is server-rendered; the 3D canvas is a lazy-loaded client island. Business data is never hardcoded in components — it comes from `data/*.json` keyed by IFC GlobalId via `lib/model-mapping`.

---

## Directory layout (proposed)

```
app/
  layout.tsx                     Root layout: <header>, <main>, <footer>, skip link, metadata defaults
  page.tsx                       Home: scene controller orchestrates objective/org/mode/camera
  platform/page.tsx              Full platform overview (hub)
  bim-ifc-model-analysis/page.tsx
  ifc-property-extraction/page.tsx
  bim-quantity-takeoff/page.tsx
  bim-cost-estimation/page.tsx
  bim-carbon-assessment/page.tsx
  bim-information-gap-analysis/page.tsx
  digital-twin-risk-modelling/page.tsx
  scenario-modelling/page.tsx
  solutions/
    contractors/page.tsx
    asset-managers/page.tsx
    aviation/page.tsx
    transport-infrastructure/page.tsx
    insurance-risk/page.tsx
    sustainability/page.tsx
  how-it-works/page.tsx
  3d-demo/page.tsx
  resources/page.tsx
  about/page.tsx
  contact/page.tsx
  not-found.tsx                  Custom 404
  sitemap.ts                     Next.js sitemap convention
  robots.ts                      Next.js robots convention
  opengraph-image.tsx            Default OG image

components/
  navigation/                    Header, MobileMenu, Breadcrumbs, Footer, SkipLink
  hero/                          Hero, HeroPoster (static fallback)
  customer-selector/             ObjectiveSelect, OrganisationSelect, SelectionBar (change-at-any-time)
  pathway-summary/               PathwaySteps, OutputsList, ChangeSelectionButton
  three-d/
    Canvas3D.tsx                 Dynamic-imported client island (R3F <Canvas>); WebGL guard
    model-viewer/                ModelViewer, ModelLoader (progress/error), Lights, Environment
    scene-controller/            SceneController (active scene/mode/camera target), CameraRig
    mode-selector/               ModeTabs (Data/Cost/Carbon/Gaps/Risk) — accessible tablist
    element-selection/           SelectionManager, Outline/Highlight, Picker (pointer+keyboard)
    information-panel/           InfoPanel (property/cost/carbon/gap/risk), DemoDataBadge
    legends/                     HeatmapLegend, GapLegend, RiskLegend
    fallbacks/                   StaticPoster, ReducedMotionScene, NoWebGL, MobileViewer
  content-sections/              SectionExplainer, ComparisonTable, ProcessSteps, EvidenceLimits
  reports/                       ReportPreviewCard, ReportList (labelled demonstration)
  forms/                         EnquiryForm (carries selection context), FieldError, ConsentNotice

data/
  model-manifest.json  element-map.json  properties.json  quantities.json
  cost-data.json  carbon-data.json  information-gaps.json  risk-scenarios.json
  routes.json  reports.json  pathways.json  demo-labels.json

lib/
  seo/            metadata builders, JSON-LD helpers, canonical/OG utilities
  model-mapping/  GlobalId resolver, GLB-node↔GlobalId map, data selectors, pathway-engine
  analytics/      event wrappers (post-consent)
  validation/     form + data-shape validation (zod), demo-data guards

public/
  models/         glb-desktop/, glb-mobile/   (optimised)
  posters/        per-scene static posters + hero poster
  images/         brand, OG, content imagery
  video/          optional animatic / reduced-motion clip
```

## Rendering strategy
- **Server Components** for all pages and content sections (text, tables, metadata) → SEO + fast first paint.
- **Client island** only for interactive 3D and selectors. `Canvas3D` is `next/dynamic(..., { ssr:false })`, mounted after content, behind a WebGL capability check.
- **State**: lightweight client store (Zustand or React context) for `{ objective, organisation, mode, selectedElementId, sceneProgress, reducedMotion }`. URL query mirrors objective/org for shareability + no-JS link fallback.
- **Data access**: components request data through `lib/model-mapping` selectors keyed by GlobalId; they never import JSON directly, so production data can replace demo data centrally.

## Key contracts (TypeScript types — to finalise at Phase 2)
- `ElementRecord { ifcGlobalId; expressId?; ifcClass; elementName; glbNodeName; fragmentId?; storey; space }`
- `CostRecord`, `CarbonRecord`, `GapRecord`, `RiskScenario`, `QuantityRecord`, `ReportPreview` — fields per PDF §10.2.
- `Pathway { id; stages[]; defaultMode; brand; pages[] }`.
- Every demo record carries `demonstrationStatus: 'demonstration'` so the UI can render the demo badge automatically.

## Reuse / consistency
- One `InfoPanel` shell reused across all 5 modes (PDF §7.3 "consistent side information panel").
- One `SectionExplainer` pattern (problem → input → analysis → output → limitations → next action) reused across capability/solution pages (PDF §12.2).
- Tailwind with documented design tokens (colours, spacing, radii, type scale) — no ad-hoc styles (PDF §13.1).

## Decisions deferred to Phase 2
- State library choice (Zustand vs context) — P-04.
- Exact type definitions finalised against the real/demo data package.

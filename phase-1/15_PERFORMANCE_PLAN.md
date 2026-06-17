# 15 — Performance Plan

Implements PDF §15.2 and §13.1. Goal: fast, server-rendered content first; the 3D experience lazy-loaded and degradable; Core Web Vitals measured honestly on real mid-range mobile (PDF §15.2).

---

## Loading order (PDF §15.2)
1. Server-render important HTML/content + critical CSS → fast FCP/LCP without waiting for 3D.
2. Hydrate lightweight interactive shell (selectors, nav).
3. Lazy-load 3D libraries + GLB **only on pages that use them**, after content, behind capability detection.
4. Show poster + progress during model load; never block the page on the canvas.

## Asset budgets (provisional targets — finalised/validated in Phase 2)
- Placeholder `office_building.glb` today: **37.9 MB / ~643k triangles** — unacceptable for web; must be optimised.
- **Desktop GLB target:** aim ≤ ~6–8 MB transferred via Draco/meshopt geometry compression + KTX2/Basis textures; strip invisible/unused meshes and excess furniture.
- **Mobile GLB target:** aim ≤ ~2–3 MB; major geometry + selectable assets + scenario zones only.
- Texture resolution limited to what's visually necessary; no oversized maps.
- Posters: responsive AVIF/WebP, appropriately sized.
- JS: dynamic-import three/R3F/GSAP; route-level code splitting; tree-shake; avoid shipping the BIM/Fragments engine on marketing pages.

## Runtime efficiency (PDF §15.2)
- Single reused canvas across scenes; `frameloop="demand"` so frames render only on change.
- **Pause rendering / timeline when the 3D section is off-screen** (IntersectionObserver).
- Limit simultaneous video + WebGL + heavy scroll effects.
- `ResourceManager` disposes geometry/materials/textures/render-targets and removes listeners on unmount/route change to prevent leaks.
- Avoid main-thread layout thrash in scroll animation (animate transform/opacity only).

## Core Web Vitals approach (PDF §15.2; ref [13])
- **LCP:** hero text/poster is the LCP candidate (server-rendered), not the canvas; preload poster.
- **INP:** keep main thread free during load; defer 3D; debounce scroll/selection handlers.
- **CLS:** reserve space for hero/poster/canvas; no layout shift when 3D mounts; fonts with `font-display: swap` + size-adjust.

## Capability-based delivery
- WebGL + device-memory/hardware checks choose: desktop GLB · mobile GLB · poster-only.
- Reduced-motion users skip scrubbing work entirely.
- Low-power devices fall back to posters/animatic video (DEP-09).

## Measurement (honest reporting — PDF §14 / brief)
- Test **production builds**, not dev mode.
- Lighthouse + Web Vitals (lab) on home, a Capability page, `/3d-demo`, Contact.
- Real mid-range Android + iPhone Safari checks for model load, scroll smoothness, memory.
- Record measured numbers and CWV **risks** truthfully in Phase 4 evidence; flag anything not meeting target rather than asserting success.

## Dependencies
- Real optimisation numbers depend on the final IFC-derived GLB (DEP-03); Phase 2 validates the pipeline on the optimised placeholder.

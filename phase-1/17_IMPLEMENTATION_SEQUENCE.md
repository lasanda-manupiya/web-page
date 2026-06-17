# 17 — Implementation Sequence

Aligns the brief's 4 phases with PDF §14 production phases. Each step lists its gate. Work that is not blocked proceeds in parallel with outstanding dependencies (brief continuation rules).

---

## Phase 1 — Review & plan (current) → **Approval Gate 1**
Complete: PDF review, current-site review, asset inventory, capability register, sitemap, search-intent map, homepage IA, pathway rules, component/3D/animation architecture, model strategy, SEO/accessibility/performance plans, risks/decisions, this sequence, acceptance criteria, and the 8 management files. **STOP — await written approval.**

## Phase 2 — Technical prototype → **Approval Gate 2**
After Gate 1. Build one responsive page proving the model:
1. Project scaffold: Next.js+TS, Tailwind tokens, lib structure, lint/build green.
2. Design tokens (navy `#0c3c60`, white, neutrals, green) + base layout (header/footer/skip link).
3. Hero + **objective & organisation selectors** + pathway summary (engine from 08).
4. GLB pipeline: optimise `office_building.glb`; synthesise `element-map.json` (`DEMO-*`); author demo data package (PDF §10), all labelled.
5. `Canvas3D` island: ModelLoader (loading/progress/error + poster), SelectionManager, ElementMapper.
6. Consistent InfoPanel + **5 modes** (Model Data, Cost, Carbon, Information Gaps, Risk).
7. **One** scroll-controlled camera transition (proves ScrollTimeline).
8. Fallbacks: reduced motion, WebGL-unavailable, mobile, static poster.
9. Basic keyboard support + basic a11y + performance measurement.
Save each component as completed; report measured perf + all limitations. **STOP — await approval.**

Acceptance: see 18 §Phase 2.

## Phase 3 — Full website → **Approval Gate 3**
After Gate 2. Build the approved sitemap (05):
1. Shared layout, navigation, breadcrumbs, footer, 404, sitemap.xml, robots.txt.
2. Home (full 8-scene experience + all sections from 07).
3. `/platform` hub.
4. 8 Capability pages (distinct intent, full problem→input→analysis→output→limits→next-action copy).
5. 6 Solution pages (organisation pathways from 08).
6. `/how-it-works`, `/3d-demo`, `/about`, `/contact` (form carries selection context), `/resources` (only if real content).
7. Per-page metadata, canonical, OG, structured data (only accurate), internal links.
8. Optimise images/models/textures/JS; progressive loading.
9. Demo labelling throughout; claims gated by capability matrix.
Save & status each page; keep production build green throughout. **STOP — await staging approval.**

Acceptance: see 18 §Phase 3.

## Phase 4 — QA & release readiness → **Approval Gate 4**
After Gate 3. Test across large-desktop/desktop/laptop/tablet-landscape/tablet-portrait/mobile:
nav + mobile menu; selectors + pathways; 3D load + failure + fallbacks; selection + panels; mode switching; scroll scenes; forms + CTAs; keyboard + focus order; reduced motion; WebGL-unavailable; broken links; metadata/structured data; sitemap/robots; performance + CWV risks; accessibility; production build; console/asset/mapping errors; mobile interaction.
Fix significant defects, retest, record evidence honestly. **STOP — await release approval.**

Acceptance: see 18 §Phase 4.

## Parallel/independent tracks (not blocking)
- Owner: complete capability matrix (D-01), produce/commission IFC4 (D-02), supply logos (D-03), confirm legal/contact/domain (D-04).
- When real IFC + data arrive: swap GLB + regenerate JSON; no component changes (12).

## Saving & version control discipline (brief)
- Save each confirmed file immediately; update PROJECT_MANIFEST + PROJECT_STATUS + CHANGELOG.
- Versioned filenames for material changes (`*_v02_approved`); preserve approved versions.
- Commit stable milestones in Git; never silently overwrite approved deliverables.

# 18 — Phase Acceptance Criteria

Derived from PDF §19 and §14.1, and the brief's per-phase requirements. A phase passes its gate only when all criteria are met or any shortfall is explicitly recorded and accepted.

---

## Approval Gate 1 — Phase 1 (strategy & plan)
- [ ] Governing PDF reviewed section-by-section (01) with no fabricated claims of review.
- [ ] Current site reviewed honestly (02), keep/avoid documented.
- [ ] Asset inventory (03) and capability register (04) complete; statuses honest; gaps in registers.
- [ ] Sitemap (05) + search-intent map (06): one distinct primary intent per page.
- [ ] Homepage IA (07) + pathway rules (08) cover the two-question selection and ≤6-stage pathways.
- [ ] Component (09), 3D (10), animation (11) and model-loading (12) architectures defined.
- [ ] SEO (13), accessibility (14), performance (15) plans defined.
- [ ] Risks/assumptions/decisions (16), sequence (17), acceptance (18) complete.
- [ ] All 8 management files present and current; every Phase 1 file saved and in the manifest.
- [ ] Owner decisions (D-01…D-12) listed with recommended defaults.

## Approval Gate 2 — Phase 2 (technical prototype)
- [ ] One responsive page with approved header, hero, objective + organisation selectors, pathway summary.
- [ ] Real-derived/temporary GLB loads with loading, progress, error and static-poster states.
- [ ] Element selection works (pointer + basic keyboard); consistent side InfoPanel.
- [ ] All five modes function: Model Data, Cost, Carbon, Information Gaps, Risk.
- [ ] One scroll-controlled camera transition works; manual mode switching independent of scroll.
- [ ] Reduced-motion, WebGL-unavailable and mobile fallbacks all present.
- [ ] Demonstration data clearly labelled; data accessed via `lib/model-mapping` (not hardcoded).
- [ ] GLB↔data mapping via IFC GlobalId keys (placeholder ids acceptable, documented).
- [ ] Measured performance reported; interaction/browser/mobile/mapping/a11y/data limitations reported honestly.
- [ ] Each prototype component saved individually; manifest/status/changelog updated.

## Approval Gate 3 — Phase 3 (full website)
- [ ] Full approved sitemap built; production build green throughout.
- [ ] Important text server-rendered semantic HTML; nothing essential trapped in canvas.
- [ ] Customer pathway personalisation implemented per 08.
- [ ] Each indexable page: unique title/meta, single H1, canonical, OG, crawlable internal links.
- [ ] Capability/Solution pages cover problem · input · analysis · output · limitations · next action.
- [ ] sitemap.xml, robots.txt, custom 404 generated; structured data matches visible content only.
- [ ] Accessible nav/forms/controls, visible focus, reduced-motion support.
- [ ] Images/models/textures/JS optimised; progressive loading.
- [ ] All example values/scenarios labelled demonstration; no unsupported claims; claims match matrix.
- [ ] Each page validated (content/responsive/metadata/links/a11y) and saved; manifest updated.

## Approval Gate 4 — Phase 4 (QA & release)
- [ ] Tested at large-desktop, desktop, laptop, tablet-landscape, tablet-portrait, mobile.
- [ ] All listed interactions tested (nav, selectors, pathways, 3D load + failure, selection, panels, modes, scroll scenes, forms, CTAs, keyboard, focus order, reduced motion, WebGL-unavailable, links, metadata, structured data, sitemap/robots, performance/CWV, accessibility, production build, console/asset/mapping errors, mobile).
- [ ] Significant defects fixed and retested; remaining limitations recorded.
- [ ] Test evidence saved individually; no test claimed unless actually run.
- [ ] Production build passes with no significant console/accessibility/responsive defects.

## Mapping to PDF §19 (definition of done)
- §19.1 strategy/content, §19.2 3D/BIM, §19.3 SEO/technical criteria are folded into Gates 3 and 4 above and must all hold at release.

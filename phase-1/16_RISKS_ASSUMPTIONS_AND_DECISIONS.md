# 16 — Risks, Assumptions, Missing Information & Recommended Defaults

Consolidates the position for Approval Gate 1. Cross-references `DECISION_REGISTER.md`, `DEPENDENCY_REGISTER.md`, `ASSUMPTIONS_AND_LIMITATIONS.md`.

---

## A. Top risks

| ID | Risk | Likelihood | Impact | Mitigation |
|----|------|-----------|--------|-----------|
| R-01 | No real IFC4 model yet → 3D can't be the true semantic source | High | High | Use labelled placeholder GLB + synthesised map; design so real IFC swaps in with no component change (12) |
| R-02 | Capability matrix incomplete → risk of overclaiming | High | High | All copy gated by 04; conservative "demonstration" wording until D-01 signed off |
| R-03 | Placeholder GLB is heavy (37.9 MB) & non-semantic | Certain | Medium | Optimise (Draco/meshopt+KTX2); treat strictly as temporary marketing asset |
| R-04 | Brand assets are raster only / SustainZone logo missing | Medium | Medium | Use supplied raster as temp; request SVG (DEP-06); isolate brand tokens |
| R-05 | Product not represented on live site; domain/positioning unclear | Medium | Medium | Resolve D-05 before canonical/nav finalised; build domain-agnostic |
| R-06 | Demonstration data mistaken for real values | Medium | High | Mandatory demo badges driven by `demonstrationStatus`; explicit limitation copy |
| R-07 | Scenario (fire) misread as validated simulation | Medium | High | Persistent "concept demonstration, not an engineering-validated simulation" banner (PDF §10.4) |
| R-08 | 3D performance/accessibility regressions | Medium | Medium | Lazy load, budgets, demand frameloop, full non-canvas fallback (14, 15) |
| R-09 | Package/version drift (Next/R3F/GSAP/That Open) | Medium | Low | Pin versions at Phase 2; verify current docs (PDF §20 note) |
| R-10 | Contact/legal details unknown → forms/schema incomplete | Medium | Low | Placeholders clearly marked; finalise at D-04 |

## B. Assumptions (recommended defaults)
See `DECISION_REGISTER` §B (P-01…P-06): placeholder GLB as temp model; demo data from PDF §10; `DEMO-*` ids; latest stable Next/React/three/GSAP; `en-GB` single language; Vercel hosting. **Recommend owner approve P-01…P-06 as a block (D-12).**

## C. Missing information (full list in DEPENDENCY_REGISTER)
IFC4 model · Fragments · desktop/mobile GLB · data package (10 JSON files) · element map · official logos (incl. SustainZone) · completed capability matrix · contact/legal/domain/CTA · animatic + scene stills · style frames · report samples · confirmed rate/emission-factor sources.

## D. Decisions required from the owner (the Gate-1 ask)
From `DECISION_REGISTER` §C — **D-01 … D-12**. The ones that unblock the most work:
1. **D-01** Complete the capability/claims matrix (gates all public copy).
2. **D-02** How the demo IFC4 will be produced (recommend programmatic IfcOpenShell purpose-built terminal).
3. **D-07/D-12** Approve the sitemap (05) and provisional defaults (P-01…P-06).
4. **D-05** Standalone product site vs group subpath (recommend standalone, cross-linked).
5. **D-03/D-04** Supply logos (SVG) and confirm legal/contact/domain/CTA.

## E. What is NOT blocked (proceeds regardless)
Component scaffolding, design tokens, all server-rendered page content/structure, metadata/sitemap/robots system, selector + pathway engine, the 5-mode UI shell, fallbacks, and the GLB-optimisation + demo-data pipeline — all buildable in Phase 2 using documented placeholders.

## F. Recommended defaults summary (if owner does not specify)
- Proceed with placeholder GLB + demo data, fully labelled.
- Adopt PDF §12.1 sitemap as-is.
- Standalone product site, domain TBC, built domain-agnostic.
- Conservative claim wording everywhere until the matrix is signed off.
- Pin latest stable framework versions at Phase 2 start.

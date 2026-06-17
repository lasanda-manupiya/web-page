# PROJECT STATUS

**Project:** iCost + SustainZone — Integrated BIM Cost, Carbon and Risk Intelligence Platform website
**Governing document:** `iCost_SustainZone_3D_Website_Project_Guide.pdf` (v1.0, June 2026) — **located, opened and fully read** via text extraction (all 12 pages / 20 sections).
**Current phase:** Phase 4 — Quality Assurance (complete; awaiting Gate 4 / release sign-off)
**Current approval gate:** Approval Gate 4 (awaiting written owner approval). Gates 1, 2 & 3 = APPROVED 2026-06-17.
**Last updated:** 2026-06-17

---

## Phase summary

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Review, discovery, strategy, architecture, plan | **APPROVED (Gate 1, 2026-06-17)** |
| Phase 2 | Technical prototype | **APPROVED (Gate 2, 2026-06-17)** |
| Phase 3 | Full website implementation | **APPROVED (Gate 3, 2026-06-17)** |
| Phase 4 | Quality assurance & release readiness | **Complete; 3 defects fixed & retested; awaiting Gate 4 / release sign-off** |

## Phase 4 QA
Crawler "ALL CHECKS PASSED"; responsive mobile→large-desktop; mobile menu added; canonical + H1 defects fixed. See `phase-4/PHASE_4_QA_REPORT.md`. Pre-launch tooling (Lighthouse/CWV, axe, screen-reader, real-device) and owner inputs (domain, capability matrix, contact, logos) remain.

## Visual redesign (2026-06-17, owner-requested)
Light enterprise theme matching the supplied reference; brand corrected to **I-Cost Group** (logo added). Two-column hero with dominant model stage + floating metric panels; four numbered capability cards. Layout/styling only — no content/route/functionality/SEO/3D/data changes. Overflow fixed; QA crawler green; no console errors. See CHANGELOG 2026-06-17 redesign entry.

## Enhancements + repository (2026-06-17)
Added gentle 3D model auto-rotation (reduced-motion aware), accessible animated custom dropdowns (`ui/Select`) + animated header Platform/Solutions menus. Added `README.md` with Hestia/Node deploy instructions. **Pushed to GitHub:** https://github.com/lasanda-manupiya/web-page (branch `main`). `node_modules`/`.next`/source GLB excluded; all runtime assets committed.

## Phase 2 prototype
One responsive page on `localhost:3000`. See `phase-2/PHASE_2_PROTOTYPE_REPORT.md`. Run: `npm run build && npm start` (or `npm run dev`) in `D:\gitprojects\website for i cost group`.

## Phase 1 deliverable status

| File | Status |
|------|--------|
| 01_PDF_BRIEF_REVIEW.md | Draft — complete |
| 02_CURRENT_WEBSITE_REVIEW.md | Draft — complete |
| 03_ASSET_INVENTORY.csv | Draft — complete |
| 04_CAPABILITY_REGISTER.csv | Draft — all statuses provisional, awaiting owner confirmation |
| 05_SITEMAP.md | Draft — complete |
| 06_SEARCH_INTENT_MAP.csv | Draft — complete |
| 07_HOMEPAGE_INFORMATION_ARCHITECTURE.md | Draft — complete |
| 08_CUSTOMER_PATHWAY_RULES.md | Draft — complete |
| 09_COMPONENT_ARCHITECTURE.md | Draft — complete |
| 10_3D_SCENE_ARCHITECTURE.md | Draft — complete |
| 11_ANIMATION_TIMELINE.md | Draft — complete |
| 12_MODEL_LOADING_STRATEGY.md | Draft — complete |
| 13_SEO_IMPLEMENTATION_PLAN.md | Draft — complete |
| 14_ACCESSIBILITY_PLAN.md | Draft — complete |
| 15_PERFORMANCE_PLAN.md | Draft — complete |
| 16_RISKS_ASSUMPTIONS_AND_DECISIONS.md | Draft — complete |
| 17_IMPLEMENTATION_SEQUENCE.md | Draft — complete |
| 18_PHASE_ACCEPTANCE_CRITERIA.md | Draft — complete |

## Blocked items
- All Phase 2+ build work is intentionally blocked pending Approval Gate 1 sign-off.

## Pending owner decisions
See `DECISION_REGISTER.md` (open decisions D-01 to D-12) and `16_RISKS_ASSUMPTIONS_AND_DECISIONS.md`.

## Key dependencies outstanding
See `DEPENDENCY_REGISTER.md`. The most material are: the purpose-built IFC4 demonstration model, derived Fragments/GLB/data package, official brand logos in vector form, the completed capability/claims matrix, and confirmed contact/domain/legal details.

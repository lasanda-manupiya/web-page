# APPROVAL LOG

Record of approvals at each gate. No entry = not yet approved.

---

## Approval Gate 1 — Phase 1 strategy, sitemap, architecture, asset strategy, implementation plan
- **Status:** APPROVED
- **Presented:** 2026-06-17
- **Decision:** Approved — "proceed" with recommended defaults (P-01…P-06, D-07/D-12 adopted)
- **Approver:** Owner (lasandamanupiya@gmail.com)
- **Notes:** Phase 2 to use placeholder `office_building.glb` + clearly-labelled demonstration data. D-01..D-05 brand/IFC/contact decisions still open and tracked; do not affect prototype build.

## Approval Gate 2 — Technical prototype, interaction model, model mapping, fallback behaviour
- **Status:** Awaiting owner approval
- **Presented:** 2026-06-17
- **Built:** One responsive page; hero + 9×9 selectors + pathway engine; optimised placeholder GLB (36 MB → 0.32/0.21 MB) with Draco+WebP; loading/progress/error/poster states; element selection (pointer + keyboard); consistent info panel; 5 modes (Data/Cost/Carbon/Gaps/Risk); one GSAP scroll camera transition; reduced-motion / WebGL-unavailable / mobile fallbacks; demonstration-data labelling. Production build green; validated in-browser with no console errors.
- **Report:** `phase-2/PHASE_2_PROTOTYPE_REPORT.md`
- **Decision:** APPROVED — "proceed" 2026-06-17.

## Approval Gate 3 — Full website structure, content, design, functionality
- **Status:** Awaiting owner approval
- **Presented:** 2026-06-17
- **Built:** 26 routes (home with 8-scene storyline + interactive demo; platform hub; 8 capability + 6 solution pages; how-it-works, 3d-demo, resources, about, contact; 404; sitemap.xml; robots.txt). Per-page unique metadata + canonical + OG; single H1; breadcrumbs; Organisation/WebSite/BreadcrumbList schema; internal links; UK-English honest copy; demonstration labelling. Production build green; no console errors.
- **Report:** `phase-3/PHASE_3_REPORT.md`
- **Decision:** APPROVED — "proceed" 2026-06-17.

## Approval Gate 4 — QA, production build, release readiness
- **Status:** Awaiting owner approval (release readiness)
- **Presented:** 2026-06-17
- **Tested:** Responsive mobile→large-desktop; navigation + new mobile menu; selectors/pathways; 3D load + modes + selection; reduced-motion path; forms/CTAs; keyboard/focus/landmarks; internal links (0 broken); per-page metadata/canonical; JSON-LD validity; sitemap/robots; custom 404; production build (26/26, no console errors). 3 defects fixed and retested.
- **Report:** `phase-4/PHASE_4_QA_REPORT.md`
- **Not run here (pre-launch):** Lighthouse/CWV, automated axe, screen-reader, real-device cross-browser, WebGL-disabled force test.
- **Decision:** _pending_

---
*An approval here is recorded with date, approver and any conditions. Approved deliverables are then versioned (e.g. `_v02_approved`) and previous versions preserved.*

# PROJECT MANIFEST

Index of all project files, their location, purpose and status.
Status values: draft | provisional | awaiting approval | approved | superseded.

**Project root:** `D:\gitprojects\website for i cost group\`

---

## Management files (project root)

| File | Purpose | Status |
|------|---------|--------|
| PROJECT_STATUS.md | Current phase, gate and progress | draft |
| PROJECT_MANIFEST.md | This file index | draft |
| CHANGELOG.md | Chronological record of additions/changes | draft |
| DECISION_REGISTER.md | Confirmed and pending decisions | draft |
| DEPENDENCY_REGISTER.md | Missing items and what depends on them | draft |
| ASSET_INVENTORY.csv | Master asset register (mirror of 03) | draft |
| ASSUMPTIONS_AND_LIMITATIONS.md | Provisional assumptions and stated limits | draft |
| APPROVAL_LOG.md | Record of approvals given at each gate | draft |

## Phase 1 deliverables (`phase-1/`)

| File | Purpose | Status |
|------|---------|--------|
| 01_PDF_BRIEF_REVIEW.md | Section-by-section understanding of the governing PDF | draft |
| 02_CURRENT_WEBSITE_REVIEW.md | Review of new.i-cost.co.uk: keep vs avoid | draft |
| 03_ASSET_INVENTORY.csv | Supplied asset inventory with status | draft |
| 04_CAPABILITY_REGISTER.csv | Capability/claims matrix with status | draft (provisional) |
| 05_SITEMAP.md | Proposed sitemap | draft |
| 06_SEARCH_INTENT_MAP.csv | Page-level search intent map | draft |
| 07_HOMEPAGE_INFORMATION_ARCHITECTURE.md | Homepage IA + customer selection flow | draft |
| 08_CUSTOMER_PATHWAY_RULES.md | Objective × organisation personalisation rules | draft |
| 09_COMPONENT_ARCHITECTURE.md | Front-end component architecture | draft |
| 10_3D_SCENE_ARCHITECTURE.md | 3D scene module architecture | draft |
| 11_ANIMATION_TIMELINE.md | GSAP ScrollTrigger 8-scene timeline | draft |
| 12_MODEL_LOADING_STRATEGY.md | IFC / Fragments / GLB loading + mapping | draft |
| 13_SEO_IMPLEMENTATION_PLAN.md | SEO implementation plan | draft |
| 14_ACCESSIBILITY_PLAN.md | WCAG 2.2 AA accessibility plan | draft |
| 15_PERFORMANCE_PLAN.md | Performance / Core Web Vitals plan | draft |
| 16_RISKS_ASSUMPTIONS_AND_DECISIONS.md | Risks, assumptions, recommended defaults | draft |
| 17_IMPLEMENTATION_SEQUENCE.md | Build sequence across phases | draft |
| 18_PHASE_ACCEPTANCE_CRITERIA.md | Acceptance criteria per phase | draft |

## Phase 2 prototype (`src/`, `public/`, `scripts/`, `phase-2/`)

| Area | Files | Status |
|------|-------|--------|
| Report | phase-2/PHASE_2_PROTOTYPE_REPORT.md | awaiting approval |
| Config | package.json, tsconfig.json, next.config.mjs, postcss.config.mjs, tailwind.config.ts, .eslintrc.json | provisional |
| GLB tooling | scripts/optimise-glb.mjs | provisional |
| Demo data | src/data/*.json (11 files) | provisional (demonstration data) |
| Lib | src/lib/{types,data,pathway-engine,modes,store,webgl}.ts | provisional |
| Components | src/components/** (Header, Footer, Hero, CustomerSelector, PathwaySummary, DemoBadge, EvidenceLimits, ContentSections, Contact, StoryExperience, three/*, three/fallbacks/*) | provisional |
| App | src/app/{layout,page,not-found}.tsx, globals.css | provisional |
| Public assets | public/models/office-{desktop,mobile}.glb, public/draco/*, public/posters/hero-poster.svg | provisional |

## Supplied source assets

| File | Location | Purpose | Status |
|------|----------|---------|--------|
| iCost_SustainZone_3D_Website_Project_Guide.pdf | C:\Users\lasan\Downloads\ | Governing brief | available, read |
| office_building.glb | project root | Temporary marketing 3D model (placeholder) | available but unverified / needs optimisation |
| I-COST GROUP logo (raster, in chat) | (supplied in conversation) | Brand reference | available but unverified (vector source needed) |

# 05 — Proposed Sitemap

Baseline adopted from PDF §12.1, with grouping, hierarchy and breadcrumb structure made explicit. All pages are server-rendered with unique metadata. **Open decision D-07** (approve as-is or adjust); **D-05** affects the domain/canonical root.

---

## Top-level structure

```
/                                    Home — integrated overview + customer selection
/platform                            Complete platform architecture (full overview for "show me everything")
│
├── Capabilities (model-centric, by search intent)
│   /bim-ifc-model-analysis          Model validation, geometry & semantic extraction
│   /ifc-property-extraction         Properties, classifications & element data
│   /bim-quantity-takeoff            Quantities & model-based schedules
│   /bim-cost-estimation             iCost commercial intelligence (5D cost)
│   /bim-carbon-assessment           SustainZone embodied carbon intelligence
│   /bim-information-gap-analysis    Completeness & missing data
│   /digital-twin-risk-modelling     Risk visualisation & scenario approach
│   /scenario-modelling              Fire/flood/access & other specialist scenarios
│
├── Solutions (by organisation type)
│   /solutions/contractors           Quantity, cost & carbon workflow for contractors/QS
│   /solutions/asset-managers        Asset data, completeness & readiness
│   /solutions/aviation              Airport & aviation use cases
│   /solutions/transport-infrastructure  Transport & infrastructure use cases
│   /solutions/insurance-risk        Vulnerability & mitigation evidence
│   /solutions/sustainability        Carbon pathways & reporting
│
├── Understand & try
│   /how-it-works                    The complete process, guided
│   /3d-demo                         Interactive BIM cost/carbon/risk demo
│   /resources                       Educational content & guides (only if real content exists)
│
└── Company & conversion
    /about                           iCost & SustainZone integrated platform
    /contact                         Request a demonstration / model discussion
```

## System pages (non-indexed where appropriate)
- `/404` — custom not-found
- `sitemap.xml`, `robots.txt` (generated via Next.js conventions)
- Legal: `/privacy`, `/terms`, `/cookies` (placeholders pending D-04) — linked from footer
- (Optional, post-launch) `/resources/[slug]` article template — only when real articles exist

## Breadcrumb scheme
- Capabilities: `Home / Platform / <Capability>`
- Solutions: `Home / Solutions / <Organisation>`
- Resources: `Home / Resources / <Article>`
- Home, Platform, How it works, 3D demo, About, Contact: top-level, no breadcrumb (or `Home / <Page>`).

## Internal linking intent (summary; detail in 13_SEO_IMPLEMENTATION_PLAN)
- Home → Platform, How it works, 3D demo, each Solution (via selector), Contact.
- Each Capability ↔ related Capabilities + the Solutions that use it + Contact.
- Each Solution → the specific Capabilities in its pathway + 3D demo + Contact.
- Platform → every Capability (hub page).
- Resources articles → relevant Capability/Solution pages.

## Notes / decisions
- **Single primary query per page** — no two pages compete for the same term (e.g. `/bim-cost-estimation` owns "5D BIM cost estimation", `/bim-quantity-takeoff` owns "BIM quantity takeoff software"). See 06.
- `/digital-twin-risk-modelling` vs `/scenario-modelling`: kept distinct — the former is the *capability/positioning* page (risk + readiness), the latter the *method* page (specific scenarios). Internal links and copy will differentiate to avoid cannibalisation.
- `/resources` ships only with genuinely useful content (PDF §12.4); otherwise it is omitted at launch rather than shipped thin.
- Canonical root depends on **D-05** (standalone product domain vs subpath of the group site).

## Page count
22 indexable content pages (matches PDF §12.1) + system/legal pages.

# 08 — Customer Pathway Personalisation Rules

Implements PDF §3 (selection logic), §5 (pathway matrix) and §5.1 (rules). The engine maps **objective × organisation** to a short pathway (≤6 stages), the **active default model mode**, the relevant **pages**, and **enquiry context**. Logic is data-driven (a config object), not hardcoded in components.

---

## Inputs
- `objective` ∈ { understand-data, extract-quantities, estimate-costs, measure-carbon, identify-gaps, understand-risks, model-scenario, compare-alternatives, generate-reports }
- `organisation` ∈ { contractor-qs, developer-owner, asset-fm, aviation, transport-infrastructure, insurance-risk, sustainability, engineering-consultant, public-sector }
- Either may be unset → safe default below.

## Governing rules (PDF §5.1)
1. **Model intelligence is always the shared first stage** — every pathway starts with "Model analysis".
2. Show **only services materially related** to the objective; do not list everything.
3. **iCost branding** active when commercial/cost intelligence is in the pathway; **SustainZone branding** active when carbon is.
4. Use **"digital twin"** language only for scenario/operational-relevant objectives (understand-risks, model-scenario) and relevant orgs (aviation, infrastructure, insurance, asset-fm).
5. Visitor can **change objective/organisation at any time**.
6. Always provide a **route to the full platform overview** (`/platform`) for "show me everything".
7. Selections **pass into the enquiry form**.
8. **Never imply verified knowledge about the visitor** — pathway is framed as a suggestion.

## Default model mode by objective

| Objective | Default mode | Active brand |
|-----------|--------------|--------------|
| understand-data | Model Data | neutral |
| extract-quantities | Model Data (quantities) | neutral |
| estimate-costs | Cost | iCost |
| measure-carbon | Carbon | SustainZone |
| identify-gaps | Information Gaps | neutral |
| understand-risks | Risk | neutral |
| model-scenario | Risk (scenario) | neutral |
| compare-alternatives | Cost+Carbon compare | iCost + SustainZone |
| generate-reports | Outputs/Reports | neutral |
| (unset) | Model Data | neutral |

## Objective → pathway stages (base templates, ≤6 stages)

- **understand-data:** Model analysis → property extraction → quantity review → information-gap review → relevant report
- **extract-quantities:** Model analysis → property extraction → quantity extraction → gap review → schedule output
- **estimate-costs:** Model analysis → quantity extraction → gap review → iCost cost assessment → cost comparison → commercial report
- **measure-carbon:** Material & quantity extraction → SustainZone carbon assessment → hotspot analysis → alternative comparison → carbon report
- **identify-gaps:** Model analysis → completeness check → gap classification (severity) → affected-analysis review → improvement plan
- **understand-risks:** Model analysis → spatial & asset extraction → risk review → scenario context → risk & mitigation report
- **model-scenario:** Model analysis → spatial data extraction → scenario modelling → impact assessment → route analysis → mitigation report
- **compare-alternatives:** Model analysis → cost & carbon assessment → option comparison → decision report
- **generate-reports:** Model analysis → selected intelligence → option comparison → recommendation report

## Organisation → emphasis overrides (from PDF §5 matrix)

| Organisation | Emphasis added to pathway | Typical outputs | Notes |
|--------------|---------------------------|-----------------|-------|
| contractor-qs | quantity + cost emphasis | quantity schedule, cost estimate, comparison, commercial summary | iCost-forward |
| developer-owner | cost + carbon trade-offs | cost estimate, carbon report, option comparison, executive decision report | iCost + SustainZone |
| asset-fm | asset data + readiness | asset report, gap schedule, route review, digital-twin readiness summary | "digital twin" allowed |
| aviation | spatial + scenario | risk heatmap, scenario viz, affected-asset summary, route analysis | scenario-forward; "digital twin" allowed |
| transport-infrastructure | assets + cost/carbon + resilience | asset report, cost+carbon, route analysis, resilience recommendations | broad |
| insurance-risk | vulnerability + evidence | risk heatmap, affected-asset report, mitigation comparison, evidence report | risk-forward |
| sustainability | embodied carbon + alternatives | material carbon schedule, hotspot summary, alternatives, assumptions | SustainZone-forward |
| engineering-consultant | model quality + selected analysis | model review, quantities, selected assessment, client recommendation report | flexible |
| public-sector | portfolio/estate priorities | estate summary, prioritisation, improvement plan, investment report | estate-scale framing |

## Resolution algorithm
```
function resolvePathway(objective, organisation):
  if !objective and !organisation: return PLATFORM_OVERVIEW   // never a dead end
  base = objectiveTemplate[objective ?? inferFromOrg(organisation)]
  emphasis = orgOverride[organisation]           // may be empty
  pathway = merge(base, emphasis), capped at 6 stages
  mode = defaultMode[objective]
  brand = brandFor(pathway)                       // iCost / SustainZone / both / neutral
  pages = relatedPages(objective, organisation)   // links into /solutions/* and /bim-* per 06
  enquiryContext = { objective, organisation, pathwayId }
  return { pathway, mode, brand, pages, enquiryContext }
```

## Worked examples (verbatim style from PDF §3.2)
- **Aviation + model-scenario:** Model analysis → spatial & asset data extraction → scenario modelling → impact assessment → risk & mitigation report. Mode: Risk. Brand: neutral. Pages: `/solutions/aviation`, `/scenario-modelling`, `/digital-twin-risk-modelling`.
- **Contractor-QS + estimate-costs:** Model analysis → quantity extraction → gap review → iCost cost assessment → cost comparison → commercial report. Mode: Cost. Brand: iCost. Pages: `/solutions/contractors`, `/bim-quantity-takeoff`, `/bim-cost-estimation`.
- **Sustainability + measure-carbon:** Material & quantity extraction → SustainZone carbon assessment → hotspot analysis → alternative comparison → carbon report. Mode: Carbon. Brand: SustainZone. Pages: `/solutions/sustainability`, `/bim-carbon-assessment`.

## Config location
`data/pathways.json` (templates, overrides, default modes) consumed by `lib/model-mapping` / a `pathway-engine`. Editable without touching components, so owner adjustments need no code change.

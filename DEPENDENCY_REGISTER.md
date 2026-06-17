# DEPENDENCY REGISTER

Missing or unconfirmed items, what depends on them, and how work continues without them.

Status: missing | unverified | needs confirmation | needs conversion | needs optimisation

---

| ID | Item | Status | What depends on it | Phase 1 impact | How we proceed now |
|----|------|--------|--------------------|----------------|--------------------|
| DEP-01 | Purpose-built **IFC4 demonstration model** (terminal/transport hub per PDF §9.2) | missing | Semantic source of truth; GlobalId mapping; Fragments; real GLB; quantities/properties | None on planning | Use `office_building.glb` as labelled temporary model; design mapping to accept real IFC later |
| DEP-02 | **Fragments** model (detailed BIM viewer) | missing | /platform & /3d-demo detailed viewer (D-08) | None | Document conversion (That Open IfcLoader); defer viewer; marketing GLB at launch |
| DEP-03 | **Desktop + mobile optimised GLB** derived from IFC | missing | Final 3D experience | None | Optimise the placeholder GLB (Draco/meshopt, KTX2) for the prototype |
| DEP-04 | **Demonstration data package** (model-manifest, element-map, properties, quantities, cost, carbon, gaps, risk, routes, reports JSON) | missing | All 5 viewer modes; panels; reports | None | Author from PDF §10 example schema; label as demonstration data |
| DEP-05 | **Element map** GLB node → IFC GlobalId | missing | Selection → data binding | None | Build placeholder map from existing GLB node names with `DEMO-*` ids |
| DEP-06 | Official **logos** (iCost, SustainZone) in SVG/high-res PNG | needs confirmation | Header, footer, OG images, scene 8 | None | Use supplied raster logo as temporary placeholder |
| DEP-07 | Completed **capability/claims matrix** | needs confirmation | All public claims / final copy | None | Provisional register (04) with all = "to confirm" |
| DEP-08 | **Contact details, legal name, domain, primary CTA** | needs confirmation | Contact page, schema, footer, canonical URLs | None | Clearly-marked placeholders |
| DEP-09 | **Reference animatic** (28s) + scene stills | missing | Motion tuning, mobile fallback video, temp hero | None | Use static posters; build motion from PDF §6/§8 timing |
| DEP-10 | **Style frames** (hero, cost intelligence, fire risk) | missing | Visual fidelity reference | None | Derive visual language from PDF §7 + current site |
| DEP-11 | **Report sample** outputs | missing | Report preview components | None | Build report preview from PDF §10 reportCategory fields, labelled demo |
| DEP-12 | Confirmed **rate / emission-factor sources** | needs confirmation | Cost & carbon copy and methodology pages | None | State "demonstration values, sources to be confirmed" |

## Notes
- No dependency above blocks Phase 1. Each has a documented fallback that keeps the architecture replaceable.
- Replacement is kept cheap by isolating all data in `data/*.json` keyed by IFC GlobalId and never hardcoding production data into components (PDF Data & Model Rules).

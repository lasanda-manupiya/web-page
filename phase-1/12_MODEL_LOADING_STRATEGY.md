# 12 — IFC / Fragments / GLB Loading & Mapping Strategy

Implements PDF §9 (model strategy), §9.4 (GlobalId mapping), §9.6 (conversion) and §13.1/§15.2 (loading). IFC is the semantic source of truth; Fragments power the detailed BIM viewer; an optimised GLB powers the public marketing experience.

---

## Format roles (PDF §9.1, IFC/Fragments/GLB strategy)

| Format | Role | Where used |
|--------|------|-----------|
| **IFC4** | Semantic source of truth; property/quantity extraction; validation; traceability | Off-line/build pipeline + data generation |
| **Fragments** | Detailed, efficient browser BIM exploration; property inspection; filtering | `/platform` or `/3d-demo` detailed viewer (deferred, D-08) |
| **GLB (desktop)** | Public storytelling; controlled materials; camera animation; highlighting | Homepage 8-scene experience, `/3d-demo` |
| **GLB (mobile)** | Reduced geometry for capable mobiles | Mobile homepage / demo |
| **Static poster / short video** | Fallback for low power / reduced motion / load failure | Everywhere the canvas appears |

## Build-time pipeline (PDF §9.6) — for when the real IFC arrives
```
Master IFC4
  → validate (web-ifc / That Open) + correct spatial hierarchy check
  → extract properties & quantities (keyed by IFC GlobalId)
  → Fragments  (That Open IfcLoader)         → detailed viewer asset
  → GLB        (IfcOpenShell IfcConvert)      → optimise (Draco/meshopt + KTX2) → desktop + mobile GLB
  → JSON data package (element-map, properties, quantities, cost, carbon, gaps, risk, routes, reports)
  → website consumes GLB + JSON keyed by GlobalId
```
The Master IFC is **never auto-modified**; node renames require updating `element-map.json` (PDF data rules).

## GlobalId mapping (PDF §9.4) — the spine
- `element-map.json` records, per selectable object: `ifcGlobalId, ifcClass, elementName, glbNodeName, fragmentId?, storey, space` plus reference keys (`materialReference, costReference, carbonReference, gapReference, riskReference`).
- Runtime: GLB node name → `element-map` → `ifcGlobalId` → look up cost/carbon/gap/risk/property records. Visible names are never the key.
- Traceability from any displayed object back to its GlobalId is preserved end-to-end.

## Interim strategy for the placeholder `office_building.glb` (DEP-01/05)
- The model has **no IFC semantics or GlobalId** (Sketchfab export; nodes like `BLD_OFFICE_00_walls_exterior_0`, `office_chairs01`).
- Phase 2 will:
  1. Choose ~10–12 nodes as "selectable elements" representing PDF §9.7 element types (exterior walls, glass, slabs, doors, MEP-like objects, a space proxy).
  2. Synthesise `element-map.json` assigning placeholder `DEMO-GUID-*` ids, demo `ifcClass`, storey/space tags.
  3. Author demo `properties/quantities/cost/carbon/gaps/risk/routes/reports` JSON from PDF §10 schema + example values, all flagged `demonstrationStatus: "demonstration"`.
  4. Mark furniture/ground as non-selectable décor.
- When the real IFC4 model is delivered, swap the GLB + regenerate JSON; **no component changes** required.

## Runtime loading (PDF §15.2)
- Canvas + 3D libraries are **lazy-loaded** (`next/dynamic`, `ssr:false`) only on pages that use them; never block first paint.
- Capability/perf detection picks desktop vs mobile GLB, or poster-only on low-power/no-WebGL.
- **States:** idle → loading (poster + progress %) → ready → error (poster + retry + text alternative). All announced to assistive tech (PDF §15.1).
- Decoders (Draco/meshopt, KTX2) loaded on demand; `GLTFLoader` per Three.js docs.
- `ResourceManager` disposes geometry/materials/textures/listeners on unmount (PDF §15.2).

## Optimisation targets (placeholder GLB is 37.9 MB / ~643k tris — too heavy)
- Desktop GLB target: significantly reduced payload via Draco/meshopt geometry compression + KTX2 textures; remove invisible/unused meshes.
- Mobile GLB: major geometry + selectable assets + scenario zones only (PDF §9.1).
- Exact byte/triangle budgets set in 15_PERFORMANCE_PLAN and validated in Phase 2.

## Data/component separation (PDF data rules)
- All business data lives in `data/*.json`; components read via `lib/model-mapping` selectors. No production data hardcoded in presentation components.
- Separate files for: GLB-node↔GlobalId map, properties, cost, carbon, gaps, risk, scenarios, demo labels.

## Dependencies
- DEP-01 (IFC), DEP-02 (Fragments), DEP-03 (GLB), DEP-04 (data), DEP-05 (element map). All have the interim fallback above; none block Phase 1.

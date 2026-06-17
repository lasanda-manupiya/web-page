# DECISION REGISTER

Separates **confirmed decisions** from **provisional assumptions** and **open decisions** requiring the owner.

---

## A. Confirmed decisions (from the governing PDF / explicit user instruction)

| ID | Decision | Source |
|----|----------|--------|
| C-01 | Platform description: "Integrated BIM Cost, Carbon and Risk Intelligence Platform" | PDF §1.1, Master Prompt |
| C-02 | Homepage H1: "One Model. Complete Project Intelligence." | PDF §1.2 |
| C-03 | Supporting message: "Transform BIM and IFC models into cost, carbon, asset and risk intelligence through one connected platform." | PDF §1.2 |
| C-04 | Tech stack: Next.js + TypeScript, React Three Fiber + Three.js, GSAP ScrollTrigger, Drei, optimised GLB for marketing, Fragments/web-ifc for detailed BIM, typed JSON/API keyed by IFC GlobalId, Tailwind with documented tokens | PDF §13.1 |
| C-05 | Colour direction: dark navy ~`#0c3c60`, white, restrained neutrals, limited green accent | PDF §7.1 |
| C-06 | IFC GlobalId is the primary key linking geometry, properties, quantities, cost, carbon, gaps, risk, reports | PDF §9.4 |
| C-07 | Eight-scene scroll storyline with the same model throughout; important content always in semantic HTML | PDF §4, §6 |
| C-08 | UK English; no invented customers/results/savings/accuracy/certifications/partnerships | PDF Content Rules |
| C-09 | Two-question entry: objective (9 options) × organisation (9 options) → personalised pathway | PDF §3.1, §3.2 |
| C-10 | Sitemap of ~22 pages as listed in PDF §12.1 (adopted as baseline) | PDF §12.1 |
| C-11 | Project lives in `D:\gitprojects\website for i cost group\` and reuses the supplied `office_building.glb` | User instruction |
| C-12 | Phase-gated delivery; stop and wait for written approval at each gate | PDF §14.1, Master Prompt |

## B. Provisional assumptions (recommended defaults — can be changed by owner)

| ID | Assumption / default | Why | Change impact |
|----|----------------------|-----|---------------|
| P-01 | Use `office_building.glb` as a **clearly labelled temporary marketing model** for Phase 2 prototype, pending the purpose-built IFC4 terminal model | No IFC/Fragments/data package supplied yet | Swap is modular via element-map config |
| P-02 | Build a small **demonstration data package** (JSON) using the PDF §10 example schema/values, labelled "demonstration data" everywhere | Lets prototype show all 5 modes without inventing claims | Replace values when real data confirmed |
| P-03 | Synthesise an **element-map** for the GLB's existing node names (no GlobalId exists in this model) using placeholder `DEMO-*` ids | The placeholder GLB has no IFC GlobalId | Real GlobalIds replace placeholders when IFC arrives |
| P-04 | Target framework versions: Next.js (App Router, latest stable), React 18+, three/R3F current, GSAP 3 | PDF §13 + reference note to verify at build time | Pin at Phase 2 start |
| P-05 | Default locale `en-GB`; single language at launch | UK audience | Add i18n later if needed |
| P-06 | Hosting target: Vercel (Next.js native) unless owner specifies otherwise | Best Next.js fit | Affects build/deploy config only |

## C. Open decisions required from owner (block later phases, not Phase 1)

| ID | Decision needed | Blocks | Recommended default |
|----|-----------------|--------|---------------------|
| D-01 | Complete the capability/claims matrix (status per capability: Available now / Under development / Demonstration only / Planned) | Final public copy (Gate 3) | Treat all as "Demonstration only / To confirm" until signed off |
| D-02 | How the demonstration IFC4 will be produced (Revit / Bonsai / other / IfcOpenShell) | Real model (Phase 2 real asset) | Programmatic IfcOpenShell purpose-built terminal model |
| D-03 | Supply official iCost + SustainZone logos in SVG / high-res PNG | Final 3D + brand polish | Use supplied raster logo as temporary placeholder |
| D-04 | Confirm legal name, domain, contact details, primary CTA wording | Contact page, schema, footer | Use placeholders clearly marked |
| D-05 | Confirm whether the public site is the **product** site or sits within the existing group site (new.i-cost.co.uk shows the group, not the BIM product) | Navigation, canonical/domain strategy | New standalone product site, cross-linked to group |
| D-06 | Confirm iCost vs SustainZone brand treatment when each mode is active (colour/lockup rules) | Mode visual design | iCost lockup for cost mode, SustainZone for carbon mode, neutral elsewhere |
| D-07 | Approve sitemap (adopt PDF §12.1 as-is, or adjust) | Full build | Adopt as-is |
| D-08 | Confirm whether a detailed Fragments BIM viewer is in scope for launch or later | /3d-demo / /platform depth | Marketing GLB at launch; Fragments viewer phased later |
| D-09 | Confirm the first specialist scenario (fire in concourse) is acceptable as a labelled concept demonstration | Scene 7 | Yes, clearly labelled "not an engineering-validated simulation" |
| D-10 | Confirm rate sources, emission-factor sources and report types that genuinely exist | Cost/carbon/report copy | State "demonstration values" until confirmed |
| D-11 | Confirm analytics / consent platform (e.g. GA4 + cookie consent) | Analytics, consent wording | GA4 + simple consent banner |
| D-12 | Approve provisional defaults P-01 to P-06 above | Phase 2 prototype | Approve as listed |

---
*Update this register whenever a decision is confirmed, changed or added.*

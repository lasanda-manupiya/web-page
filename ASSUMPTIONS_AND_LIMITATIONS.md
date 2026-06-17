# ASSUMPTIONS AND LIMITATIONS

Provisional assumptions made to progress Phase 1, and the limitations that must be respected. None of the items below are to be presented to the public as verified production facts.

---

## Working assumptions (provisional — see DECISION_REGISTER P-01…P-06)

1. `office_building.glb` is a **temporary placeholder** marketing model, not the approved IFC4 asset. It is a generic Sketchfab office (no IFC semantics, no GlobalId).
2. A **demonstration data package** will be authored from the PDF §10 example schema and values, and labelled "demonstration data" wherever shown.
3. Placeholder element ids (`DEMO-*`) stand in for IFC GlobalId until a real IFC is supplied; the mapping layer is designed so real GlobalIds replace them without component changes.
4. The new site is a **standalone product site** for the BIM platform, cross-linked with the existing group site (subject to D-05).
5. Default locale `en-GB`, single language at launch.
6. Hosting on Vercel unless owner specifies otherwise.

## Hard limitations to honour in all copy and UI (PDF §1.4, §11, Content Rules)

- Do **not** describe a static 3D viewer as an operational digital twin.
- Do **not** claim complete whole-life carbon unless all relevant life-cycle modules are included.
- Do **not** present demonstration scenarios (e.g. the fire scenario) as validated engineering simulations — label them "concept demonstration, not an engineering-validated simulation".
- Do **not** invent customers, projects, results, cost/carbon savings, accuracy percentages, certifications, partnerships, or regulatory approval.
- Do **not** depend on the 3D canvas for essential SEO content or accessibility — all important text lives in semantic HTML.
- Clearly distinguish: BIM viewing · property extraction · quantity takeoff · cost estimation · cost planning · embodied carbon · whole-life carbon · scenario modelling · risk visualisation · operational digital twins · demonstration interfaces · planned capabilities.
- Use "digital twin" language only where scenario/operational data integration is genuinely relevant (PDF §5.1 rule 25).

## Capability status caveat

All capabilities in `phase-1/04_CAPABILITY_REGISTER.csv` are currently **unconfirmed**. Until the owner completes the matrix (D-01), public copy must use the most conservative wording: capabilities are described as demonstrated within the website, not asserted as operational production services.

## What could change these assumptions

- Arrival of the real IFC4 model + data package (DEP-01, DEP-04).
- Completed capability matrix (DEP-07).
- Confirmed brand, legal and contact details (DEP-06, DEP-08).

# 01 — PDF Brief Review (section by section)

**Document:** `iCost_SustainZone_3D_Website_Project_Guide.pdf`, Version 1.0, June 2026.
**Status:** The PDF was **successfully located, opened and fully reviewed.** All 12 pages and all 20 numbered sections were read in full via text extraction. No section was unreadable. (Figures 1 and 2 are referenced as images and were not visually inspected; their meaning is taken from surrounding text.)

This file records my understanding so later work can cite section headings, per the brief.

---

## Front matter — Approval status table
Tracks the readiness of inputs. Notably: the storyline, pathway matrix and storyboard are **approved/specified**; the **real BIM strategy is "Required"**, **demonstration data is "Specified" (example only)**, **logos require confirmation**, and the **capability/status matrix must be completed before public claims**. This frames what is genuinely settled vs outstanding.

## §1 — Project concept and value proposition
- **§1.1 Core idea:** A customer supplies a BIM/IFC model; the platform extracts geometry, elements, spaces, materials, dimensions, quantities, classifications, properties. The *same model* becomes the shared source for four intelligence layers: **Model intelligence**, **iCost commercial intelligence**, **SustainZone carbon intelligence**, **Risk & scenario intelligence**, each with defined outputs.
- **§1.2 Main public message:** H1 "**One Model. Complete Project Intelligence.**"; supporting line "Transform BIM and IFC models into cost, carbon, asset and risk intelligence through one connected platform."
- **§1.3 What the customer should understand:** what's in the model and what's missing; quantities/components/materials; likely cost and hotspots; embodied carbon and alternatives; risks/scenario impacts; available reports and recommendations for the chosen objective.
- **§1.4 What the website must NOT do:** no undifferentiated capability list; never call a static viewer an operational digital twin; no "complete whole-life carbon" unless all stages included; no demonstration-as-validated-simulation; no invented results/savings/accuracy/certs/partnerships; never depend on the 3D canvas for essential SEO/accessibility. **(Hard guardrails.)**

## §2 — Existing workflow and proposed integrated process
The original workflow (Figure 1) connects clients/sectors → model analysis → property identification → cost → sustainability → gap analysis → scenario → risk → proposals. The website must turn this into **one understandable customer journey, not a technical flowchart**.
- **§2.1 Proposed integrated workflow:** 6 stages with "customer meaning": (1) Model input, (2) Model intelligence, (3) Information gap analysis, (4) Relevant intelligence (apply only the services relevant to the objective), (5) Comparison, (6) Reports & recommendations.

## §3 — Positioning, audiences and customer selection logic
- **§3.1 Entry questions:**
  - **Q1 "What are you looking to achieve?"** — 9 objectives: understand BIM/asset data · extract quantities · estimate costs · measure embodied carbon · identify missing model information · understand asset/project risks · model an emergency scenario · compare design alternatives · generate project reports.
  - **Q2 "What best describes your organisation?"** — 9 types: contractor/QS · developer/owner · asset/FM · aviation/airport · transport/infrastructure · insurance/risk · sustainability team · engineering consultant · public sector/estate.
- **§3.2 Personalisation result:** combine objective + organisation → a short pathway of **no more than 5–6 stages**; selections pass into the enquiry form for context. Example: *Aviation + emergency risk → model analysis → spatial & asset extraction → scenario modelling → impact assessment → risk & mitigation report.*

## §4 — Approved website storyline
Same 3D asset throughout; the model changes to explain the active service while HTML carries the full accessible/indexable explanation. **8 scenes:** (1) Identify the need, (2) Everything starts with the model, (3) Understand the model, (4) Identify information gaps, (5) Apply relevant intelligence, (6) Compare alternatives, (7) Model specialist scenarios, (8) Receive outputs.
- **§4.1 Storytelling rules:** model explains, never decorative; visitor not forced through every capability; objective controls active mode + content; important info also in semantic HTML; understandable with 3D/video/motion disabled; slow, controlled, professional camera; demo data clearly labelled.

## §5 — Customer pathway matrix
Maps organisation type → typical need → recommended pathway → outputs (e.g. contractor/QS → quantities/estimates → model analysis → quantity extraction → gap review → iCost cost → comparison → commercial report). Covers all 9 org types.
- **§5.1 Rules for website logic:** keep model intelligence as shared foundation; show only services materially related to the objective; iCost branding when commercial intelligence active; SustainZone branding when carbon active; "digital twin" only when genuinely relevant; allow changing objective/org at any time; provide a route to the **full platform overview** for visitors who want everything.

## §6 — Eight-scene 3D storyboard
Per-scene camera, model/interface action, primary message, customer outcome. Key states: S1 wide three-quarter, slow rotation, selectors appear; S2 push to isometric, analysis boundary, "one scan"; S3 medium isometric + small orbit, floors separate, one element selected + side panel; S4 closer view, **amber outlines/patterns/labels** for missing data; S5 wider analytical isometric, switches to cost/carbon/asset/risk mode; S6 centred comparison, slider/split; S7 camera to affected zone, fire/restricted-access demo with hazard/impact/blocked route/alt route; S8 stable wide, model reforms, reports + enquiry CTA. Messages per scene are specified verbatim.

## §7 — Visual style direction
Feel connected to the current iCost site but more product-focused, explanatory, interactive. Treat current site as reference, not a copy.
- **§7.1 Use vs Avoid:** **Use** dark navy ~`#0c3c60`, white, restrained neutrals, limited green; strong headings, readable body, controlled spacing, clear data hierarchy; professional 3D lighting, analytical heatmaps, stable panels, deliberate motion; straight/lightly-rounded panels with consistent IA. **Avoid** glassmorphism, excessive gradients, neon, generic AI-startup look, large empty areas, repeated small cards, vague decorative interfaces, gaming effects, fast camera, particles, flares, many floating panels.
- **§7.3 Frame requirements:** Hero & selection (value prop, one central asset, selectors, minimal movement); Intelligence interface (mode tabs, selectable elements, consistent side panel, heatmap legend, floor/project summaries, example-vs-verified distinction); Specialist scenario (scenario selector, affected-zone viz, route analysis, summary metrics, legend, mitigation panel, explicit demonstration status).

## §8 — Reference animatic specification
A motion *reference*, not a replacement for the interactive experience. ~28s, 16:9 1920×1080 30fps, no voiceover, short headings only, dark navy realistic lighting. **Primary use:** Claude reference, camera guide, mobile fallback, temporary hero, presentation.
- **§8.1 Timing plan:** 0–3 objective; 3–6 model input scan; 6–10 property intelligence (exploded floors + element); 10–13 information gaps; 13–18 relevant intelligence (cost/carbon/risk); 18–21 compare; 21–25 risk scenario; 25–28 outputs/logos/CTA.
- **§8.2 Motion rules:** slow ease in/out; consistent orientation; smooth state changes (no hard cuts/spins/glitch); never move camera through geometry; keep panels readable; create static poster + reduced-motion sequence; produce separate clips if using AI video then combine.
- Adopts the MindStudio workflow (set direction early, GSAP ScrollTrigger pinned sequences, slow motion, compress assets, mobile/reduced-motion fallbacks) **but with a real BIM-derived model and decision journey, not a generic background animation.**

## §9 — Real BIM and IFC model strategy
- **§9.1 Source of truth:** a genuine **IFC4** model; derive Fragments + GLB versions. Versions: Master IFC (don't auto-modify; keep GlobalId), Fragments (retain mapping to GlobalId), Desktop GLB (keep selectable objects separate; optimise), Mobile GLB (major geometry only), Static poster/short video (must not be the only copy of important info).
- **§9.2 Recommended demo asset:** purpose-built **IFC4 compact terminal / transport hub / airport** — complex enough for multiple pathways, small enough for browser; avoids confidentiality/ownership risks.
- **§9.3 Required semantic structure:** valid spatial hierarchy (IfcProject → optional IfcSite/IfcBuilding → IfcBuildingStorey → IfcSpace); structural, architectural, MEP/safety elements; defined spaces (concourse, corridor, plant, electrical, restricted, waiting, safe external); materials/quantities/classifications/Psets and **deliberate information gaps**; routes/exits/safe zones + a first risk scenario zone.
- **§9.4 Object identification & mapping:** **IFC GlobalId is the primary relationship** across IFC object, GLB node, Fragment id, properties, quantities, cost, carbon, gap, risk, report. Visible names are for humans only. Field example table (GlobalId, IfcClass, name, glbNodeName, storey, material/cost/carbon/gap/risk references).
- **§9.5 Controlled information gaps:** deliberate gaps (e.g. External Wall 03 missing fire rating; Internal Door 07 missing material; Mechanical Unit 02 missing asset id; Concrete Slab L02 missing cost code; Internal Partition 04 missing carbon mapping; Electrical Panel 01 missing maintenance info; Service Corridor missing route classification) — each demonstrates a specific analysis impact.
- **§9.6 Conversion:** IfcOpenShell IfcConvert → GLB; That Open IfcLoader → Fragments; web-ifc → JS IFC access; R3F + Three.js GLTFLoader. Pipeline: Master IFC → validation → property/quantity extraction → Fragments → GLB → JSON data package → website.
- **§9.7 Model acceptance criteria:** IFC4 opens clean with correct hierarchy; ≥2 storeys, ≥8 spaces, ≥10 selectable element types; structural/architectural/MEP/safety info; materials/quantities/Psets for key objects; documented gaps; first scenario mappable; converts to GLB keeping objects selectable; no confidential info.

## §10 — Demonstration data specification
The model alone is insufficient; a structured **data package** links objects to property/quantity/cost/carbon/gap/risk/report info. **Every value is example data and must be reviewed before publication.**
- **§10.1 Files:** model-manifest, element-map, properties, quantities, cost-data, carbon-data, information-gaps, risk-scenarios, routes, reports (.json).
- **§10.2 Data dictionary:** core fields per category (Identity: ifcGlobalId/expressId/ifcClass/elementName/glbNodeName/fragmentId/storey/space; Properties: material/dimensions/classification/fireRating/assetIdentifier/maintenanceStatus; Quantities: count/length/area/volume/weight/unit; Cost: rateSource/unitCost/materialCost/labourCost/installationCost/elementTotal/currency; Carbon: materialReference/emissionFactor/factorSource/lifeCycleModule/elementCarbon/unit; Gaps: missingField/severity/affectedAnalysis/recommendation/status; Risk: scenarioId/hazardType/affectedZones/affectedAssets/routeStatus/severity/mitigation; Reporting: reportCategory/evidenceStatus/assumptionNote/demonstrationStatus).
- **§10.3 Example element records:** worked examples with demo cost (£) and demo carbon (tCO₂e), information status, risk relevance.
- **§10.4 First demonstration scenario:** `FIRE_CONCOURSE_A`, status "Demonstration only", fire & smoke visualisation, origin Concourse Zone A, affected zones/assets, primary route unavailable, alternative Escape Route East, risk "High (example only)", mitigation note, and validation statement **"Not an engineering-validated fire simulation."**

## §11 — Platform capability and claims matrix
Every capability must be classified **before** copy is written; Claude must not infer status from screenshots/prototypes/plans. Capabilities to confirm: BIM/IFC viewing, IFC property extraction, quantity extraction, iCost rate mapping/cost calc, SustainZone embodied carbon, information gap analysis, cost/carbon comparison, scenario visualisation (demonstration until confirmed), engineering risk simulation (planned/specialist), live sensor integration (future unless confirmed), automated report generation. **Use only four statuses: Available now / Under development / Demonstration only / Planned.**

## §12 — Website IA and SEO plan
3D explains the platform; dedicated semantic pages serve specific search intent. Google: people-first content, customer words, crawlable links, understandable content.
- **§12.1 Sitemap (~22 pages)** with primary search intent each — adopted as baseline (see 05_SITEMAP).
- **§12.2 On-page requirements:** unique title+meta per page; one H1 + logical H2/H3; canonical, OG, social images; crawlable internal links; visible content covering problem/input/analysis/output/limitations/next-action; descriptive alt text + 3D text alternatives; breadcrumbs + footer hierarchy; Organisation schema on home + only accurate schema elsewhere; sitemap, robots, custom 404; no keyword stuffing/duplicate/thin pages.
- **§12.3 Technical SEO:** use Next.js metadata APIs & file conventions (metadata, OG images, sitemap, robots) rather than manual head markup.
- **§12.4 Content principles:** write for the decision maker; real customer language; explain distinctions; provide evidence/assumptions/limitations/dates; build genuinely useful resources. Don't manipulate rankings, keyword-stuff, blur meanings, invent proof, or create shallow articles.

## §13 — Technical architecture
- **§13.1 Stack:** Next.js+TS (server-rendered semantic content, routing, metadata); R3F + Three.js (reusable components, interactions, states); Drei (controls, loaders, environments, labels); GSAP ScrollTrigger (pinned/scrubbed sequences); That Open Engine + Fragments + web-ifc (IFC processing, detailed viewer); optimised GLB (public experience); typed JSON/API keyed by IFC GlobalId (separate business data from geometry); Tailwind/controlled CSS with documented tokens.
- **§13.2 Component architecture:** app routes per page; `components/` (navigation, hero, customer-selector, pathway-summary, three-d/{model-viewer, scene-controller, mode-selector, element-selection, information-panel, legends, fallbacks}, content-sections, reports, forms); `data/*.json`; `lib/{seo, model-mapping, analytics, validation}`; `public/{models, posters, images, video}`.
- **§13.3 3D scene modules:** SceneController, ModelLoader, ElementMapper, SelectionManager, ModeManager, ScrollTimeline, AccessibilityLayer, ResourceManager (with disposal responsibility).
- **§13.4 Data flow:** visitor selection → pathway engine → active service mode → IFC GlobalId mapping → model highlight + data panel → relevant report preview → enquiry form context.

## §14 — Full production workflow
Phases 0–11 (confirm product truth → reference package → real BIM model → web assets → animatic → Claude planning → prototype → full build → SEO/content → QA → deploy → post-launch), each with a gate.
- **§14.1 Claude approval gates:** stop after research/sitemap/design/tech plan; stop after prototype + report limitations; team approves model/capability/claims before final copy; team reviews staging before deploy access; deployment blocked until build/forms/metadata/sitemap/fallbacks pass.

## §15 — Accessibility, performance & QA
- **§15.1 Accessibility:** semantic HTML/heading structure; keyboard access to nav/selectors/modes/forms/scene; visible focus + contrast; labels/text alternatives; never colour-only status; prefers-reduced-motion + pause/skip; static description + poster for 3D; pathway understandable without canvas.
- **§15.2 Performance:** server-render important content before 3D; lazy-load 3D libs/models only where used; poster + progress; mobile GLB/static fallback; compress geometry/textures, remove unused; dispose WebGL resources/listeners on unmount; limit simultaneous video/WebGL/scroll; measure Core Web Vitals on real mid-range mobile.
- **§15.3 QA matrix:** content, SEO, responsive (large desktop/laptop/tablet/Android/iPhone Safari), 3D, accessibility, performance, forms, production — with explicit checks each.

## §16 — Project folder & asset package
Defines `project-reference/` (01-business-brief … 16-claude-prompts, incl. 09-bim-model/{master-ifc,fragments,glb-desktop,glb-mobile,validation}). **§16.1 Minimum files before full coding:** PDF + master prompt; original logos (SVG/high-res PNG); completed capability matrix; validated master IFC or approved temp model plan; desktop/mobile GLB or clear asset status; element map + demo data; approved style frames + animatic or plan; confirmed contact/domain/legal name/CTA.

## §17 — Further steps & approval gates
Owner-assigned steps and gates (capability matrix before final copy; logos before full 3D coding; IFC creation; conversion; element mapping/demo data; animatic; Claude planning approval; prototype approval; staging review; deploy). **Immediate next action:** complete the capability/status matrix and confirm how the demo IFC4 will be produced (Revit/Bonsai/other/IfcOpenShell).

## §18 — Master Claude Code prompt
Restates the governing instruction, working method and the **Phase 1 = review and plan only, stop and wait** requirement, design/content/data rules, and the required first-response contents. (This is the basis of the brief I was given.)

## §19 — Acceptance criteria
- **§19.1 Strategy/content:** purpose clear in first screen; visitor finds a relevant pathway without jargon; iCost & SustainZone roles clear but product feels integrated; all claims match the capability matrix; each important page = distinct search intent + useful original content.
- **§19.2 3D/BIM:** real IFC-based source of truth; GLB/Fragments map reliably to GlobalId; elements select and show correct property/cost/carbon/gap/risk; manual mode switching independent of scroll; full loading/error/mobile/static/reduced-motion fallbacks.
- **§19.3 SEO/technical:** unique metadata/canonical/crawlable links on all indexable pages; valid sitemap+robots; schema matches visible content; important content server-rendered & accessible outside canvas; production build passes with no significant console/accessibility/responsive defects.

## §20 — References
15 cited sources: current iCost site; MindStudio article; buildingSMART IFC spatial decomposition; IfcOpenShell IfcConvert; That Open IfcLoader; web-ifc; Three.js GLTFLoader; Google SEO Starter Guide; Google people-first content; Next.js metadata/OG; Next.js sitemap; Next.js robots; Google Web Vitals; R3F intro; GSAP ScrollTrigger. Note: verify current package compatibility at implementation time.

---

## Cross-cutting takeaways that drive every later deliverable
1. **One model, four intelligences, personalised exposure** — never an undifferentiated list.
2. **IFC GlobalId is the spine** of all data binding.
3. **Semantic HTML carries meaning; 3D enhances it** — full graceful degradation required.
4. **Conservative, evidence-based claims only**, gated by the capability matrix.
5. **Slow, professional, analytical motion** — no gaming/AI-startup aesthetics.
6. **Demonstration content must be labelled as such, always.**

## Conflicts found between this brief and the PDF
None material. The session brief and the PDF's own master prompt (§18) are consistent. The session brief expands the management/file-saving discipline beyond the PDF, which does not conflict.

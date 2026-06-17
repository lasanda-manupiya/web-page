# 07 — Homepage Information Architecture & Customer Selection Flow

Implements PDF §1–§6 "Homepage Customer Flow" and the storyline. The homepage is the **decision path**: establish problem → introduce platform → ask objective → ask organisation → present pathway → show model-to-intelligence → demonstrate the modes → outputs → evidence/limits → route to action.

The 3D model is pinned and scroll-controlled, but **every block has a complete semantic-HTML equivalent** that works with no canvas, no JS, no motion.

---

## Section-by-section homepage IA

| # | Section | Maps to scene | Purpose | Always-on HTML content | 3D behaviour |
|---|---------|---------------|---------|------------------------|--------------|
| 0 | Header / nav | — | Orient + navigate | Logo, nav, skip link, "Request a demo" | none |
| 1 | Hero + customer selector | Scene 1 | Establish value; capture objective + organisation | H1 "One Model. Complete Project Intelligence."; supporting line; **Objective select (9)** + **Organisation select (9)**; primary CTA; static poster image of the model | Complete model, slow rotation, selectors overlaid |
| 2 | Personalised pathway summary | §3.2/§5 | Show the relevant 5–6 step pathway for the selection | Rendered pathway steps + expected outputs as a list/cards; "change selection" control | model holds, subtle highlight of relevant zones |
| 3 | Everything starts with the model | Scene 2 | The model is the single shared source | Short explainer + bullet list of what's extracted (geometry, elements, spaces, materials, quantities, classifications, properties, relationships) | camera push to isometric; "scan" sweep |
| 4 | Understand the model | Scene 3 | Structured extraction, not a viewer | Explainer + example property table (HTML); "select an element" hint | floors separate; one element selected; side panel |
| 5 | Identify information gaps | Scene 4 | Completeness matters | Explainer + list of example gaps with severity (HTML table) labelled demonstration | amber outlines/patterns/labels on incomplete objects |
| 6 | Apply the relevant intelligence (mode demo) | Scene 5 | Show cost / carbon / asset / gap / risk modes | **Mode tabs** with full HTML content per mode (problem, input, output, limits); demo values labelled | model switches mode; heatmap + legend + side panel |
| 7 | Compare alternatives | Scene 6 | Trade-offs before deciding | Explainer + before/after comparison (HTML table) | slider/split comparison |
| 8 | Specialist scenarios | Scene 7 | Risk/scenario capability for relevant orgs | Explainer + scenario summary; explicit "concept demonstration, not an engineering-validated simulation" | camera to affected zone; hazard/route demo |
| 9 | Outputs & reports | Scene 8 | What you receive | List of report types (from capability matrix) + demo report preview labelled | model reforms; report cards appear |
| 10 | Evidence, limitations & data requirements | §1.4/§11 | Honesty + trust | What's required as input; what's demonstration vs operational; capability status note | none |
| 11 | Route to action | Scene 8 | Convert | Links to relevant Solution/Capability page + Contact; selections passed to enquiry | none |
| 12 | Footer | — | Trust + nav | Legal name, registration, links, privacy | none |

## Customer selection flow (the two questions)

**Q1 — "What are you looking to achieve?"** (objective; single-select, 9 options per PDF §3.1)
**Q2 — "What best describes your organisation?"** (organisation; single-select, 9 options per PDF §3.1)

Behaviour:
- Both default to "Not sure / show me everything" → routes to `/platform` overview, never a dead end.
- On selection, Section 2 renders the matched pathway (logic in 08_CUSTOMER_PATHWAY_RULES).
- Selection persists (URL query + sessionStorage) and **passes into the enquiry form** (PDF §3.2).
- A persistent "Change objective / organisation" control is available at any time (PDF §5.1 rule 26).
- **The selector must not imply the platform has verified information about the visitor** (brief Homepage Flow). Copy is phrased as "Based on what you told us…", not "We detected…".

## Accessibility & no-JS behaviour
- Selectors are native `<select>`/radio controls with labels; the pathway can also be reached via plain links to each `/solutions/*` page (works with JS disabled).
- Each scene's meaning is fully present in HTML headings/paragraphs/tables; the canvas is `aria-hidden` with a text alternative and static poster.
- Mode tabs are an accessible tablist; content is in the DOM for all tabs (not lazy-injected by 3D state).

## SEO note
- Single H1 (the hero). Sections 3–11 use H2; sub-points use H3.
- All explanatory copy is server-rendered text, not inside the canvas (PDF §12.2, §1.4).
- Organisation schema on the homepage only (once legal details confirmed, D-04).

# 02 — Current Website Review (new.i-cost.co.uk)

**Reviewed:** 2026-06-17, by fetching and analysing the live page at `https://new.i-cost.co.uk/`.
**Method:** HTML/content fetch and analysis. CSS/visual rendering was not pixel-inspected, so precise colour values and exact typography are described from content/structure and the PDF's stated brand direction; treat colour specifics as **provisional** until verified against the live stylesheet or design files.

---

## What the current site actually is
The live site is the **I-Cost Group corporate site**, not the BIM platform from the PDF. It positions a UK technology/advisory group around **"Intelligent Cost Intelligence & Compliance"** and three operating companies:
- **CostIQ** — real-time project cost tracking & forecasting (ML)
- **SustainGate** — AI ESG & sustainability intelligence (*Coming soon*)
- **SustainZone** — full-service ESG advisory & strategy

> **Important implication (open decision D-05):** The new "Integrated BIM Cost, Carbon and Risk Intelligence Platform" is a **distinct product** not currently represented on the live site. We must decide whether it is a standalone product site cross-linked to the group, or a section within it. This affects navigation, domain and canonical strategy.

## Structure observed
- **Nav:** About · Companies · Sectors · Blogs · Contact · LinkedIn.
- **Hero:** "UK Technology Group", three pillars (AI-Powered, Real-Time Data, Risk Management); CTAs "Discover" and "Get Started".
- **About:** "Three companies. One mission." with stats (500+ active projects, 12 yrs combined experience, 90% client retention).
- **Companies:** the three brands with "Explore →" links.
- **Comparison table:** "Without I-Cost Group" vs "With I-Cost Group" across five dimensions.
- **Sectors:** Construction, Manufacturing, Healthcare Supply, Infrastructure.
- **Insights:** blog rail (no live articles shown).
- **Trust indicators:** Innovate UK, Catapult, BIS/BEIS, HLF (no relationship detail).
- **Footer:** company descriptor, company links, sectors, contact (email/LinkedIn/onboarding), © 2026, Privacy Policy, Companies House, registration (England & Wales, Co. No. 09789057).

---

## Visual / brand elements worth preserving (per PDF §7 "reference, not copy")
1. **Dark enterprise identity** — serious, professional, B2B tone (aligns with PDF dark navy `#0c3c60` direction).
2. **Strong headline + supporting line pattern** ("Three companies. One mission.") — clean hierarchy we can echo with "One Model. Complete Project Intelligence."
3. **Multi-brand framing** — the group already presents iCost/SustainZone as related; our integrated platform message fits this narrative.
4. **Sector targeting** — the site already speaks to Construction/Infrastructure/etc., which maps onto our organisation-type selector.
5. **Trust/affiliation strip** — a credible pattern (Innovate UK etc.) we can reuse *only with confirmed, accurate relationships*.
6. **Clear, restrained layout** — no gaming/AI-startup excess, consistent with PDF "avoid" list.
7. **Footer with real legal/registration detail** — good for trust and required for a UK business site.

## Weaknesses to avoid / improve
1. **Vague CTAs** — "Discover" gives no destination cue. → Our CTAs will be specific ("See how it works", "Request a model review").
2. **Empty promises** — Insights rail with no articles; "Explore →" leading nowhere (SustainGate). → Don't ship empty sections; build `/resources` only with real content or omit.
3. **Unexplained trust logos** — affiliations listed without context. → Only show affiliations with a one-line, accurate relationship statement (and only if confirmed).
4. **Context-free statistics** — "90% retention vs what baseline?" → Avoid unsupported metrics entirely (PDF content rules); if used, cite basis.
5. **Heavy generic AI/ML terminology** — limited concrete differentiation. → Differentiate through the **specific BIM→cost/carbon/gap/risk pipeline** and clear capability distinctions, not adjectives.
6. **No customer journey by visitor type** — SME vs mid-market undistinguished. → Our **objective × organisation selector** directly fixes this (PDF §3).
7. **Anchor-heavy single page** (#about/#companies/#sectors) — can confuse structure and SEO. → Use **distinct crawlable pages per search intent** (PDF §12.1).
8. **No 3D / interactive explanation** of the product. → The 8-scene model experience is our core differentiator and explanatory device.
9. **"Coming soon" without timeline** — uncertainty. → State status honestly using the capability matrix wording (Available now / Under development / Demonstration only / Planned).

## SEO observations
- The single-page anchor structure limits the number of pages that can target distinct intents. Our sitemap (05) deliberately creates dedicated semantic pages.
- No evidence of per-page metadata strategy on the product topics we need (BIM quantity takeoff, 5D cost, embodied carbon, etc.).
- Blog/insights exists as a concept but is not populated — a content opportunity, not a model to copy.

## Accessibility observations (provisional, content-level only)
- Could not verify focus states, contrast ratios or keyboard support from content alone. We will set our own WCAG 2.2 AA targets (see 14_ACCESSIBILITY_PLAN) rather than inherit unverified behaviour.

---

## Net direction
Keep the **dark, credible, enterprise feel and multi-brand framing**; replace **vague messaging, empty sections and single-page anchors** with **specific copy, populated content, distinct intent-driven pages, and an explanatory 3D model experience**. Treat the live site strictly as a brand/visual reference per PDF §7 — not a template.

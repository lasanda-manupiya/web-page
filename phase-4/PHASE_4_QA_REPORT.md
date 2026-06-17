# Phase 4 — Quality Assurance Report

**Date:** 2026-06-17
**Build under test:** Production build (`npm run build && npm start`), 26 routes.
**Method:** Automated route/link/metadata crawler (`scripts/qa-crawl.mjs`) + in-browser checks at multiple viewports (preview tooling). Only tests actually executed are reported as run.

---

## Summary
- **3 defects found and fixed**, then retested green (see below).
- Automated crawler: **ALL CHECKS PASSED** — every route 200, single H1, canonical, meta description, title, valid JSON-LD; all 21 internal links resolve; 404 returns 404.
- No console errors or warnings observed across home, demo, capability, solution and contact pages.

## Defects found → fixed → retested
| ID | Defect | Severity | Fix | Retest |
|----|--------|----------|-----|--------|
| QA-1 | Primary nav hidden below `md` with **no mobile menu** | High (mobile unusable) | Added accessible disclosure menu (hamburger, `aria-expanded`/`aria-controls`, Esc to close, full link set + CTA) | Pass — `aria-expanded` toggles, all 6 links shown, closes on selection |
| QA-2 | Home page had **no canonical** link | Medium (SEO) | Added `pageMetadata` to `app/page.tsx` | Pass — canonical present |
| QA-3 | `/how-it-works` and `/contact` had **no H1** (reused components used H2) | Medium (SEO/a11y) | Added `headingLevel` prop; standalone pages render H1 | Pass — both now expose one H1 |

## Responsive (tested)
| Size | Result |
|------|--------|
| Mobile 375×812 | Pass — hamburger menu works; hero, selectors, story and 3D demo single-column and readable; mobile GLB served (canvas 342×486) |
| Tablet 768×1024 | Pass — inline nav, two-column hero, poster visible |
| Desktop 1280×800 | Pass — content centred at max-width 1200px |
| Large desktop 1440×900 | Pass — centred, no stretching |

(Laptop and tablet-landscape fall between these breakpoints; the layout has a single `md` breakpoint and behaves correctly either side of it.)

## Functional (tested)
- **Navigation / mobile menu:** all primary links resolve; mobile menu opens/closes, Esc closes.
- **Customer selectors + pathway:** objective/organisation drive the suggested pathway and default mode; selection context carried into the enquiry form.
- **3D loading:** Draco model loads with progress overlay; error boundary + static poster paths in place; mobile variant served on small/low-memory devices.
- **Element selection:** pointer pick and keyboard element list both update the info panel (verified "External Wall 01", "Concrete Slab Level 01").
- **Mode switching:** all five modes (Data/Cost/Carbon/Gaps/Risk) switch and recolour the model; no console errors.
- **Scroll camera transition / reduced motion:** single GSAP transition works; with `prefers-reduced-motion` active the scrub is disabled and a static framing is used (verified in preview, which reports reduced motion).
- **Free look:** toggles OrbitControls on/off.
- **Forms / CTAs:** contact form fields are labelled, submit is safe (preventDefault), email fills; CTAs link to the correct routes.

## Accessibility (tested)
- Skip link is the **first focusable element**; landmarks present (`header`, `main`, `footer`, `nav`).
- Canvas is **not** a keyboard trap (no tabindex); selection available via the adjacent element list.
- Mode tabs use a proper `tablist` with arrow-key support; visible focus styling via `:focus-visible`.
- Status conveyed by value + label + pattern, not colour alone (cost/carbon legends, amber + hatch gaps, risk labels).

## SEO / technical (tested)
- Unique `<title>` + meta description + canonical on all 21 content routes (crawler-verified).
- JSON-LD (Organisation/WebSite/BreadcrumbList) parses on every page.
- `sitemap.xml` valid (all routes); `robots.txt` returns `Disallow: /` (staging) — flips at launch via `SITE.indexable`.
- Custom 404 returns HTTP 404.
- Production build green: 26/26 static pages; First Load JS — home 114 kB, content pages 94 kB, demo 111 kB; 3D libraries dynamically imported.

## Not performed in this environment (honest)
These require tooling/hardware not available here and are recommended before launch (Gate 4 sign-off):
1. **Lighthouse / Core Web Vitals** lab + field measurement (LCP/INP/CLS) on real mid-range mobile.
2. **Automated axe** scan + **screen-reader** pass (NVDA/VoiceOver).
3. **WebGL-disabled** force test — the `NoWebGL` fallback is code-verified but not forced in a real GPU-off browser.
4. Cross-browser matrix (Android Chrome, iPhone Safari) on physical devices.

## Outstanding (owner inputs, not defects)
Placeholder demonstration model + data; placeholder domain (D-05); contact form not wired to a backend (D-04); capability statuses unconfirmed (D-01); logos as raster placeholder (D-03).

## Verdict
The build is functionally complete, responsive, accessible in structure, SEO-sound and free of console errors, with all found defects fixed and retested. Remaining items are external tooling/device validation and owner-supplied production inputs — appropriate to confirm at the launch gate.

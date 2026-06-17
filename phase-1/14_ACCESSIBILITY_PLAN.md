# 14 — Accessibility Plan

Target: **WCAG 2.2 AA** where practical (brief). Implements PDF §15.1. Core principle: the entire customer pathway must be understandable **without** the 3D canvas (PDF §1.4, §15.1).

---

## Structure & semantics
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<aside>` (info panel), `<footer>`; one `<h1>` per page; logical H2/H3.
- "Skip to main content" link as first focusable element.
- Breadcrumbs as an ordered list with `aria-label`.

## Keyboard access (PDF §15.1)
- All navigation, selectors, mode tabs, scene navigator, forms and 3D element selection are fully keyboard operable.
- Mode tabs = ARIA tablist (Left/Right + Home/End; `aria-selected`).
- 3D selectable elements exposed as a keyboard-navigable list (Tab/arrows cycle; Enter selects; Esc clears) with accessible names from `elementName`.
- **No keyboard trap** in the WebGL canvas: focus can always move past it; canvas itself is `aria-hidden` and not in the tab order — interaction happens through the adjacent accessible controls/list.

## Focus & contrast
- Visible focus indicators on every interactive element (not removed; ≥3:1 against background, WCAG 2.2 focus-appearance).
- Text contrast ≥4.5:1 (≥3:1 large); the dark-navy `#0c3c60` + white + green palette validated for contrast at design-token stage.
- Target size: interactive controls meet WCAG 2.2 minimum (24×24 CSS px) and are comfortably larger on mobile.

## Don't rely on colour alone (PDF §15.1)
- Cost/carbon/gap/risk status conveyed by **value + label + pattern**, not colour only: heatmaps paired with numeric legends; information gaps use amber **plus** hatch pattern **plus** text label; risk levels labelled in the panel.

## 3D text alternatives (PDF §15.1)
- Each scene and mode has a DOM text summary (AccessibilityLayer) describing what the model is showing.
- Static poster + descriptive text for the 3D experience; the InfoPanel content (properties/cost/carbon/gap/risk) is real DOM text, readable by screen readers regardless of canvas state.
- Loading and error states announced via `aria-live` (polite for progress, assertive for errors).

## Motion (PDF §15.1)
- Respect `prefers-reduced-motion`: disable pinned scrubbing/camera tweening; use discrete state changes.
- Always-available Pause/Skip controls for the animation; a static alternative to the scroll experience.

## Forms (PDF §15.3)
- Labels tied to inputs; clear error messages tied via `aria-describedby`; errors not colour-only; consent wording explicit; required fields indicated in text.
- Selection context (objective/org) shown to the user before submission.

## Testing approach (honest — only reported if actually run; PDF §14 / brief)
- Automated: axe / Lighthouse a11y on key templates.
- Manual: keyboard-only walkthrough of home (incl. 3D selection), a Solution page, and Contact; screen-reader smoke test (NVDA/VoiceOver) of landmarks, tabs, info panel, live regions; reduced-motion verification; contrast checks on tokens.
- Recorded in QA evidence files in Phase 4; no test claimed unless executed.

## Acceptance (ties to PDF §19.2)
- Full pathway usable with canvas disabled, JS disabled (links/SSR content), and reduced motion on.
- Loading/error/mobile/static/reduced-motion fallbacks all present and announced.

## Dependencies
- Final contrast validation needs confirmed brand colours/logos (DEP-06); base palette from PDF §7 is sufficient to start.

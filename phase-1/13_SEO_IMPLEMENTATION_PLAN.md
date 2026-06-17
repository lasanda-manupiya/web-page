# 13 — SEO Implementation Plan

Implements PDF §12 and the brief's SEO principles. Built on Next.js metadata APIs and file conventions (§12.3). Important content is server-rendered semantic HTML, never trapped in the canvas (§1.4, §12.2).

---

## Principles (PDF §12.4, brief)
- One page per distinct search intent; no two pages compete for the same primary query (see 06_SEARCH_INTENT_MAP).
- People-first content for the actual decision maker; real customer language; explain distinctions (BIM viewing vs property extraction vs quantity takeoff vs cost vs embodied vs whole-life carbon vs scenario vs digital twin).
- Provide evidence, assumptions, limitations and update dates; never invent proof or unsupported claims.
- No keyword stuffing, duplicate or thin pages.

## Per-page on-page requirements (PDF §12.2)
Every indexable page ships with:
- Unique `<title>` and meta description (via Next.js `generateMetadata`).
- Exactly one `<h1>`; logical H2/H3 hierarchy.
- Canonical URL.
- Open Graph + Twitter metadata + a descriptive social image (`opengraph-image`).
- Crawlable internal links (real `<a href>`, server-rendered).
- Visible content covering: problem · input · analysis · output · limitations · next action.
- Descriptive `alt` text on images; text alternatives for 3D visual information.
- Breadcrumbs where useful; consistent footer hierarchy.

## Metadata system
- `lib/seo/metadata.ts`: typed helpers returning Next.js `Metadata` (title template `%s | iCost + SustainZone`, description, canonical, OG, robots).
- Per-route `generateMetadata` pulls from a single `pageMeta` config derived from 06 so titles/descriptions stay unique and maintainable.
- `app/sitemap.ts` and `app/robots.ts` use Next.js conventions (PDF §12.3). Sitemap lists all indexable routes with `lastModified`; robots allows crawling and points to the sitemap; disallows system/preview paths.

## Structured data (only where it matches visible content — PDF §12.2)
- **Organisation** schema on `/` and `/about` (once legal name/contact confirmed, D-04).
- **BreadcrumbList** on Capability/Solution/Resource pages.
- **WebSite** (+ optional SiteNavigationElement) on `/`.
- **FAQPage** only on pages that show real Q&A in the visible content.
- **Service**/Product-style schema only if it accurately reflects confirmed, available capabilities (gated by the capability matrix, D-01). Until then, omit rather than overclaim.
- No Review/AggregateRating/Offer schema (no verified reviews, prices or offers exist).

## Internal linking map (PDF §12.2 crawlable links)
- **Home** → Platform, How it works, 3D demo, Contact, and each Solution via the selector (also plain links for no-JS).
- **Platform** (hub) → every Capability page.
- **Capability** ↔ adjacent capabilities in the pipeline + Solutions that rely on it + Contact (e.g. quantity-takeoff ↔ cost-estimation ↔ carbon-assessment; gap-analysis links to all).
- **Solution** → the specific Capability pages in its pathway (from 08) + 3D demo + Contact.
- **Resources** articles → relevant Capability/Solution pages (only when articles exist).
- Descriptive anchor text using customer language (no "click here").

## URL & canonical strategy
- Descriptive, lowercase, hyphenated URLs exactly as 05_SITEMAP.
- Canonical = self for each page; the root depends on D-05 (standalone domain vs group subpath).
- 301s planned for any legacy/alternate paths once the domain decision is made.

## Content governance (claims)
- All capability wording follows `04_CAPABILITY_REGISTER` allowed-wording column; demonstration content labelled in copy and metadata.
- Metadata descriptions must not contain unsupported claims (no "validated", "certified", "X% savings").

## Measurement (post-launch, PDF §14)
- Submit sitemap to Search Console; monitor queries/clicks/conversions; track Core Web Vitals (see 15).

## Dependencies
- D-04 (legal/contact) for Organisation schema; D-01 (capability matrix) for any Service schema and claim wording; D-05 (domain) for canonical root. None block building the metadata system itself.

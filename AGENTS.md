# AGENTS

## Package Manager
- **pnpm** only. Lockfile: `pnpm-lock.yaml`. Never use npm or yarn.

## Commands
- `pnpm dev` — dev server (localhost:3000)
- `pnpm build` — production build
- `pnpm typecheck` — `tsc --noEmit`
- Tests: Vitest (tests in `lib/__tests__/`). No `test` script is wired in package.json — run `pnpm exec vitest run` for all tests.

No ESLint: it was uninstalled due to conflicts with other packages. There is no `pnpm lint` script — do not run it or reinstall ESLint without asking first.

No single-test-file shortcut is configured; run `pnpm exec vitest run` for all.

## Architecture

Next.js 16 App Router with React 19, TypeScript, Tailwind CSS, and MongoDB via Mongoose.

### Data Flow
- **Server Actions** (`app/lib/actions.ts`) are the sole data-access layer. They call Mongoose directly.
- Do NOT create HTTP API routes or `fetch()` calls for internal data. The old `/api/cars` route exists but is a legacy read-only endpoint; prefer Server Actions.
- `getCar` is wrapped in React `cache()` for per-request deduplication (shared by `generateMetadata` and page). Do not add module-level caching.

### Key Modules
- `lib/catalog-query.ts` — URL param parsing, filter building, sort/pagination helpers. The wire format (`sort=Precio ascendente`, comma-joined values, `maxPrice=1000000` as open-ended) is preserved for SEO. All filter construction MUST go through `buildCarFilter()`; never build Mongo filters elsewhere.
- `lib/site-config.ts` — single source of truth for `SITE_URL`, `SEO_IMAGE`, `GA_MEASUREMENT_ID`, `WHATSAPP_PHONE`. Never duplicate these as literals.
- `lib/data.ts` — static content (navbar items, filter options, sell steps, detailing services, about page data).
- `lib/types.ts` — shared TypeScript interfaces (`Vehicle`, `Brand`, `CarsQuery`, `SortKey`, etc.).
- `app/lib/connect-mongo.ts` — Mongoose connection with global cache. Requires `DATABASE_URL` env var.
- `app/lib/models/` — Mongoose models: `Inventory`, `Brand`, `Model`.

### UI
- Load the **frontend-design** skill before making any visual or layout changes.
- Components in `components/ui/` follow shadcn/ui conventions (configured via `components.json`).
- Custom Tailwind tokens: `font-display` (Anton), `font-data` (IBM Plex Mono), body (Poppins). Brand color: `graffiti-*` (yellow). shadcn color tokens read CSS variables from `globals.css`.
- Dark mode: `class` strategy in Tailwind config.
- Images: Cloudinary (`res.cloudinary.com`) and ImageKit (`ik.imagekit.io`) are allowed in `next.config.js` remote patterns.

### Routes
- `/` — home (hero, brands, process, latest arrivals)
- `/catalogo` — catalog with sidebar filters, price range, sort, pagination
- `/ofertas` — vehicles with `discount > 0`
- `/venta` — sell-your-car steps
- `/detailing` — detailing services
- `/acerca-de-nosotros` — about page

## Environment
- `.env` must define `DATABASE_URL` (MongoDB connection string).
- `NEXT_PUBLIC_ENDPOINT` / `NEXT_PUBLIC_ENDPOINT2` exist but are legacy; Server Actions replaced them.

## Conventions
- All user-facing copy is in **Spanish (es-VE)**. Do not write English UI text.
- WhatsApp is the primary conversion channel. All contact flows end in WhatsApp deep links.
- Catalog URL params use Spanish display values (e.g., `sort=Precio ascendente`). Translation to internal keys happens only inside `lib/catalog-query.ts`.
- Never pass unknown URL params to MongoDB. `parseSearchParams` is an allowlist; unknown params are silently dropped.
- `force-dynamic` is used where inventory freshness matters. Do not add static generation for catalog or offer pages.

## Accessibility (a11y)

Target **WCAG 2.2 AA**. Load the **accessibility** skill before any a11y audit or a11y-sensitive change. Load **frontend-design** for visual changes and follow **shadcn** component conventions (Radix primitives for Accordion/Sheet/Slider/Checkbox). Keep every fix idiomatic: prefer native elements and ARIA only when needed — do not over-engineer.

### Global invariants
- `lang="es-VE"` is set on `<html>` (`app/layout.tsx`). Never change it to `es` or remove the language, the `main#main` landmark, or the skip link (`Saltar al contenido principal`).
- Spanish `aria-label`s. All user-facing/complementary strings that reach assistive tech must be Spanish (es-VE): e.g. `aria-label="Abrir menú"`, `aria-label="Ir a la página N"`, `aria-label="Foto siguiente"`.
- Focus must be visible everywhere. Use `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background` on interactive controls (Button already does this).
- `globals.css` already ships: `:focus-visible { scroll-margin-top: 7rem }` (clears the sticky navbar + fixed SectionBanner), a global `prefers-reduced-motion: reduce` flatten rule, and a `forced-colors: active` block (Windows HCM). Do not remove these.

### Images & icons
- Every `<img>`/`<Image>` needs `alt`. Decorative imagery uses `alt=""`; hero background images that repeat the H1 content are decorative.
- Do not use placeholder alts (`tcp-logo`, `logo`, `office-N`, `no-results`, `Hero Background`, `App screenshot`, `office-1`). Use descriptive Spanish alts; the brand logo is `TUCARROPROPIO` / `TUCARROPROPIO - Ir al inicio`.
- All Lucide icons and decorative inline SVGs next to visible text/labels get `aria-hidden="true"` (e.g. Search, ListFilter, Menu/X, step/value/service icons). Brand logo SVGs that carry meaning get `role="img"` + a Spanish `aria-label`.
- Source of truth for icons: `lib/svgs.tsx` (brand marks) and `lucide-react` (UI icons). `WhatsAppIcon` is decorative and already `aria-hidden`.

### Semantic structure
- Landmarks: `<header>`/`<nav>`/`<main id="main">`/`<footer>`. The catalog filter rail + SearchBar live in `<aside aria-label="Filtros del catálogo">`; Pagination is a `<nav aria-label="Paginación del catálogo">` with an `<ul>`; repeated card grids use `<section aria-labelledby>` their `<h2>` heading id.
- Heading hierarchy: one `h1` per page; use `h2`/`h3` in order (vehicle detail: `h1` title → `h2` InfoBlocks). Do not skip levels.
- List-based content uses real lists (`<ul>/<li>`, `<ol>`); `dl`/`dt`/`dd` for spec pairs (`components/ui/SpecList.tsx`); form filter groups use `<fieldset>` + `<legend>` (legend may be `sr-only` with a visible sibling). Avoid `mt-*`/`space-*` alignment hacks in favor of real layout.
- `VehiclesLayout` uses `useId()` for the section `aria-labelledby`. `SpecList`/`InfoBlock` are semantic already.

### Forms & inputs
- Every input has a programmatically associated `<label>`/`aria-label`/`<legend>`. No field relies on `placeholder` alone.
- `components/ui/SearchBar.tsx` wraps in `<form role="search" onSubmit>` with `Input type="search"`—submit works via Enter. Keep it a form.
- Radix `Slider` (PriceRange) gets `aria-label`; the live price readout uses `aria-live="polite"`.
- `components/ui/Input.tsx` placeholder gets overridden to a readable tone at call sites (`placeholder:text-zinc-300`).

### Color / contrast
- Page background is very dark (`zinc-900`/`background`). Normal body text is `zinc-100`/`zinc-200`; secondary text `zinc-300`/`zinc-400`. Do **not** use `text-zinc-500` for readable text on the dark background (fails 4.5:1); reserve `-500` for decorative-only content (and mark it `aria-hidden`).
- CTA text on `graffiti-500` (yellow) buttons is dark (`text-zinc-800`/`text-zinc-900`) for contrast. Brand yellow is used for `--ring`/`--primary` and focus rings.

### Dialogs / overlays / navigation
- The filter Sheet (`components/ui/Sheet.tsx`) is Radix Dialog: it traps focus, has a `SheetTitle`, and provides the close button. Need at least a Title for a11y.
- The mobile menu (`components/ui/Navbar.tsx`) is custom: `aria-expanded`/`aria-controls` on the toggle, `role="dialog"`+`aria-modal`+`aria-label` on the panel, focus moves to the first link on open and back to the toggle on close, and `Escape` closes it. Preserve this behavior; a bottom `SectionBanner` is `fixed top-16` (below the sticky navbar) so focus cannot be obscured.
- `aria-modal` dialog content must not be focusable behind it.

### VehicleCard (grid cards)
- Layout is a two-column header + square image area, wrapped in a single `<Link>` (whole card is one focusable target). The `<Link>` carries a descriptive `aria-label` (`<brand> <model> <version>, <year>, $<price>`), the image is `alt=""`.
- Header left column MUST be `min-w-0 flex-1` and the title MUST be `truncate`; the right column (`Nuevo`, km, transmission) is `shrink-0 whitespace-nowrap`. This is what keeps all cards equal height and prevents a long title from squeezing the right column.
- The "Nuevo" line is always rendered — `text-primary` when `condition` is true, else `text-transparent` — to reserve stable space and avoid vertical-shift hacks.
- The image area is `relative aspect-square w-full overflow-hidden` with an `absolute inset-0 h-full w-full object-cover` `<img>` so image aspect ratio never changes card height. The skeleton (`components/ui/SkeletonCard.tsx`) mirrors this (`aspect-square` bone) so the loading swap is imperceptible.
- Keep these invariants when editing VehicleCard / SkeletonCard.

### Status / live regions
- Catalog results are wrapped in `aria-live="polite"` so filter/page changes are announced; `Pagination` restores focus to the active page button after a change.
- Loading skeletons use `role="status"` + `aria-busy="true"` + `sr-only` label and are `motion-reduce:animate-none`.

### Verification
- `pnpm typecheck` and `pnpm exec vitest run` (no `pnpm test` script; vitest runs via `pnpm exec`).
- Manual keyboard pass before shipping a11y changes: Tab order, skip link, focus rings, Sheet focus trap, mobile menu open/Esc/return-focus, filter `fieldset` groups announced, and equal-height cards on `/catalogo`.

## Performance / Lighthouse

Build targets are pinned in `package.json` (`browserslist`: `chrome/edge/firefox >= 111`, `safari >= 16.4`). This matches Next.js's own "modern" target and minimizes transpilation of app + dependency code. Keep it in sync if browser support changes.

The **Legacy JavaScript** insight (`Array.prototype.at`, `flat`, `flatMap`, `Object.fromEntries`, `Object.hasOwn`, `String.prototype.trimEnd/trimStart`) is an **accepted framework artifact**, not app code. It comes from `next/dist/build/polyfills/polyfill-module.js`, imported unconditionally by `next/dist/client/app-globals.js`; there is no supported config to remove it (browserslist does not affect it). The audit is **unscored** (Lighthouse weight 0), so do not chase it — do not `pnpm patch` Next to strip the polyfills. Focus performance work on LCP/FCP and image caching instead.

**Render-blocking CSS** (`1j0xbg-fssxoh.css`, the single global Tailwind stylesheet) is an **accepted tradeoff**. `experimental.inlineCss: true` was measured on a production build: it cleared the "Render-blocking requests" insight, but LCP was unchanged (8.2s → 8.2s), total bytes rose slightly (~16.9 KB → 17.4 KB brotli), and the HTML grew 48 KB → 200 KB because the CSS is duplicated ~3× (SSR `<style>` + RSC payload). Kept as an external, separately-cacheable stylesheet. Do not re-enable `inlineCss` without field data showing a first-load win.

### LCP / image loading
- Only the **hero image** (the LCP element) gets `loading="eager"` + `fetchPriority="high"`. In Next.js 16 `priority` is **deprecated** — prefer `loading`/`fetchPriority` (or `preload`). Because every eager `next/image` emits a `<link rel="preload" as="image">`, mark everything below the fold `loading="lazy"` (or omit it): steps, footer logo, about grids, CTA mockups, and `VehicleCard`'s raw `<img>`.
- GA is loaded with `strategy="lazyOnload"` at the end of `<body>` (not preloaded in `<head>`). Loading it eagerly previously competed with the hero image and blocked the main thread.

Measured on `/` (localhost, mobile throttling): eager-image + GA changes took LCP 8.6s → 4.2s, FCP 2.4s → 1.7s, TBT 1150ms → 500ms, perf 0.48 → 0.73. Headroom remains in the ~71 KB framework chunk (unused JS) and the `/_next/image` optimizer round-trip for already-CDN-hosted Cloudinary/ImageKit images.

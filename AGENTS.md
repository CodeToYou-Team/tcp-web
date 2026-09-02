# AGENTS

## Package Manager
- **pnpm** only. Lockfile: `pnpm-lock.yaml`. Never use npm or yarn.

## Commands
- `pnpm dev` — dev server (localhost:3000)
- `pnpm build` — production build
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm test` — Vitest (tests in `lib/__tests__/`)

No ESLint: it was uninstalled due to conflicts with other packages. There is no `pnpm lint` script — do not run it or reinstall ESLint without asking first.

No single-test-file shortcut is configured; run `pnpm test` for all.

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

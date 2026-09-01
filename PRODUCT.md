# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Buyers and sellers in Caracas, Venezuela, in equal weight — a two-sided audience:

- **Buyers:** people looking for a car, browsing inventory online before contacting the sales team.
- **Sellers:** people who want to sell their car and are looking for a team that handles the process.

All content is in Spanish (es-VE). Success on both sides is a WhatsApp conversation that becomes a scheduled appointment with the sales team.

## Product Purpose

Tu Carro Propio (TCP) is a car dealership in Caracas. The site showcases its live inventory (catalog with search, filters, and vehicle detail pages), highlights offers, explains how to sell your car, and introduces the team. It exists to turn browsing and selling intent into direct contact with the sales team via WhatsApp.

## Positioning

Two claims another Caracas dealership could not truthfully copy together:

1. **Hassle-free process** — TCP handles paperwork, transfer, and process end-to-end for both buyers and sellers.
2. **Personal service** — a small team with one-on-one attention from first WhatsApp contact to delivery.

## Operating Context

- WhatsApp is the primary conversion channel for both flows (wa.link deep links).
- Inventory is managed in MongoDB (brands, models, locations) and rendered server-side; images are hosted on Cloudinary.
- The audience operates in Venezuela's car market; prices and availability change frequently, so freshness of listings matters.
- Production domain: www.tucarropropiove.com; traffic measured with Google Analytics.

## Capabilities and Constraints

Confirmed functionality: home (hero, brands, process steps, latest arrivals), catalog with sidebar filters, price range, sorting and pagination, vehicle detail pages with image slider, offers page, sell-your-car steps page, about page.

Explicitly undecided / not confirmed product facts — future work must NOT state these until the user confirms them:

- Showroom visits or a physical lot address/hours.
- Financing availability.
- Trade-in acceptance.
- Warranties, guarantees, or any testimonials/case studies.

## Brand Commitments

- Name: **Tu Carro Propio** (short form TCP).
- Language: Spanish (Venezuela) for all user-facing copy.
- Domain: tucarropropiove.com.

## Evidence on Hand

- Real, structured inventory data (MongoDB collections: brands, models, locations, vehicles).
- Existing Cloudinary image library for vehicles and marketing assets.
- Live production site at www.tucarropropiove.com.

Absences future work must not fabricate: customer testimonials, reviews, awards, sales volume figures, years-in-business claims, financing or warranty terms.

## Product Principles

1. **Two sides, equal care** — buying and selling journeys are both first-class; neither buries the other.
2. **Friction is the enemy** — every step toward contact should feel like the effortless, handled-for-you process TCP sells.
3. **A human answers** — design should funnel toward real conversation (WhatsApp), not impersonal forms.
4. **Claim only what is true** — show real inventory and real process; never invent proof.

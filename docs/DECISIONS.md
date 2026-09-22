# Decisions

## 2026-09-20

- Use one shared Next.js App Router codebase with separate route entries for `/classic` and `/premium`.
- Keep concept content in `src/data/restaurant.ts` so menus, confirmation gaps, and direction-specific brand notes are reusable.
- Use original generated raster images for the two hero directions, with no readable text or invented operational details.
- Redirect `/` to `/classic` so the site has a default entry without adding a third brand route.
- Keep operational details visible as `CLIENT CONFIRMATION REQUIRED` instead of inventing prices, addresses, hours, establishment dates, or order links.

## 2026-09-21

- Use the provided Rollz Instagram screenshots as presentation references for the menu/food visuals, while keeping final photography and logo assets open for client replacement.
- Treat Instagram-listed menu prices and address as sourced presentation content that still needs final client confirmation before launch.
- Place individual burger/food crops directly inside the menu cards and reserve the original promo artwork for a campaign banner/popup, because that reads more like a real restaurant website.
- Wire CTAs to in-page sections until the client confirms an ordering URL, phone number, WhatsApp link, or delivery platform.
- Use a top-page campaign banner instead of a popup because the available poster crop does not look premium enough when enlarged.

## 2026-09-22

- Preserve the supplied food photography as the source of truth while extracting clean transparent product cutouts for menu presentation.
- Give the three priced smashburgers a dedicated product lineup; use the chicken photo as an editorial feature and keep unconfirmed sides text-led.
- Omit unknown public prices and operational details from the page instead of exposing internal confirmation language to customers.
- Use the verified Rollz Instagram profile and a Google Maps search for the known Sage Hill address as the only external actions until ordering details are confirmed.
- Use fixed responsive type sizes at explicit breakpoints so the long Classic headline remains fully visible without viewport-scaled text.
- Close the native mobile details navigation after a link is selected and offset in-page anchors for the sticky header.

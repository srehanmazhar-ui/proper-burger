# Decisions

## 2026-09-20

- Use one shared Next.js App Router codebase with separate route entries for `/classic` and `/premium`.
- Keep concept content in `src/data/restaurant.ts` so menus, confirmation gaps, and direction-specific brand notes are reusable.
- Use original generated raster images for the two hero directions, with no readable text or invented operational details.
- Redirect `/` to `/classic` so the site has a default entry without adding a third brand route.
- Keep operational details visible as `CLIENT CONFIRMATION REQUIRED` instead of inventing prices, addresses, hours, establishment dates, or order links.

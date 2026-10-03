# Proper Burger — Nadia Handover

## Final website

The approved website is the black-and-silver design at `/premium`. The root route sends visitors there automatically. The classic red concept remains available at `/classic` for reference, but search engines are instructed to index only the primary website.

The approved Proper Burger logo is used unchanged in the header and footer.

## Motion and interaction

- Staggered hero entrance and headline line reveals
- Scroll-triggered headings, cards, split sections and process steps
- Gentle parallax on the hero, dessert and storefront photography
- Continuous highlights marquee
- Scroll progress indicator
- Subtle magnetic movement on primary desktop calls to action
- Compact sticky header after scrolling
- Motion automatically disabled for visitors who request reduced motion

## Search setup

- Search-friendly title and description for Sage Hill and Calgary burger searches
- Index/follow enabled for the primary page
- Canonical URL on `/premium`
- Alternate concept excluded from indexing to prevent duplicate content
- Restaurant JSON-LD structured data
- `robots.txt` and `sitemap.xml`
- Semantic heading order, descriptive image text and one H1
- English-Canada document language

Before launch, set `NEXT_PUBLIC_SITE_URL` to the purchased HTTPS domain and rebuild. This updates every domain-dependent SEO value automatically.

## QA completed — October 4, 2026

- Production build and TypeScript checks pass
- Desktop and 390px mobile layouts checked
- No unintended horizontal scrolling
- Mobile menu opens, closes and navigates correctly
- Sticky-header anchor positioning checked
- All 17 website images load successfully
- Header and footer use the same approved logo asset
- Browser console checked with no errors
- Reduced-motion mode checked
- Canonical, robots, structured data and sitemap outputs checked

## Launch commands

```bash
npm install
npm run build
npm run start
```

The hosting platform must support a current Node.js runtime for this Next.js project. If a static-only hosting plan is purchased, convert and verify an exported build before uploading rather than copying the source folder directly.

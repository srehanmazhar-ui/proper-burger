# Proper Burger Website

Final Next.js website for Proper Burger in Sage Hill, Calgary.

- `/premium` — primary black-and-silver website and SEO canonical page.
- `/classic` — retained alternate visual concept; excluded from search indexing to avoid duplicate content.
- `/` — redirects visitors to `/premium`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/premium`.

## Production check

```bash
npm run build
npm run start
```

## Final domain

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS website origin before the production build. Copy `.env.example` to `.env.local` for local testing, or add the value through the selected hosting provider.

The canonical URL, Open Graph URL, restaurant structured data, sitemap and robots file all use this setting automatically.

## Handover

See `HANDOVER.md` for the completed features, QA record and launch checklist.

# Ronixe — Landing Page

A hero-only landing page for **Ronixe**, built with **Next.js (App Router) + TypeScript** and deployed on **Vercel**. The page is intentionally minimal — one hero — while carrying rich SEO metadata and JSON-LD structured data so the domain indexes well in Google Search Console while the main product is built in the background.

## Stack

- Next.js 16 (App Router, Server Components, Turbopack)
- React 19
- TypeScript
- No UI runtime dependencies — styling is hand-written CSS, icons are inline SVG

## Project structure

```
app/
  layout.tsx          Root layout: fonts, Metadata API, viewport, JSON-LD injection
  page.tsx            The hero (navbar, badge, headline, CTAs, feature cards, footer)
  globals.css         All styling (warm-orange bloom on near-black)
  opengraph-image.tsx Generated 1200×630 social card
  sitemap.ts          /sitemap.xml
  robots.ts           /robots.txt
  manifest.ts         /manifest.webmanifest
  icon.svg            App icon (file convention)
  favicon.ico         Favicon (file convention)
lib/
  site.ts             Single source of truth for identity + SEO facts
  jsonld.ts           schema.org @graph (Organization + WebSite + service catalogue)
public/brand/         Logos and app icons
docs/                 Company profile reference
```

## SEO / indexing

All non-hero company detail lives in metadata + structured data, not visible sections:

- Full `Metadata` object (title/description/keywords/OpenGraph/Twitter/robots/icons/canonical)
- `JSON-LD` @graph: `Organization` + `ProfessionalService`, `WebSite`, and the full
  service catalogue via `hasOfferCatalog`
- `sitemap.xml`, `robots.txt`, and a generated OpenGraph image

Validate structured data with the [Rich Results Test](https://search.google.com/test/rich-results).

## Configuration

Set these in the Vercel project (or a local `.env.local`):

- `NEXT_PUBLIC_SITE_URL` — canonical production URL (defaults to `https://ronixe.com`)
- `GOOGLE_SITE_VERIFICATION` — Search Console verification token (adds the meta tag)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy

Push to the connected Git repository and Vercel builds automatically, or run `vercel`.

# Muscle & Strength Pyramids – Website Refresh

This repository contains a conversion-focused redesign of the Muscle & Strength Pyramids marketing site. The project implements
the 2025 product requirements by shipping a modern colour palette, refreshed layouts for the full purchase funnel, lightweight
performance optimisations, and instrumentation hooks for analytics and experimentation.

## Key features

- **Next.js experience** – The marketing funnel now runs on Next.js for production-ready builds, routing, and deployment.
- **Updated visual system** – Global CSS variables define the new brand palette (primary #1D3557, accent #E63946, CTA #F4A261)
  and typography so future updates stay consistent.
- **Optimised funnel pages** – Redesigned Home, Product, FAQ, and Checkout pages emphasise the value proposition, social proof,
  and trust indicators while maintaining responsive layouts.
- **Conversion tooling baked in** – CTA elements expose `data-track` attributes for analytics, a lightweight A/B testing helper
  randomises CTA colour/copy variants, and trust content is positioned close to purchase decisions.
- **Performance-minded** – Assets are served through the Next.js pipeline, imagery is SVG-based or lazy-loaded, and a simple
  service worker precaches core routes for faster repeat visits.

## Directory overview

```
.
├── components/         # Shared UI such as the layout, header, and footer
├── pages/              # Next.js page routes (home, product, FAQ, checkout)
├── public/
│   ├── assets/         # Brand logo and background pattern assets
│   └── scripts/        # Behavioural scripts used across pages
├── styles/             # Theme styles (global CSS)
├── tools/minify.py     # Legacy utility kept for reference
├── next.config.js      # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to explore the redesigned experience.
3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## A/B testing & analytics hooks

- CTA buttons automatically enrol visitors into a two-variant experiment (`body[data-cta-variant]`). Variant B adjusts CTA colour
  and copy; results can be tied back to analytics payloads via the shared `variant` property.
- Interaction events queue to `/analytics` using `navigator.sendBeacon` (with graceful fallback). Connect the endpoint to your
  analytics provider or serverless function to persist the data.

## Next steps

- Replace placeholder testimonial avatars with production-ready imagery delivered via a CDN.
- Wire up the `/analytics` endpoint to your analytics stack (GA4, Segment, RudderStack, etc.).
- Integrate a production-grade A/B testing or feature flag service if additional experiment types are required.

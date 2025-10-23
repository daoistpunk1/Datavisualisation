# Muscle & Strength Pyramids – Website Refresh

This repository contains a conversion-focused redesign of the Muscle & Strength Pyramids marketing site. The project implements the 2025 product requirements by shipping a modern colour palette, refreshed layouts for the full purchase funnel, lightweight performance optimisations, and instrumentation hooks for analytics and experimentation.

## Key features

- **Updated visual system** – Global CSS variables define the new brand palette (primary #1D3557, accent #E63946, CTA #F4A261) and typography so future updates stay consistent.
- **Optimised funnel pages** – Redesigned Home, Product, FAQ, and Checkout pages emphasise the value proposition, social proof, and trust indicators while maintaining responsive layouts.
- **Conversion tooling baked in** – CTA elements expose `data-track` attributes for analytics, a lightweight A/B testing helper randomises CTA colour/copy variants, and trust content is positioned close to purchase decisions.
- **Performance-minded** – Assets are served as minified CSS/JS, imagery is SVG-based or lazy-loaded, and a simple service worker precaches core routes for faster repeat visits.

## Directory overview

```
.
├── assets/             # Brand logo and background pattern assets
├── scripts/            # Behavioural scripts (with minified builds)
├── styles/             # Theme styles (source + minified)
├── tools/minify.py     # Utility used to generate the minified assets
├── index.html          # Home page
├── product.html        # Product / pricing page
├── faq.html            # Frequently asked questions
├── checkout.html       # Checkout flow mock
└── service-worker.js   # Offline caching for the static site
```

## Getting started

1. Use any static web server (e.g. `python3 -m http.server 8000`) to serve the project root.
2. Navigate to `http://localhost:8000` to explore the redesigned experience.
3. To update the minified assets after editing `styles/*.css` or `scripts/*.js`, run:
   ```bash
   python3 tools/minify.py styles/main.css styles/main.min.css --type css
   python3 tools/minify.py scripts/main.js scripts/main.min.js --type js
   python3 tools/minify.py scripts/ab-testing.js scripts/ab-testing.min.js --type js
   python3 tools/minify.py scripts/analytics.js scripts/analytics.min.js --type js
   ```

## A/B testing & analytics hooks

- CTA buttons automatically enrol visitors into a two-variant experiment (`body[data-cta-variant]`). Variant B adjusts CTA colour and copy; results can be tied back to analytics payloads via the shared `variant` property.
- Interaction events queue to `/analytics` using `navigator.sendBeacon` (with graceful fallback). Connect the endpoint to your analytics provider or serverless function to persist the data.

## Next steps

- Replace placeholder testimonial avatars with production-ready imagery delivered via a CDN.
- Wire up the `/analytics` endpoint to your analytics stack (GA4, Segment, RudderStack, etc.).
- Integrate a production-grade A/B testing or feature flag service if additional experiment types are required.

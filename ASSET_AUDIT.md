# Asset audit — 20 October 2026

## Current status

The supplied image archive is present in `public/images/` and contains 30 real PNG files, `IMG_1637.PNG` through `IMG_1666.PNG`. The active site routes use these local assets rather than remote stock-photo URLs.

## Active image mappings

### Homepage (`src/film/Film.jsx` and `src/film/content.ts`)
- Hero construction image: `IMG_1662.PNG`
- About section: `IMG_1643.PNG`
- Project cards: the supplied project images defined in `src/film/content.ts`
- Services, HSE and engineering visuals: local supplied PNGs selected by the `Photo` fallback map

### Inner pages (`src/pages/Pages.jsx`)
- Architecture: `IMG_1645.PNG`
- Tower / built environment: `IMG_1642.PNG`
- Plans: `IMG_1666.PNG`
- Site / construction: `IMG_1662.PNG`
- Completed home: `IMG_1641.PNG`
- Engineer: `IMG_1640.PNG`
- Team: `IMG_1638.PNG`
- Machinery: `IMG_1663.PNG`
- Development: `IMG_1651.PNG`
- Construction team: `IMG_1644.PNG`
- Footer QR image: `IMG_1637.PNG`

### Legacy route module (`src/AppRoutes.jsx`)
This module is not used by the current `src/App.jsx` router, but its image map has also been switched to local supplied PNGs so it no longer points at Unsplash.

## Deferred design archive

The homepage `Designs` section remains intentionally deferred until approved real 3D renders are available. The old `design-*.webp` references are not active image requests.

## Verification

The local production build previously passed with Vite. A browser-level visual check of image-to-subject matching is still recommended; filenames alone do not identify the subject of every supplied photo.

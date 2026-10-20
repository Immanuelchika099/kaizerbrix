# Changelog — KaizerBrix Consults

## Audit first — 20 October 2026
Code-level audit of the existing site before the route migration. A live browser could not be launched from the repository connector at exact 1440×900 and 390×844, so these are implementation findings rather than claims of completed screenshot QA.

- Hero relied on a static composition and simple title arrangement; the visual felt like a styled landing page rather than a directed opening scene.
- Navigation was a persistent white bar with a basic drop-down; no scene slate, page transition, full-screen clip wipe, or robust focus management.
- Reveal patterns repeated fade/translate behavior; scene choreography and cleanup were not consistently isolated.
- Competence navigation did not meaningfully track the active discipline; images were not staged as framed architectural plates.
- Image paths referenced missing local `/images` assets, leaving broken-image risks throughout the site.
- The project was a Vite/React single film, not a Next App Router multi-page site.
- Mobile adaptations existed, but no route-level metadata/sitemap or route transition reduced-motion fallback was present.

## Changes
- Migrated project foundation to Next.js App Router, TypeScript, Tailwind v4/PostCSS, GSAP 3.15 and Lenis.
- Added distinct route handling for Home, About, Services, Projects, three project slugs, 3D Designs, Standards, Contact and a branded not-found view.
- Added shared angular K-mark navigation, orange diagonal route plane, scene slate, top scroll-progress rail, Escape-to-close menu, focus trap, keyboard focus styling and reduced-motion fallback.
- Added per-route metadata, OG SVG, `lang="en-NG"`, ProfessionalService JSON-LD, sitemap and robots.
- Preserved profile copy for services, projects, vision, mission, core values and policies; no testimonials, team, stats, awards or budget claims added.
- Added temporary AI-generated architecture/construction visuals to avoid squeezing in unrelated placeholders. They are staging visuals only, not claims of company project photography.


- Added the two K-portal scroll transitions (Home hero → About, and About title → About copy), a horizontal pinned project film on desktop, pinned service chapters, directional snapping for the About values sequence, a 16-view contact sheet with GSAP Flip expansion, and a tiled film-grain overlay disabled for reduced motion.

## Verification limitations
- Exact viewport screenshot QA, npm install, TypeScript build, production build, Lighthouse and real iOS/Android testing remain to be run in an executable environment.
- AI image links are temporary hosted previews and must be downloaded to local `public/images/` before production.
- The project pages reuse temporary visuals until client photos are supplied. Yenagoa render-to-built continuity is not claimed.

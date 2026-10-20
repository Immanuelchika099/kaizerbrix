# KaizerBrix Consults

Multi-page cinematic website for KaizerBrix Consults. White is the base canvas; orange (#DF481D) is reserved for selected scenes and transitions. Content should remain grounded in the supplied company-profile PDF and `lib/content.ts`.

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production
```bash
npm run build
npm run start
```
Deploy to Vercel with the Next.js framework preset. Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin before launch.

## Routes
Home, About, Services, Projects and three project detail slugs, 3D Designs, Standards, Contact. Sitemap, robots, metadata and a branded not-found view are included.

## Temporary imagery
The current image links are AI-generated preview visuals, not actual KaizerBrix project evidence. Replace them with client-approved local AVIF/WebP assets under `public/images/` and update `lib/content.ts` before launch. See `CONTENT_NEEDED.md`.

## QA
GSAP and Lenis are configured for shared motion/navigation. Reduced-motion users receive simplified transitions. Run a production build and test at 1440×900, 390×844, iOS Safari and a mid-range Android device before launch; Lighthouse and device performance have not yet been verified.

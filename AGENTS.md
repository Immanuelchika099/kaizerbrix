# AI development guide — KaizerBrix Consults

## Project context
- This is a real client website for KaizerBrix Consults, a multidisciplinary construction consultancy in Port Harcourt, Nigeria.
- Stack: React, Vite, JavaScript, CSS, GSAP + ScrollTrigger, and Lenis. Preserve the existing architecture unless a verified technical reason requires changing it.
- Main scroll-film experience: `src/film/Film.jsx`; content and image-path data: `src/film/content.ts`; global styles and design tokens: `src/index.css`.
- Brand: white / paper, charcoal, and the supplied orange (`#DF481D)). Do not introduce purple or green as brand colors.
- `CONTENT_FLAGS.md` records source ambiguities, asset gaps, and required launch checks. Read it before changing content or claiming launch readiness.
- The company profile PDF and supplied logo are the authoritative content and identity references. Do not invent service claims, project details, dates, awards, testimonials, client names, certifications, or statistics.

## Required working method
1. Inspect the relevant files, current git diff, and `CONTENT_FLAGS.md` before changing code.
2. Work on a feature branch. Never push directly to `main` or deploy to production without the user's explicit request.
3. Make cohesive, reviewable changes; preserve existing content and visual identity.
4. Run `npm ci`, `npm run lint`, and `npm run build` where the environment permits. Fix errors introduced by the change and report any pre-existing failures.
5. Test desktop and mobile layouts (at minimum 1440×900 and 390×844), navigation, scroll-triggered animation, touch interaction, keyboard focus, image loading, and reduced-motion behaviour. Do not claim browser testing unless it actually ran.
6. Check every local image URL against a real committed file. Never replace missing client assets with invented or unrelated imagery. If the source PDF is available, crop/export its relevant artwork, optimize it to WebP/AVIF, preserve the source content, and commit the resulting assets under `public/images/`.
7. Keep animations smooth and purposeful. Avoid scroll hijacking, layout shifts, oversized mobile downloads, and effects that make content inaccessible. Respect `prefers-reduced-motion`.
8. Keep the site responsive, accessible, and performant. Use semantic HTML, descriptive alt text, visible focus states, and usable touch targets.
9. Before handoff, summarize files changed, checks run with actual outcomes, remaining blockers, and preview/deployment status. Never claim a build, test, or deployment passed unless the tool output confirms it.

## Useful commands
- `npm ci`
- `npm run lint`
- `npm run build`
- `npm run dev -- --host 0.0.0.0`
- `npm run preview -- --host 0.0.0.0`

## Release gates
Production is not ready until missing source images are resolved, build/lint checks pass (or known exceptions are documented), responsive and reduced-motion behaviour is reviewed, and the Vercel deployment is verified.

# KaizerBrix Consults

A cinematic, responsive website for KaizerBrix Consults, a multidisciplinary construction consultancy based in Port Harcourt, Nigeria. The supplied company profile PDF remains the source of truth for company language, services and listed projects.

## Experience
- Cinematic scroll-led homepage built with GSAP, ScrollTrigger and Lenis, with pinned story sequences and horizontal project storytelling on desktop.
- Dedicated About, Expertise, Projects and Contact pages with full-screen orange route curtains, scroll-triggered editorial reveals, a pinned horizontal project filmstrip on desktop, and a shared responsive navigation/footer.
- Route-specific page titles/descriptions and lazy-loaded route chunks to keep the film homepage from carrying every page at first load.
- Android web-app manifest icons and SPA rewrites for direct loading of all named routes.
- Responsive layouts, editorial typography, reduced-motion support and accessible focus states.
- Warm white, charcoal and restrained company-orange design system.
- External architectural/construction photography is used as temporary illustrative imagery where approved company images are unavailable. These are not represented as real KaizerBrix project photos.
- The 3D design archive is temporarily deferred until genuine render assets are available.

## Stack
React 19 · Vite · React Router DOM · GSAP · ScrollTrigger · Lenis · Framer Motion · Lucide React · CSS

## Development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Content and asset policy
Use `KAIZERBRIX company profile FINAL UPDATE1.pdf` as the content and visual reference. Do not invent projects, statistics, certifications, testimonials or company history. Replace temporary external photography with approved company imagery when supplied.

## Verification and launch checklist
- The About, Expertise, Projects and Contact routes have been added; direct-route production behaviour still needs verification.
- External architectural/construction photos are placeholders only; replace them with approved project photography before presenting them as company work.
- Review Android Chrome layouts, small screens, form-to-email behaviour, reduced-motion mode and all route transitions on-device.
- A GitHub Actions build-check workflow is configured to run `npm ci` and `npm run build` on pushes/PRs to `main`.
- Run responsive browser QA, verify all route refreshes, test the contact email handoff, and check Android Chrome/iOS Safari on real devices.
- Vercel's latest deployment API response hit its free daily deployment limit. Commits after the last successful deployment have not yet been verified live; retry deployment after the limit resets or resolve the plan restriction. Do not consider the final production release verified until a new deployment is READY.

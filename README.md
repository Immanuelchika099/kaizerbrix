# KaizerBrix Consults

A cinematic, responsive website for KaizerBrix Consults, a multidisciplinary construction consultancy based in Port Harcourt, Nigeria. The supplied company profile PDF remains the source of truth for company language, services and listed projects.

## Experience
- Cinematic scroll-led homepage built with GSAP, ScrollTrigger and Lenis, with pinned story sequences and horizontal project storytelling on desktop.
- Dedicated About, Expertise, Projects and Contact pages with animated route transitions and a shared navigation/footer.
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
- Run `npm install`, `npm run build`, responsive browser QA and a production deployment check. These checks must not be considered passed until actually run.

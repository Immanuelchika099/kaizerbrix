# Changelog — KaizerBrix Consults

## 2026-10-20 — Cinematic multi-page implementation
- Preserved the existing React + Vite cinematic homepage rather than rebuilding from scratch or migrating frameworks.
- Extended GSAP/ScrollTrigger choreography beyond the hero: word-by-word About reveal, parallax imagery, pinned Vision/Mission sequence, pinned Expertise discipline transitions, statement typography, Core Values reveals, horizontal project storytelling on desktop, Quality/HSE reveals and Contact mark movement.
- Added shared scroll-triggered reveals for section labels, section headings/content blocks, project cards and image zoom/parallax, respecting the reduced-motion preference through the existing animation matchMedia setup.
- Added external Unsplash architectural/construction image fallbacks for existing missing image paths. These are temporary illustrative references, not actual KaizerBrix project photographs.
- Removed the 3D design archive from the rendered homepage until genuine approved renders are available.
- Kept company content grounded in the supplied PDF; no unverified statistics, testimonials or credentials were added.
- Next.js is not required for the current React/Vite build. Existing React Router DOM can support multi-page routing without migrating frameworks.
- Added dedicated `/about`, `/expertise`, `/projects` and `/contact` routes using the existing React Router DOM dependency, plus restrained Framer Motion route transitions. The homepage is deliberately kept outside the route-transition transform wrapper so its fixed navigation and GSAP pinning remain undisturbed.
- Added responsive shared navigation/footer, mobile menu, service and project layouts, contact details, and a contact enquiry form that prepares a `mailto:` message locally without sending form data to a server.
- Added the supplied KaizerBrix logo to external-page navigation and connected the homepage menu to the new routes.
- Android/mobile styling has been added across external pages; real-device QA is still required.
- Not yet verified: local dependency install, production build, desktop/mobile browser QA, external image availability, or Vercel production deployment. Do not claim full completion until those checks pass.


## 2026-10-20 — Inner-page film direction and release hardening
- Added scroll-triggered reveal choreography and image scale transitions to the About, Expertise, Projects and Contact pages, with an IntersectionObserver fallback and reduced-motion support.
- Reworked the desktop Projects page into a pinned horizontal filmstrip with a scroll-linked orange progress line. At Android/mobile widths, the same projects fall back to a readable vertical list; reduced-motion users also receive the non-pinned layout.
- Added lazy-loaded route chunks, route-specific document titles and meta descriptions, and explicit Vercel SPA rewrites for direct visits and refreshes to the four external routes.
- Added dedicated scalable Android app-icon SVGs, an app manifest, and robots.txt.
- Vercel build logs confirm a prior deployment completed successfully, but later commits are not deployed yet: the Vercel API returned a 402 daily deployment limit. The GitHub Vercel status check reports the same deployment-rate-limit failure. Do not claim the newest changes are live until a subsequent deployment reaches READY.
- Not verified from this environment: physical Android/iOS device QA, fresh install/build, lint, final image requests, or final production deployment.

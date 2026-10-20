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

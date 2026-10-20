# Changelog — KaizerBrix Consults

## 2026-10-20 — Cinematic site implementation
- Preserved the existing React + Vite application and cinematic homepage rather than migrating frameworks or starting over.
- Added dedicated routes for About, Expertise, Projects and Contact, with shared page navigation, footer and restrained page-entry transitions.
- Added responsive editorial layouts and a consistent warm-white, charcoal and company-orange palette.
- Added externally hosted architectural/construction reference photography on the new pages so unavailable company images do not leave broken image frames.
- The Projects page uses project names, locations, status and scope described in the company profile; external photos are explicitly labelled as illustrative and are not represented as actual client project photography.
- Avoided adding invented statistics, testimonials, certifications or claims.
- The 3D design archive is intentionally deferred per instruction until genuine assets are available.
- Assumption: existing React Router DOM is used for page routes. Next.js is not required for this implementation and has not been added.
- Verification note: source changes were committed through GitHub. A local dependency install, production build, browser QA and Vercel deployment must still be run/confirmed before claiming the site is production-verified.

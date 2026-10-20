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


## 2026-10-20 — Navigation, pinning and footer refinement
- Confirmed the external React Router pages are wired at `/about`, `/expertise`, `/projects` and `/contact`; direct refresh still depends on the Vercel SPA rewrite and needs deployment verification.
- Reworked the homepage menu as a full-screen editorial overlay, with a two-column desktop index, a single-column mobile list, Escape-to-close, accessible labels and background-scroll locking.
- Reworked the external-page mobile navigation into a full-screen overlay while retaining inline desktop links.
- Pinned the homepage hero on mobile with a shorter scroll distance, adjusted the hero to the dynamic Android viewport, and added viewport/orientation refresh handling for ScrollTrigger.
- Changed Vision/Mission to mobile-local reveal triggers rather than a long scrub timeline without a pin.
- Removed overflow clipping from the homepage and external-page roots where it could interfere with fixed/pinned ScrollTrigger scenes.
- Re-aligned the homepage contact footer into a stable three-column desktop grid and a two-column mobile layout; refined the external-page footer spacing and wrapping.
- Not yet verified: production build, Android browser testing, route refresh on deployed Vercel, or live visual review. Vercel's daily deployment limit remains a blocker for verifying the newest commit live.


### Cinematic navbar
- Restyled the homepage navigation as a compact floating charcoal-glass capsule with the existing KaizerBrix monogram and a typographic brand lockup.
- Reworked the expanded navigation presentation into an editorial full-screen layout with a radial clip-path entrance, staggered link reveals, orange accents, and a mobile-first single-column layout.
- Preserved the existing anchor destinations and external route links. Live visual QA remains pending because the current Vercel deployment quota has blocked a fresh production preview.

### Hero + navbar transition tuning
- Added a restrained navbar arrival animation so it settles into view after the intro overlay, and tightened the floating bar's brand details.
- Refined the hero image treatment and added a soft directional white overlay so oversized type remains legible while the photography still carries atmosphere.
- Adjusted mobile hero sizing and spacing around dynamic viewport units, short-screen typography, image placement, and safe-area footer controls to reduce awkward pin entry on Android-sized screens.
- Live Android/desktop QA remains outstanding until a fresh Vercel deployment is available; changes are source-side and have not been represented as device-tested.


### Mission and quality policy refinement
- Simplified the mission statement while preserving the source profile's themes: close client collaboration, innovation, quality, functionality, responsible practice and lasting value.
- Reworked the homepage Vision/Mission scene into a more breathable, content-led layout. The mission statement and supporting image now have a clear hierarchy and stack naturally on mobile instead of competing in a cramped two-column composition.
- Redesigned the seven quality-policy commitments as a restrained two-column editorial grid on desktop and a readable single-column list on mobile.
- Replaced commitment number markers with Lucide icons, retaining the original commitment copy and orange brand accent. No emojis are used.
- Source-side changes only; production deployment and real-device visual QA remain pending.


## 2026-10-20 — Layout audit and spacing hardening
- Audited the current repository source and fetched the deployed production HTML and CSS/JS assets. The live bundle still contains the older Mission and Quality Policy layout; it does not yet include the newer source-side mission/icon-grid changes.
- Browser audit limitation: the current execution environment has no DNS/network access for a local Playwright run and exposes no remote browser/screenshot runner. No full-page screenshots, measured DOM overlap report, or zero-overflow claim is made. The viewport-by-viewport audit is recorded in the work notes in this conversation; browser verification remains pending.
- Standardized section gutters, content widths, text wrapping and anchor scroll margins across the cinematic homepage and routed pages.
- Rebuilt the desktop Vision/Mission composition as two clear cinematic beats inside a viewport-sized stage, while preserving natural content flow and stacking on mobile.
- Increased homepage mobile body copy to at least 16px, made the mobile Expertise selector genuinely interactive, and ensured the image panel responds to the selected discipline rather than relying on a desktop-only pinned timeline.
- Reduced crowding on short desktop/laptop heights, improved project and image aspect ratios, strengthened text wrapping for long addresses/emails, and kept horizontal project storytelling desktop-only.
- Added reduced-motion layouts that restore content to normal flow instead of leaving absolute/overlapping animated rows.
- Added consistent mobile copy sizing and section gutters to the external About, Expertise, Projects and Contact routes.
- Changes are source-side. Production browser screenshots, programmatic overlap/overflow measurements and final deployment verification are still outstanding.

- Follow-up safety pass: kept the fixed navigation/menu outside root-level overflow clipping, and explicitly restored normal-flow Vision/Mission and project layouts for reduced-motion users so hidden/absolute content cannot collapse the section.


## 2026-10-20 — Pinned service act and image-source honesty
- Extended the existing cinematic pin system to the title card and the Expertise act on mobile, with shorter mobile pin distances; kept long About, policy and contact copy in natural flow on small screens.
- Reworked service transitions so each outgoing discipline is clipped away before the next panel becomes visible. Expanded the existing service list from five to six using the requested Construction discipline and current project-scope wording; updated the counter to 06.
- Removed generic external stock-photo substitutions. Missing local image assets now render a clearly marked “IMAGE NEEDED” placeholder with the expected filename instead of silently substituting unrelated imagery.
- Existing React + Vite, GSAP/ScrollTrigger and Lenis infrastructure remains in place. This is source-side until the new Vercel deployment and browser checks complete.
- QA limitation: the current environment does not provide a usable browser screenshot/recording runner; do not claim verified 360–1920px Playwright checks or measured 60fps. The production deployment can be checked through Vercel status, but visual/device QA still needs a browser/device pass.

- Added direction-aware navbar behaviour: it recedes while scrolling down, returns when scrolling up, and gains a more solid backdrop after leaving the hero.


## 2026-10-20 — Hero art direction and typography
- Reworked the existing hero in place: architectural photography now carries the full-height right side on desktop and the lower half on mobile, with a warm-paper editorial field for legibility.
- Replaced oversized geometric display lettering with a restrained, classic serif hierarchy and sentence case. Removed the Syncopate web-font import and normalized small navigation/eyebrow labels to the existing body sans-serif.
- Preserved the orange-and-white brand direction, current company wording, existing photo asset path and scroll-led homepage architecture.
- Added a clear “Discover our expertise” in-page action and refined the bottom location/scroll labels.
- The hero image remains an illustrative placeholder until approved KaizerBrix photography is supplied.


## 2026-10-20 — Hero spacing and navigation correction
- Restored the hero heading to the original bold Montserrat-style sans-serif treatment with consistent uppercase lines, controlled line-height, and clear separation to prevent visual collisions.
- Rebalanced desktop and mobile hero spacing and image placement.
- Changed the navbar to a conventional solid white bar with dark text and a solid white dropdown menu, replacing the dark full-screen menu treatment.
- Kept the existing page structure, content, scroll effects, and orange brand accent.


## 2026-10-20 — Temporary photography restored and About scroll film
- Restored visible architectural/construction imagery by falling back to relevant temporary Unsplash photographs whenever the existing local image path is missing. These are explicitly temporary illustrative images until KaizerBrix supplies approved originals; local assets still take priority.
- Extended the desktop About section's pinned scroll sequence so the page holds its composition while the headline words progressively transition from faint grey to full ink, then releases back into normal page flow.
- Kept a non-pinned progressive word reveal on smaller screens to avoid trapping a tall stacked section inside a mobile viewport. Reduced-motion users see readable, fully visible text.
- Source changes are committed; live deployment and visual browser QA remain unverified.


## 2026-10-20 — Cinematic About reveal expanded
- The pinned desktop About sequence now reveals every word in the headline and both supporting paragraphs, not just the heading. Words start faint and progressively transition to full ink as scroll advances; the image reveals during the same pinned sequence.
- Increased supporting-copy size on mobile for more comfortable reading while preserving word-by-word scroll reveal without a sticky pin on small screens.
- Source committed; visual browser QA is still pending.


## 2026-10-20 — About pin, icon consistency and cinematic navigation
- Fixed the actual ScrollTrigger pin condition so the About scene is pinned on mobile as well as desktop; the mobile branch now has a scroll-controlled reveal/movement timeline instead of a normal-flow reveal only.
- Replaced remaining arrow-character controls and link marks in the homepage with Lucide arrow icons.
- Removed the separate text-only lazy-loading screen so the animated KaizerBrix mark is the single branded intro loader.
- Reshaped the floating navbar and its menu button into rounded pills with a restrained translucent glass finish.
- Added a warm architectural hero field, cinematic photo grading, layered gradient lighting and a slim KaizerBrix-orange edge accent while retaining the existing image and content.
- Source committed to main. Live visual QA on phone and desktop is still required; no claim of verified browser behaviour until checked.

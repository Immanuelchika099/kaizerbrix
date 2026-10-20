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


## 2026-10-20 — About pin timing, legible reveal and logo-only preloader
- Corrected the About copy's whitespace split so the heading and both supporting paragraphs render as individually animated words rather than one unbroken span.
- Started the About pin earlier, with a navbar-safe offset (88px desktop / 76px mobile), so the heading does not slide behind the fixed pill navigation before the pinned sequence begins.
- Set revealed About words to the brand's ink colour (#171516) to restore strong contrast.
- Removed the orange curtain/line reveal from the intro sequence. The logo draws, then fades out; the full-screen overlay fades away with it.
- Committed to main. Verify the live pinned start and contrast on a real phone/desktop after deployment.


## About paragraph scroll reveal
- Reworked the existing About descriptive paragraphs to use the portfolio-style pinned reveal: words slide in from the left while sharpening from blur to clear as the visitor scrolls.
- Reuses the current About section and its existing copy; no additional text block or new section was added.
- Added a reduced-motion fallback and tuned the reveal for desktop and mobile.


## 2026-10-20 — Vision and mission cinematic pin
- Rebuilt the vision/mission transition as one shared pinned scroll timeline for desktop and mobile, so the section begins its reveal on arrival and stays part of the continuous film journey.
- Added a smooth blur-to-clear, upward text reveal for the vision statement, then transitions into the mission copy and a clipped image reveal.
- Removed legacy forced transform/opacity overrides that prevented the GSAP motion from displaying correctly, and centered the copy with responsive image sizing to avoid text hugging the top edge.


## 2026-10-20 — External pages typography and shared navigation
- Removed the external routes' separate inline navigation so they use the same floating cinematic navbar and menu as the homepage.
- Kept route navigation (Home, About, Expertise, Projects and Contact) in the shared menu; the homepage-only section index and side rail are hidden on external routes.
- Increased reading sizes and line-height across page introductions, service descriptions, project details, value cards and contact form fields, with mobile-first readable sizing.
- Rebalanced section padding, content gaps and image heights to reduce awkward blank stretches while preserving intentional editorial breathing room.
- Source changes are committed to main; production deployment and real-device visual QA remain pending.


## 2026-10-20 — External-page spacing and readability follow-up
- Tightened excess vertical padding and large minimum heights across About, Expertise, Projects and Contact, especially on mobile, so section transitions feel deliberate rather than stretched.
- Raised supporting copy to comfortable reading sizes and balanced the Vision/Mission, service rows, project gallery and contact form spacing.
- Preserved the shared homepage cinematic navbar and existing route structure; no redesign or placeholder-image replacement was included.
- Source committed to main. Production deployment and browser/device visual QA remain pending.


- Build follow-up: corrected a missing closing brace in the shared Nav component's homepage-only side-rail condition. Vercel's failed build had identified this JSX parse error in src/film/Film.jsx; the fix is committed.
- Deployment verification is currently blocked by Vercel's API deployment limit (HTTP 402: over 100 deployments in the daily window). The live site therefore remains on its last READY deployment until Vercel permits another build.

## 2026-10-20 — About page whitespace correction
- Reduced the Point of View section's top/bottom padding and the oversized margins around its statement.
- Tightened the following vision section's spacing and capped the image height on desktop and mobile so the image is followed by the next content without an excessive blank stretch.
- CSS source committed; live appearance still needs a fresh Vercel deployment and browser verification.

## 2026-10-20 — Contact form finish and animated intro visibility
- Rounded the contact form card and converted the Prepare Enquiry action to a centered pill button.
- The animated KaizerBrix logo intro had not been removed; it was gated to display only once per browser tab session using sessionStorage. Removed that gate so it displays on each fresh homepage load.
- Kept the existing failsafe that reveals the site if the logo animation fails or stalls. The console message in the catch block is diagnostic for an actual GSAP intro failure, not the reason the intro was hidden on repeat visits.
- Source changes committed; a production build and Vercel deployment still need verification.


## 2026-10-20 — About blank-space root-cause fix
- Diagnosis from the About route markup and styles: regions A, B and C were not missing content slots. The statement, vision/mission articles, section heading and principles cards exist in `src/pages/Pages.jsx`; the shared `.kb-motion-ready` CSS put those elements at `opacity: 0` and translated them until an IntersectionObserver callback added `.is-in-view`. A missed/late observer callback therefore left real content occupying layout space but invisible. The 1.8s failsafe was not a reliable default-visibility guarantee.
- A: made the Point of View statement visible at rest, restored full-white 14px label text, and kept `01 — 03` together with a nowrap counter. Mobile statement typography remains 28–40px.
- B: the existing design has one vision image (the plans photo), followed by the existing Vision and Mission copy; no third-image slot or third-image asset is present in the About JSX. Made the image and both articles visible by default and tightened mobile image/section sizing. No missing filename is indicated by the code.
- C: made the heading and mapped `values` data visible by default, removed reliance on scroll reveal for principles, and changed the mobile grid to a single column so the left/top border does not frame an empty multi-screen area. The decorative per-card line stays attached to real content.
- Across the external-page reveal selectors, opacity/translation no longer hides content while waiting for an observer. Existing image transitions remain as enhancement.
- Navbar logo: preserved intrinsic aspect ratio, centered the logo within its link, and applied symmetric inner padding. Asset-level SVG/viewBox inspection was not possible from the text-only repository endpoint, so baked-in transparent margins or font geometry inside the supplied PNG are not confirmed.
- Known stock-photo cleanup item retained as requested: replace the stock photograph of the man drawing/plans if the shirt's third-party “KRA” logo is visible in that image; no photo was swapped in this fix.
- Changed files: `src/pages/Pages.css`, `src/film/Film.css`. Other routes' markup and copy were not changed.
- Verification limitation: the connected GitHub tools allow source inspection and commits, but this environment has no checked-out working tree or available Playwright browser runner. Chromium/WebKit runs at 390×844, 768×1024 and 1440×900, Slow 4G lazy-load checks, before/after screenshots, measured page heights/gaps, and post-scroll opacity/border audits were therefore not run. Do not treat those checks as passed; run them after a preview deployment is available.


## 2026-10-20 — Supabase contact enquiries
- Connected the Contact page form to the Supabase REST Data API instead of opening a prefilled email draft.
- Created `public.kaizerbrix_enquiries` in the available Supabase project `iman-portfolio` (`pqaxmjckirtxnihvxavq`) with name, email, project type, message and created timestamp fields.
- Enabled RLS. Anonymous visitors can insert validated enquiries only; only the authenticated account with email `imanwahmed367@gmail.com` can select or delete saved enquiries through the API.
- The frontend uses the project's publishable key (not a service-role secret), disables repeat submits while saving, resets the form after success, and shows a success or failure message.
- Verified the table exists, RLS is enabled, the expected columns are present, and insert/read/delete policies are installed. A live browser form submission has not yet been run.
- Enquiries can be viewed in the Supabase Table Editor under `public.kaizerbrix_enquiries`. This stores enquiries; it does not by itself send email or push notifications.


## 2026-10-20 — Replace remote stock imagery with supplied KaizerBrix assets
- Replaced the Unsplash image set on the About, Expertise, Projects and Contact pages with the supplied files in `public/images`.
- Replaced homepage image fallbacks with a local mapping to the supplied KaizerBrix team, site-work, residential-building and design-visualisation assets. No remote stock-image URLs remain in the homepage or inner-page image code.
- Added the supplied QR image (`IMG_1637.PNG`) to both the homepage contact footer and shared inner-page footer, preserving a white quiet zone for scanning.
- Updated project-image notes to distinguish on-site photographs from architectural visualisations. The exact destination encoded by the QR image has not been independently verified.
- Images were inspected from the repository and mapped by visual content; responsive rendering and live deployment still require a browser/build check.


## Supplied KaizerBrix image archive — 20 October 2026
- Replaced remote stock-photo references on the About, Expertise, Projects, and Contact pages with the client-supplied image archive under `public/images/`.
- Mapped the homepage hero, company profile, service panels, project gallery, values, and HSE section to supplied construction-site photographs and architectural visualisations.
- Added the supplied QR code (`/images/IMG_1637.PNG`) to the home and external-page footers, labelled “Scan to connect”.
- Kept project-image copy transparent: the archive contains both site photography and architectural visualisations, and individual images are not independently matched to each named project.
- Removed remote-photo fallback behaviour from the homepage photo component; missing local images no longer silently load third-party stock imagery.
- The supplied files use a `.PNG` extension, but several appear to contain JPEG-encoded image data. Verify that Vercel/browser image decoding succeeds after deployment; rename/re-encode if needed.

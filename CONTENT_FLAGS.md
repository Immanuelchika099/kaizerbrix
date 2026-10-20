# CONTENT_FLAGS.md — KaizerBrix Consults

## Source and content assumptions
- The 23-page source is `KAIZERBRIX company profile FINAL UPDATE1.pdf` (uploaded 19 October 2026). Page images are flattened raster artwork; selectable PDF text is not available.
- The profile states both “incorporated ... in 2022” and “Our journey began in 2002”. Neither year is used as a founding-year claim or timeline. Project years shown are the years stated in the supplied copy.
- “Yenegoa” in the PDF is normalised to “Yenagoa”, as instructed.
- The brief corrects “echoes” to “echo” in the interlude line.
- The PDF's page 8 Quality Policy wording is transcribed from the rendered page. “Cutting-edge technology” was softened to “technology” to avoid the prohibited marketing filler while preserving the sentence's meaning.
- HSE policy is transcribed from page 7. Opening sentence is used as the pull-quote; the remaining text is used as supporting copy.
- The two executed duplex projects and one ongoing Bonny Island project use the locations, years, status and scope supplied in the brief. The p20 render and Yenagoa completed project are not treated as the same house unless the client confirms.
- No stats, awards, testimonials, client logos, certifications, team profiles, prices or unsupported claims have been added.
- Contact links use the email, phone and address supplied in the brief. The map link opens a Google Maps query and is not a verified embedded map pin.

## Photo asset status and required approvals
The PDF has been located and inspected locally. Its page artwork is flattened at 2480 × 3508 px (300 dpi), but the binary image files cannot be committed through the currently available GitHub text-file write action. The original source images still need to be extracted/cropped from the supplied PDF and committed under `public/images/`. The homepage currently maps missing image filenames to external Unsplash reference photographs; the external pages also use illustrative photos. These are placeholders only, not verified KaizerBrix project photographs.

- p2: `tower-hardhat-bw.webp` — B&W tower and red hard hat
- p3: `engineer-blueprints.webp` — engineer in white coat with blueprints
- p4: `orange-loader.webp` — orange loader and scaffold crew
- p5: `rebar-crew.webp`, `excavator-site.webp` — rebar/site and excavation details
- p6: `golden-tower.webp` — hero image
- p7: `hse-worker-rebar.webp` — HSE image; source image in the PDF is 810 × 1080 px at roughly 97 dpi, so request the original if it will be enlarged beyond a modest crop
- p9: `aerial-site-plan.webp`
- p10–p17: sixteen 3D renders, referenced as `design-*.webp` in `src/film/content.ts`. Several source renders are approximately 1284 px wide at 157–172 dpi; avoid aggressive full-bleed enlargement and ask the client for originals if needed.
- p19: `project-yenagoa.webp`
- p20: `design-5-bedroom-04.webp` is currently referenced as a render plate only; do not compare/wipe against the Yenagoa photo until the client confirms they show the same property.
- p21: `project-port-harcourt.webp`
- p22: `project-bonny-island.webp`

## Technical checks still required
- Add the extracted/cropped images and confirm all paths above; external reference photos are not a final asset replacement.
- Test the full film at desktop and Android-sized viewports, including 360×800, 390×844 and tablet breakpoints.
- Verify direct refresh and navigation for `/about`, `/expertise`, `/projects` and `/contact` on the Vercel deployment.
- Confirm mobile ScrollTrigger behaviour, focus states, alt text, menu, contact mailto handoff and reduced-motion fallback.
- Run `npm run build`, lint and Lighthouse mobile.
- Verify the final Vercel production deployment. Do not describe the website as production-ready until checks and client asset approvals are complete.


## 20 October 2026 implementation update
- Temporary external Unsplash architectural/construction photographs are mapped in `src/film/Film.jsx` for current missing image paths. They are illustrative stand-ins only, not company/project photography.
- The 3D design archive has been removed from the rendered homepage until approved render assets can be supplied.
- GSAP/ScrollTrigger animations are applied across the existing homepage scenes, including About, Vision/Mission, Expertise, Core Values, Projects, Quality/HSE and Contact—not only the hero. The latest update adds cross-section reveal and image movement choreography.
- Next.js is not required for the current React + Vite app. React Router DOM is already installed and is sufficient for client-side routes; migrate only if server rendering or Next-specific features become a deliberate requirement.
- Added dedicated routes for About, Expertise, Projects and Contact with page transitions, responsive page layouts and a shared navigation/footer.
- Still required before production: run a local build/lint, check all image requests and desktop/Android layouts, test direct route loads and form handoff, and verify deployment.


## Additional film direction and release state — 20 October 2026
- External pages now use reveal choreography; the desktop Projects page pins a horizontal gallery while scrolling. Mobile and reduced-motion modes use a vertical project list.
- Routes are lazy-loaded and update page titles/descriptions; Vercel rewrites support direct route loads.
- Android manifest uses scalable SVG icons. iOS home-screen icon rendering should still be checked on device; SVG Apple touch icon support can vary.
- The latest Vercel deployment status check is failing due to Vercel's daily deployment API limit, not a reported source build failure. Latest commits require a new deployment before production validation.
- Build and lint checks remain unverified in a local environment. The GitHub Actions build workflow is configured, but its result must be checked before release.

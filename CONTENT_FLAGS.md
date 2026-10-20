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

## Required photo assets — not yet committed to the repository
The PDF has been located and inspected locally. Its page artwork is flattened at 2480 × 3508 px (300 dpi), but the binary image files cannot be committed through the currently available GitHub text-file write action. The source now references the filenames below. They must be cropped from the supplied PDF pages, exported to WebP/AVIF, and committed under `public/images/` before production launch. Until then these image URLs will return 404.

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
- Add the extracted/cropped images and confirm all paths above.
- Test the full film at 1440 × 900 and 390 × 844, including iOS Safari/PWA.
- Confirm mobile ScrollTrigger behaviour, focus states, alt text, route rail, menu and reduced-motion fallback.
- Run `npm run build` and Lighthouse mobile after assets are present.
- Verify the final Vercel production deployment. Do not describe the website as production-ready while the image assets are missing.


## 20 October 2026 implementation update
- Temporary external Unsplash architectural/construction photographs are mapped in `src/film/Film.jsx` for current missing image paths. They are illustrative stand-ins only, not company/project photography.
- The 3D design archive has been removed from the rendered homepage until approved render assets can be supplied.
- Next.js is not required for the current React + Vite app. React Router DOM is already installed and is sufficient for client-side routes; migrate only if server rendering or Next-specific features become a deliberate requirement.
- Still required before production: implement and test dedicated routes for About, Expertise, Projects and Contact; run a local build; check every image and mobile viewport; verify deployment.

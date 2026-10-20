# CHANGELOG — KaizerBrix Consults

## 2026-10-20 — cinematic multi-page direction

### Audit notes (static source audit; viewport capture still required)
- The previous experience was a single long Vite page. Navigation used section anchors, so the promised `/about`, `/services`, `/projects`, `/designs`, `/standards` and `/contact` pages did not exist.
- The navbar only exposed a MENU/CLOSE toggle; it had no live scene slate, contact shortcut, scroll-progress rail, keyboard focus trap or route-aware colour theme.
- The current scene code contains repeated fade/clip reveals and several broad selector-driven timelines. Scene ownership and cleanup are too centralized to safely support route transitions.
- The expertise scene renders five panels but hard-codes the active index to the first discipline; the left index and details do not truly follow scroll progress.
- The project and design scenes depend on images referenced under `/images/`, but those files are not in the repository. This creates broken media frames and prevents a truthful visual/performance sign-off.
- Some sections rely on centered copy and uniform reveal patterns; the new direction uses left-aligned editorial composition, angled cuts, framed media and varied scene pacing.
- The current root app is Vite + React, not the required Next.js App Router + TypeScript + Tailwind stack.

### Changes in this branch
- Establish the Next.js App Router foundation and shared route-level visual system without replacing the company content with invented copy.
- Add dedicated routes for home, about, services, projects, individual project records, 3D designs, standards and contact.
- Add a shared navigation/menu, scene slate, scroll progress, transition layer and reduced-motion path.
- Keep project status, location, years, services, values and policies grounded in the existing source content. Do not infer that the Yenagoa render and built project are the same property.
- Add content-needed tracking for missing image exports and unconfirmed client details.

### Verification status
- This GitHub-connected workflow can inspect and change repository files but has not provided an interactive browser to capture 1440×900 or 390×844 screenshots. Therefore, no visual viewport audit is claimed as completed.
- Build, lint, iOS Safari, Android scrolling, Lighthouse and Vercel deployment still need to be run after dependency installation and image recovery. Vercel previously reported a build-rate-limit failure.


## 2026-10-20 — source asset recovery and final motion pass

- Recovered the original profile PDF from the Library without another user upload. Extracted sixteen embedded 3D renders and the source project/site photographs; made a separate WebP asset pack with explicit source-page mapping.
- Added a pre-rendered 256×256 grain tile, PNG iOS/Android icons and a PWA manifest to the asset pack.
- Added the fixed low-opacity grain overlay, reduced-motion fallbacks for K portals, horizontal projects and pinned values, and separate Yenagoa render / built-photo plates until the client confirms a match.
- Last completed CI run passed type-check and production build at `e6c1db9574e8f290d604cbabf2a7714d2fb0f2f5`. GitHub Actions passed type-check and production build on the latest code commit, `2b73146a4b9ba60c83a8c8a737751ed7605b8079` (run: https://github.com/Immanuelchika099/kaizerbrix/actions/runs/39349162055).

### Release gates remain
- Merge `kaizerbrix-assets.zip` into the local repository and commit the binary assets; they cannot be committed through the text-only GitHub file writer.
- Verify 1440×900 and 390×844 screenshots, iOS Safari/PWA, Android scrolling, browser back/forward, focus trapping, anchor/hash navigation and image decode/CLS behavior.
- Run mobile Lighthouse and confirm a Vercel deployment after the earlier build-rate-limit issue is resolved.
- Configure the approved canonical domain in `NEXT_PUBLIC_SITE_URL`. No live viewport screenshots or device tests are claimed complete.

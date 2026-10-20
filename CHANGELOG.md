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

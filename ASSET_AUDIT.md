# Asset audit — 20 October 2026

## Findings
The current repository tree contains no `public/images/` directory. Every image path below is therefore missing from the repository as committed. The current `Photo` component tries a remote Unsplash fallback; if that also fails, the image now disappears instead of rendering the production-facing “IMAGE NEEDED” placeholder.

## Missing image files referenced by the code

### Used by the homepage sections
- `public/images/aerial-site-plan.webp`
- `public/images/architecture-render.webp`
- `public/images/engineer-blueprints.webp`
- `public/images/excavator-site.webp`
- `public/images/golden-tower.webp`
- `public/images/hse-worker-rebar.webp`
- `public/images/orange-loader.webp`
- `public/images/project-bonny-island.webp`
- `public/images/project-port-harcourt.webp`
- `public/images/project-yenagoa.webp`
- `public/images/rebar-crew.webp`
- `public/images/tower-hardhat-bw.webp`

### Design archive references (the Designs component is currently deferred and returns null)
- `public/images/design-5-bedroom-01.webp`
- `public/images/design-5-bedroom-02.webp`
- `public/images/design-clubhouse-01.webp`
- `public/images/design-clubhouse-02.webp`
- `public/images/design-4-bedroom-01.webp`
- `public/images/design-4-bedroom-02.webp`
- `public/images/design-5-bedroom-03.webp`
- `public/images/design-5-bedroom-04.webp`
- `public/images/design-5-bedroom-05.webp`
- `public/images/design-5-bedroom-06.webp`
- `public/images/design-flats-01.webp`
- `public/images/design-flats-02.webp`
- `public/images/design-bungalow-01.webp`
- `public/images/design-bungalow-02.webp`
- `public/images/design-office-01.webp`
- `public/images/design-office-02.webp`

## Verification note
This is a repository-tree audit, not a claim that each remote Unsplash fallback has been tested in a live browser. Browser/Playwright visual verification across the five requested viewport sizes is still pending.

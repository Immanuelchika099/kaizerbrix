# KaizerBrix Consults

A white-led, editorial construction consultancy website built around the supplied company profile. The experience uses restrained orange scene changes, architectural framing, GSAP scroll choreography and separate App Router pages.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

Import `Immanuelchika099/kaizerbrix`, keep the framework preset on **Next.js**, and deploy the branch you intend to publish. The project uses no required environment variables. A contact form is intentionally omitted until an email provider and server credentials are configured; contact actions fall back to `mailto:` and `tel:`.

## Source and content

The company profile and `src/film/content.ts` are the source of truth. See `CHANGELOG.md` for implementation notes and `CONTENT_NEEDED.md` for missing client assets and details. Do not describe the site as production-ready until all source imagery is present and the desktop/mobile checks are completed.


## Profile asset pack

The optimized profile images, design renders, grain tile and PNG app icons are supplied separately in `kaizerbrix-assets.zip`. Extract the ZIP's `public/` folder into the repository root and commit the merged files on the feature branch before final visual testing. See `CONTENT_NEEDED.md` for the remaining client confirmations.

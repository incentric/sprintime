# Sprintime Website

Static Indonesian-language marketing site and blog for Sprintime, built with Astro.

## Prerequisites

- Node.js `18.20.8`, `20.3.0+`, or `22+` (Node.js 22 LTS or newer is recommended)
- npm `9.6.5+` (the lockfile is committed)

## Local development

```bash
git clone https://github.com/incentric/sprintime.git
cd sprintime
npm ci
npm run dev
```

Astro prints the local URL in the terminal, normally `http://localhost:4321`.

## Quality check and production build

```bash
npm run check
npm run build
npm run preview
```

The static production output is written to `dist/`. The build also creates the files required by the configured managed static hosting runtime.

## Project structure

- `index.html` — original landing-page markup, still used by the `/` route
- `styles.css` and `script.js` — original landing-page styles and interactions
- `src/pages/` — Astro routes for the homepage and blog
- `src/components/` — shared blog header and footer
- `src/layouts/` — shared Astro page layout
- `src/data/posts.ts` — temporary in-repository blog content source
- `src/styles/` — blog styles
- `public/assets/` — static images, logos, and icons
- `scripts/` — build compatibility and hosting preparation scripts
- `.openai/hosting.json` — managed hosting project configuration; contains no secret

New pages should be built in `src/`. Put new static assets in `public/assets/` and reference them from the root URL, for example `/assets/example.png`.

## Configuration

The current site has no required environment variables, API keys, database, or backend service. Do not commit secrets if integrations are added later; document variable names in an `.env.example` file instead.

## Deployment and ownership

See [HANDOVER.md](./HANDOVER.md) for the verified deployment status, access-transfer checklist, current branch state, known limitations, and takeover procedure.

# Sprintime Website — IT Handover

Prepared: 2 August 2026

## 1. Project summary

Sprintime is a static Indonesian-language marketing website and blog. It is built with Astro 5 and TypeScript, with npm as the package manager. There is no backend, database, authentication, or required environment configuration at handover time.

Repository: https://github.com/incentric/sprintime

## 2. Source-control status

- Default and production branch: `master` (there is no `main` branch)
- `master` is the single long-lived branch and source of truth.
- Approved landing-page, blog, article-copy, and handover-documentation changes are consolidated into `master`.

Recommended maintenance workflow:

1. Pull the latest `master` before starting work.
2. For future changes, create a short-lived feature branch when review is required.
3. Run the checks listed below and review the deployment preview.
4. Merge approved work into `master` and delete the temporary feature branch.
5. Deploy production from `master`.

## 3. Run and verify locally

Prerequisites:

- Node.js `18.20.8`, `20.3.0+`, or `22+`; use an active LTS release where possible
- npm `9.6.5+`

Commands:

```bash
git clone https://github.com/incentric/sprintime.git
cd sprintime
npm ci
npm run dev
```

Before deployment:

```bash
npm run check
npm run build
npm run preview
```

Verified on 2 August 2026:

- `npm run check`: passed with 0 errors, 0 warnings, and 0 hints across 12 files
- `npm run build`: passed and generated 9 static pages in `dist/`
- Validation environment: Node.js `25.2.1`, npm `11.6.2`

## 4. Deployment

Two public endpoints currently respond successfully:

- Vercel: https://sprintime.vercel.app/ — referenced as the canonical site in `index.html`; `/blog/` responds successfully
- GitHub Pages: https://incentric.github.io/sprintime/ — currently serves an older build, returns 404 for `/blog/`, and is used by some social-image metadata

The repository does not contain `vercel.json` or a GitHub Actions workflow, so the account-side deployment settings cannot be fully reconstructed from source alone. During access transfer, confirm:

- which endpoint is the official production site;
- which repository branch each platform deploys;
- whether automatic deploy-on-push is enabled;
- the Vercel project owner/team and who has administrator access;
- the GitHub Pages source branch/folder in repository settings;
- whether a custom domain is planned or already managed elsewhere;
- whether outdated GitHub Pages hosting should remain active.

Expected build settings for a static host:

- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

After deciding on the official URL, update the canonical URL and all Open Graph/Twitter image URLs in `index.html` so they consistently use that production domain.

## 5. Architecture and content

- `/` is an Astro route that reads and serves the original root `index.html` markup.
- `/blog/` and `/blog/[slug]/` are native Astro pages using shared components.
- Blog posts are stored as typed data in `src/data/posts.ts`; there is no CMS.
- Images and other public files are in `public/assets/`.
- The site is pre-rendered as static HTML.
- `scripts/rollup-wasm-fallback.cjs` keeps builds working on managed Windows machines that block native Node add-ons.
- `scripts/prepare-sites-build.mjs` adds managed-static-hosting files to `dist/` after Astro builds.

## 6. Current status

Completed:

- Responsive marketing landing page
- Pricing and product-preview sections
- Shared blog navigation and footer
- Blog listing page
- Seven generated article pages
- SEO/social metadata on the landing page
- Static production build

Known limitations / follow-up work:

- The newsletter form is UI-only (`action="#"`); submissions are not stored or sent.
- The homepage is still maintained as a large legacy `index.html` instead of Astro components.
- Hosting is duplicated between Vercel and GitHub Pages, and the two endpoints are not on the same build.
- Canonical and social metadata mix Vercel and GitHub Pages URLs.
- Blog content lives in source code; publishing requires a code change and deployment.
- No automated browser/end-to-end test suite is configured.

## 7. Access-transfer checklist

Transfer access through company-managed accounts and an approved password manager. Do not place passwords, access tokens, recovery codes, or private keys in this repository or document.

- [ ] Add the senior IT owner to the GitHub repository with the required role.
- [ ] Prefer moving the repository into the company GitHub organization if that is company policy.
- [ ] Transfer or grant administrator access to the Vercel project/team.
- [ ] Confirm GitHub Pages administration access.
- [ ] Transfer domain registrar and DNS access, if a custom domain exists.
- [ ] Transfer analytics/search-console/tag-manager access, if used.
- [ ] Record billing ownership and renewal contacts for paid services.
- [ ] Confirm that at least two company-controlled administrators have access.
- [ ] Remove personal access only after the new owner has completed a successful deployment.

## 8. Acceptance test after transfer

The new owner should:

1. Clone the repository using their own account.
2. Install with `npm ci`.
3. pass `npm run check` and `npm run build`.
4. Open `/`, `/blog/`, and at least one `/blog/[slug]/` page locally.
5. Verify desktop and mobile navigation, images, pricing links, Instagram links, and article routes.
6. Make a harmless text change on a test branch and confirm a preview deployment.
7. Merge or deploy through the agreed production branch and confirm the public URL.
8. Roll back the harmless change, proving that the recovery path is understood.

Handover is complete when the senior IT owner can clone, build, preview, deploy, and roll back the site without access from the previous owner.

# Nivavale

A production-ready corporate website for **Nivavale**, a quantitative intelligence and technology
firm. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4, exported as a fully static
site and deployed to Cloudflare Pages.

---

## Tech stack

- **Next.js 15** (App Router, static export)
- **TypeScript** (strict)
- **React 19**
- **Tailwind CSS v4** (CSS-first theming via `@theme`)
- No UI/icon/animation libraries — all custom, to keep the bundle minimal.

## Project structure

```
app/                  # Routes, layout, metadata, fonts
  layout.tsx          # Root layout, fonts, metadata defaults, skip link
  page.tsx            # Home
  about/  research/  analytics/  technology/  education/  contact/
  not-found.tsx       # 404
  icon.svg            # favicon
public/
  robots.txt          # robots.txt
  sitemap.xml         # sitemap.xml
  og-image.png        # Open Graph social card image
components/
  layout/             # Header, Footer, Container
  ui/                 # Button, Card, SectionHeading, Tag, Icon
  data-viz/           # Decorative SVG visuals (dot grid, line/bar patterns)
  home/               # Homepage sections
  contact/            # ContactForm
lib/
  site.ts             # Site config (name, nav, metadata, placeholders)
  content.ts          # All page copy (capabilities, research areas, etc.)
```

## Getting started

Requirements: **Node.js 18.18+** (Node 20 LTS recommended).

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
```

## Scripts

| Command               | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| `npm run dev`         | Run the local dev server                       |
| `npm run build`       | Type-check and produce a static site in `out/` |
| `npm run typecheck`   | Run TypeScript type checking only              |
| `npm run preview`     | Serve the built `out/` folder locally          |

## Environment variables

Copy the example file and fill in real values:

```bash
copy .env.example .env.local   # Windows
cp .env.example .env.local     # macOS / Linux
```

| Variable                     | Purpose                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | POST endpoint for the contact form (Formspree, Basin, or your own API/Worker). Optional.        |

**Never commit `.env.local` or real secrets.** `.env.local` and all real env files are gitignored.
`NEXT_PUBLIC_*` values are inlined at build time, so only put public endpoints here — never API
keys or secrets.

## Contact form

The contact form (`components/contact/ContactForm.tsx`) is frontend-only by design:

- It validates input client-side and is fully accessible.
- If `NEXT_PUBLIC_CONTACT_ENDPOINT` is **unset**, it does **not** pretend to send — it shows a
  clear "not connected" notice.
- To connect a service later, set `NEXT_PUBLIC_CONTACT_ENDPOINT` to its endpoint and rebuild.

## Content & placeholders

Copy lives in `lib/content.ts`. Site-wide values (name, tagline, domain, email, nav) live in
`lib/site.ts`. Two values are intentionally placeholders — replace them before launch:

- `site.url` → your real production domain (used for canonical URLs, sitemap, and Open Graph).
- `site.email` → your real contact email. While `null`, email links are hidden automatically.

No statistics, returns, clients, testimonials, employees, or other claims are fabricated anywhere
in the site.

## Deploying to GitHub Pages

This repository is published to GitHub Pages as a **user site**
(`https://kiplangatderrick21-creator.github.io/`), so it is served from the domain root — no
`basePath` is required.

GitHub Pages cannot run a Next.js dev/build process. A repository with no root `index.html` is
rendered by Jekyll as documentation instead, which is why the raw source showed the `README.md`
rather than the site. The site is therefore built by GitHub Actions and the generated `out/` folder
is what gets published:

- `.github/workflows/deploy-pages.yml` — installs dependencies, runs `npm run build`, and publishes
  `out/` with `actions/deploy-pages`.
- `public/.nojekyll` — disables Jekyll processing. Without it, GitHub Pages strips every file and
  folder whose name starts with `_`, which includes Next.js's `_next/` asset directory, leaving the
  site without its CSS or JavaScript.

**One-time repository setting:** Settings → Pages → **Build and deployment** → **Source: GitHub
Actions**. While the source is set to “Deploy from a branch”, GitHub Pages keeps serving the
repository source (the rendered `README.md`) instead of the built site.

After that, every push to `main` rebuilds and redeploys automatically, and the workflow can also be
run manually from the **Actions** tab (`workflow_dispatch`).

To connect the contact form in CI, add a repository **variable** (Settings → Secrets and variables →
Actions → **Variables** → New repository variable) named `NEXT_PUBLIC_CONTACT_ENDPOINT`; the workflow
passes it to the build. When it is unset, the form shows its “not connected” notice.

## Deploying to Cloudflare Pages

1. **Push to GitHub** — commit and push this repository.
2. **Create a project** in the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages**.
3. **Connect your GitHub repo** and select it.
4. **Configure the build:**
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
5. **Deploy** — Cloudflare will install dependencies, run the build, and publish the site.
6. **Attach a custom domain** from the project's **Custom domains** tab, then update `site.url`
   in `lib/site.ts` and redeploy.

> Because the site is a static export, there is no server runtime to manage and no recurring
> compute cost on Cloudflare's free plan.

## Local build verification

```bash
npm run typecheck   # no type errors
npm run build       # succeeds, emits static site in out/
```

After building, `out/` will contain `index.html`, `about/index.html`, `robots.txt`,
`sitemap.xml`, and the generated static assets.

## Things to verify manually

- **Visual polish** — run `npm run dev` and review each page at desktop, tablet, and mobile widths.
- **Keyboard navigation** — tab through the header, buttons, and form; confirm visible focus
  rings and that the mobile menu opens/closes with Enter, Space, and Escape.
- **Reduced motion** — enable "reduce motion" in your OS and confirm entrance animations are
  suppressed.
- **Contact form** — without `NEXT_PUBLIC_CONTACT_ENDPOINT`, submitting shows the "not connected"
  notice; with it set, a real POST is made to your service.

# Theatre group website

A simple, multilingual (French 🇫🇷 / Greek 🇬🇷) one-page site for a theatrical
company, built with [Astro](https://docs.astro.build/) and deployed to GitHub
Pages.

## Quick start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
npm run check    # type-check content and components
just upload-dev  # Upload preview version
```

URL : https://perso.cognitive-ml.fr/nhamilakis/99H71aha7hn48UPiFYp6KF22A83PCKP62mH1893Gwp93xXg1667T19QAr9AV93f5/el/

> Node and npm are required to run the dev server and build. ES modules and
> Astro components don't run directly from `file://` — use `npm run dev`.

## Editing the text

Open `src/data/fr.ts` or `src/data/el.ts`. Each section is a plain object.
Long text is written as a list of paragraphs — one string per paragraph:

```ts
company: {
  title: "La compagnie",
  body: [
    "Premier paragraphe…",
    "Deuxième paragraphe…",
  ],
},
```

Placeholder text is marked `[À REMPLACER]` (French) and
`[ΠΡΟΣ ΑΝΤΙΚΑΤΑΣΤΑΣΗ]` (Greek). Search for those to find everything left to do.

## Deployment

The three targets are **hard-coded** in `astro.config.mjs` (each with its own
`site` and `base`). Pick one with the `DEPLOY_TARGET` environment variable;
it defaults to `local`. Edit the two placeholders in that file first — your
real domain (`github` target) and your preview host + deploy key (`preview`).

| `DEPLOY_TARGET` | `site`              | `base`              | Build command         |
| --------------- | ------------------- | ------------------- | --------------------- |
| `local` (default) | `localhost:4321`  | `/`                 | `npm run dev`         |
| `github`        | your custom domain  | `/`                 | `npm run build:github`  |
| `preview`       | your preview host   | `/<deploy-key>/`    | `npm run build:preview` |

1. **Local dev / preview** — nothing to set:

   ```bash
   npm run dev
   npm run build && npm run preview
   ```

2. **GitHub Pages on a custom domain:**
   - In `astro.config.mjs`, set the `github` target's `site` to your domain.
   - Add a `public/CNAME` file containing just your domain (GitHub serves it).
   - **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   - Push to `main`; `.github/workflows/deploy.yml` builds with
     `DEPLOY_TARGET=github` and deploys.

3. **Private preview in a sub-folder** behind a long deploy key:
   - In `astro.config.mjs`, set the `preview` target's `site` and `base`
     (the `base` is your deploy key).
   - Build with `npm run build:preview`, then upload `dist/`.

   The whole site then lives under `/<deploy-key>/`. All internal links use
   Astro's base-aware helpers, so they resolve correctly wherever it's mounted.

## Project structure

```
src/
├── data/            # all editable text (fr.ts, el.ts) + its type
├── assets/shows/    # poster images (optimized by Astro at build)
├── i18n/            # list of locales and display names
├── layouts/         # the HTML shell (BaseLayout.astro)
├── components/      # header, footer, language switcher, YouTube embed
│   └── sections/    # one component per page section
├── pages/[lang]/    # the single page template, rendered per locale
└── styles/          # design tokens, reset, typography, shared layout
```

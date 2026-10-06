// @ts-check
import { defineConfig } from "astro/config";

// -----------------------------------------------------------------------------
// Deployment targets.
//
// Each target hard-codes its `site` (absolute URL) and `base` (sub-path).
// Pick one at build time with the DEPLOY_TARGET environment variable:
//
//   npm run dev                          -> "local"  (default)
//   DEPLOY_TARGET=github  npm run build  -> custom domain, served from "/"
//   DEPLOY_TARGET=preview npm run build  -> private sub-folder behind a key
//
// Edit the two placeholders below (the domain and the preview deploy key).
// -----------------------------------------------------------------------------

/** @type {Record<string, { site: string; base: string }>} */
const TARGETS = {
  // 1. Local dev and local `npm run preview`.
  local: {
    site: "http://localhost:4321",
    base: "/",
  },

  // 2. GitHub Pages on a custom domain (served from the root).
  //    TODO: replace with your real domain.
  github: {
    site: "https://REPLACE-WITH-YOUR-DOMAIN.org",
    base: "/",
  },

  // 3. Private preview served from a sub-folder guarded by a long deploy key.
  //    TODO: replace both the preview host and the deploy key.
  preview: {
    site: "https://perso.cognitive-ml.fr",
    base: "/nhamilakis/99H71aha7hn48UPiFYp6KF22A83PCKP62mH1893Gwp93xXg1667T19QAr9AV93f5",
  },
};

const targetName = process.env.DEPLOY_TARGET || "local";
const target = TARGETS[targetName];

if (!target) {
  const known = Object.keys(TARGETS).join(", ");
  throw new Error(
    `Unknown DEPLOY_TARGET "${targetName}". Use one of: ${known}.`,
  );
}

export default defineConfig({
  site: target.site,
  base: target.base,

  // Both languages are first-class: URLs are /fr/ and /el/ (under `base`).
  // The bare base path is redirected to the default locale below.
  i18n: {
    locales: ["fr", "el"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  // `base` is applied automatically to the redirect source and target.
  redirects: {
    "/": "/fr/",
  },
});

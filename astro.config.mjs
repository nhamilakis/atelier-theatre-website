// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages configuration.
// - For a PROJECT site (https://<user>.github.io/<repo>): set `site` to
//   "https://<user>.github.io" and `BASE_PATH` to "/<repo>".
// - For a USER/ORG site (https://<user>.github.io): set `site` accordingly
//   and set `BASE_PATH` to "/".
// Update these two values before the first deploy.
const BASE_PATH = "/REPO-NAME";

// Apply the base path only for production builds, so the local dev server stays
// at the root ("/fr/", "/el/") instead of "/REPO-NAME/fr/". Internal links use
// Astro's base-aware helpers, so they resolve correctly in both cases.
// Tip: `npm run preview` serves the production build *with* the base, so use it
// for a final check that matches the live GitHub Pages URL.
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://USERNAME.github.io",
  base: isProduction ? BASE_PATH : "/",

  // Both languages are first-class: URLs are /fr/ and /el/.
  // The bare "/" is redirected to the default locale below.
  i18n: {
    locales: ["fr", "el"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  // `base` is applied automatically to the redirect target.
  redirects: {
    "/": "/fr/",
  },
});

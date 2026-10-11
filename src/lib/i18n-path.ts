// Multi-page i18n helper.
//
// With a page per section, the language switcher and the <link rel="alternate">
// tags must point at the SAME page in the other locale — not just the locale
// root. This computes the "sub-path": the part of the URL after `base` and the
// current locale segment.
//
//   base "/",                pathname "/el/shows"            -> "shows"
//   base "/",                pathname "/el"                  -> ""
//   base "/key/",            pathname "/key/fr/shows/godot"  -> "shows/godot"
//
// Pure string work (no `astro:*` imports) so it can live in a plain .ts module;
// components combine it with getRelativeLocaleUrl(loc, subpath).

import { LOCALES } from "../i18n/config";

export function currentSubpath(pathname: string, base: string): string {
  let path = pathname;
  if (base && base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const parts = path.split("/").filter(Boolean);
  if (parts.length > 0 && (LOCALES as readonly string[]).includes(parts[0])) {
    parts.shift();
  }
  return parts.join("/");
}

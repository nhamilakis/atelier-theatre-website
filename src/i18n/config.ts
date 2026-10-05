// Central list of supported locales and their display names.
// Keep this in sync with `i18n.locales` in astro.config.mjs.

export const LOCALES = ["fr", "el"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

// Shown in the language switcher — each language names itself in its own script.
export const LOCALE_NAMES: Record<Locale, string> = {
  fr: "Français",
  el: "Ελληνικά",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

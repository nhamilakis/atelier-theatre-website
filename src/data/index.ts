import type { Locale } from "../i18n/config";
import type { SiteContent } from "./types";
import { fr } from "./fr";
import { el } from "./el";

// Lookup table used by the page to pick content for the current language.
export const content: Record<Locale, SiteContent> = { fr, el };

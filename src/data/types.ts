// Shape of the site content for a single language.
//
// Both language files (fr.ts, el.ts) must satisfy `SiteContent`, so if a
// section is missing or mistyped in one language the build will fail loudly
// instead of silently shipping an empty page.
//
// Prose fields (body, intro, show descriptions) are **Markdown** strings:
// a single multi-line string. Use a blank line for a new paragraph, plus
// **bold**, *italics*, > blockquotes, lists and [links](…). Short labels
// (title, nav, meta.description) stay plain strings.

import type { ImageMetadata } from "astro";

// A string that is interpreted as Markdown (rendered via src/lib/markdown.ts).
// This is a documentation alias: structurally it is still `string`, so it marks
// intent in signatures and editor tooltips without requiring casts in the data.
export type Markdown = string;

export interface SectionText {
  title: string;
  body: Markdown;
}

export interface Member {
  name: string;
  role: string;
  bio?: string;
}

export interface Link {
  label: string;
  href: string;
}

// --- Shows / productions -----------------------------------------------------

// A single "general info" line, e.g. { label: "Έτος", value: "2022" }.
export interface ShowDetail {
  label: string;
  value: string;
}

// One entry in the optional cast/crew list, e.g. a character and the actor,
// or a function ("Σκηνοθεσία") and the person.
export interface ShowCreditItem {
  role: string;
  name: string;
}

export interface ShowCredits {
  label: string;
  roles: ShowCreditItem[];
}

// An image used in a gallery or as a poster: an imported asset + alt text.
export interface Figure {
  image: ImageMetadata;
  alt: string;
}

export interface Show {
  title: string;
  // Blank line = new paragraph; **bold**, *italics*, > blockquote, lists and
  // [links](…) all work. Leading indentation of each line is stripped before
  // rendering, so you can indent the template literal freely in the data file.
  description: Markdown;
  // Optional poster (an imported asset — see the data file for how to import).
  poster?: Figure;
  // Optional general info (year, author, venue…), shown as a definition list.
  details?: ShowDetail[];
  // Optional YouTube video id (the part after `v=`), shown as an embed.
  videoId?: string;
  // Optional leaflet / programme: a URL to a PDF. Import it at the top of the
  // data file (`import x from "../assets/.../leaflet.pdf"`) so the path is
  // correct for every deploy target, then set `leaflet: x`.
  leaflet?: string;
  // Optional photo gallery: imported images shown as thumbnails that open in a
  // pop-up (lightbox).
  gallery?: Figure[];
  // Optional cast / crew, shown in a collapsible list.
  credits?: ShowCredits[];
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    company: string;
    shows: string;
    director: string;
    members: string;
    community: string;
    contact: string;
  };
  hero: {
    header_title: string;
    title: string;
    tagline: string;
  };
  company: SectionText;
  shows: {
    title: string;
    // Lead-in text shown above the list of productions.
    intro?: Markdown;
    // Labels for the per-show actions (localized). Fallbacks exist in the
    // component, but set these so both languages read naturally.
    leafletLabel?: string; // e.g. "Φυλλάδιο" / "Dépliant"
    galleryLabel?: string; // e.g. "Φωτογραφίες" / "Galerie"
    creditsLabel?: string; // e.g. "Διανομή" / "Distribution"
    items: Show[];
  };
  director: {
    title: string;
    name: string;
    body: Markdown;
  };
  members: {
    title: string;
    intro?: Markdown;
    people: Member[];
  };
  community: SectionText & {
    link?: Link;
  };
  contact: {
    title: string;
    body: Markdown;
    email?: string;
    socials?: Link[];
  };
}

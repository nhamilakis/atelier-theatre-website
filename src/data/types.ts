// Shape of the site content for a single language.
//
// Both language files (fr.ts, el.ts) must satisfy `SiteContent`, so if a
// section is missing or mistyped in one language the build will fail loudly
// instead of silently shipping an empty page.
//
// Long text is stored as an array of strings: one entry per paragraph.

import type { ImageMetadata } from "astro";

export interface SectionText {
  title: string;
  body: string[];
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
export interface ShowCredit {
  role: string;
  name: string;
}

// An image used in a gallery or as a poster: an imported asset + alt text.
export interface Figure {
  image: ImageMetadata;
  alt: string;
}

export interface Show {
  title: string;
  // Small description, one string per paragraph.
  description: string[];
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
  credits?: ShowCredit[];
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
    // Lead-in paragraphs shown above the list of productions.
    intro?: string[];
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
    body: string[];
  };
  members: {
    title: string;
    intro?: string;
    people: Member[];
  };
  community: SectionText & {
    link?: Link;
  };
  contact: {
    title: string;
    body: string[];
    email?: string;
    socials?: Link[];
  };
}

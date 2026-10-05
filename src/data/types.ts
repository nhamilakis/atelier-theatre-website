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

export interface Show {
  title: string;
  // Small description, one string per paragraph.
  description: string[];
  // Optional poster. `image` is an imported asset (see the data file for how to
  // import one); `alt` describes it for screen readers.
  poster?: {
    image: ImageMetadata;
    alt: string;
  };
  // Optional general info (year, author, venue…), shown as a definition list.
  details?: ShowDetail[];
  // Optional cast / crew.
  credits?: ShowCredit[];
  // Optional YouTube video id (the part after `v=`), shown as an embed.
  videoId?: string;
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
    // Heading above a show's cast/crew list, e.g. "Διανομή" / "Distribution".
    creditsLabel?: string;
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

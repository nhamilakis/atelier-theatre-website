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

// A social link with an optional brand icon shown next to the label.
export interface Social {
  label: string;
  href: string;
  icon?: "facebook" | "instagram";
}

// --- Home page ---------------------------------------------------------------

// News posts are a content collection (src/content/news/*.md), not data here.

// One external article / press mention on the home page.
export interface ArticleLink {
  label: string;
  href: string;
  source?: string;
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

// One video for a show: a YouTube id plus an optional caption/label.
export interface ShowVideo {
  // Optional label shown above the embed, e.g. "Τρέιλερ" / "Ολόκληρη παράσταση".
  label?: string;
  // YouTube video id (the part after `v=`).
  videoId: string;
}

export interface Show {
  // URL slug for this production's own page (/[lang]/shows/<slug>). Use the SAME
  // slug across el.ts and fr.ts for a given production, so switching language
  // stays on the same show. Latin, lowercase, hyphenated.
  slug: string;
  title: string;
  subtitle: string;
  // Blank line = new paragraph; **bold**, *italics*, > blockquote, lists and
  // [links](…) all work. Leading indentation of each line is stripped before
  // rendering, so you can indent the template literal freely in the data file.
  description: Markdown;
  // Optional poster (an imported asset — see the data file for how to import).
  poster?: Figure;
  // Optional image for this show's card in the shows gallery. Falls back to
  // `poster` when unset — set it only to show a different picture on the card.
  cardImage?: Figure;
  // Optional general info (year, author, venue…), shown as a definition list.
  details?: ShowDetail[];
  // Optional videos (trailer, teaser, full recording…), shown as embeds, each
  // with an optional label above it.
  videos?: ShowVideo[];
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

// One current member: a name plus an optional round portrait (placeholder shown
// when absent).
export interface TeamMember {
  name: string;
  photo?: Figure;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    shows: string;
    team: string;
    community: string;
    contact: string;
  };
  hero: {
    header_title: string;
    title: string;
    tagline: string;
    footer_title: string;
  };
  company: SectionText;
  home: {
    // Heading for the "who we are" block (its text reuses `company.body`).
    aboutTitle: string;
    // Heading for the News block; the posts come from the `news` content
    // collection (src/content/news/*.md), filtered by language.
    newsTitle: string;
    // Heading for the "latest show" block; the show itself is the first entry
    // in `shows.items`.
    latestShowTitle: string;
    // Background image behind the group name on the home hero. Import it at the
    // top of the data file and assign the import here.
    banner: ImageMetadata;
    articles: {
      title: string;
      intro?: Markdown;
      items: ArticleLink[];
    };
    // Crowdfunding: omit it to keep it hidden; the home page shows it only when
    // present (not public yet).
    crowdfunding?: {
      title: string;
      body: Markdown;
      link?: Link;
    };
  };
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
  team: {
    // Page heading, shown over the whole-team photo.
    title: string;
    // Whole-troupe photo (optional). Import it in the data file like a poster
    // and set { image, alt }; without it the banner falls back to a plain band.
    photo?: Figure;
    // Director & teacher: their name, an optional portrait and a short bio.
    director: {
      title: string;
      name: string;
      // Optional portrait. Import it in the data file and set { image, alt };
      // without it a placeholder is shown.
      photo?: Figure;
      body: Markdown;
    };
    // Current members for the season. Each has a name and an optional portrait;
    // `year` labels the season.
    members: {
      title: string;
      year?: string;
      names: TeamMember[];
    };
    // Former members (just names — no portraits).
    alumni: {
      title: string;
      names: string[];
    };
  };
  community: SectionText & {
    link?: Link;
    // Photos spread through the community page (the house, rehearsals, backstage…).
    images?: Figure[];
  };
  contact: {
    title: string;
    body: Markdown;
    email?: string;
    // Postal address; also used as the map location when `mapEmbedSrc` is unset.
    address?: string;
    // Optional exact map embed (a Google Maps "Embed a map" src URL). When set,
    // it overrides the map derived from `address`.
    mapEmbedSrc?: string;
    socials?: Social[];
  };
}

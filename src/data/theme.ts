export const theme = {
  root: {
    // Generic page background.
    bg: "#faf7f2",

    // Body / paragraph text.
    textColor: "#1a1614",
    textSize: "1.0625rem",

    // Headings. One colour for every title; h1/h2/h3 scale from titleSize
    // (the relative scale lives in typography.css).
    titleColor: "#7a2e2e",
    titleSize: "clamp(1.6rem, 1.15rem + 1.5vw, 2.3rem)",

    // Header + footer ("chrome") — shared background, text colour and text size.
    chromeBg: "#7a2e2e",
    chromeText: "#faf7f2",
    chromeTextSize: "0.9375rem",
  },

  // ---------------------------------------------------------------------------
  // SUPPORTING COLOURS  (prefix --color-*)
  // ---------------------------------------------------------------------------
  colors: {
    muted: "#6b625b", // secondary text: dates, captions, details
    accent: "#b8893b", // small rules + focus ring
    border: "#e7ded2", // hairlines
    link: "#7a2e2e", // links
    linkHover: "#5c2222", // link hover
  },

  fonts: {
    display: 'Georgia, "Times New Roman", "Playfair Display", serif',
    body: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },

  // Supporting type scale for component details (prefix --text-*). The main
  // title/body sizes are the MAIN KNOBS above.
  fontSizes: {
    sm: "0.875rem",
    lg: "1.25rem",
    xl: "1.75rem",
  },

  // CSS variable prefix: --leading-*
  lineHeights: {
    body: "1.65",
    tight: "1.2",
  },

  // CSS variable prefix: --space-*
  spacing: {
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2.5rem",
    xl: "4rem",
    "2xl": "6rem",
  },

  // No prefix: --container-width, --radius, --shadow, --header-height…
  layout: {
    containerWidth: "68rem",
    containerNarrow: "46rem",
    radius: "6px",
    radiusLg: "12px",
    shadow:
      "0 1px 2px rgba(26, 22, 20, 0.06), 0 6px 20px rgba(26, 22, 20, 0.06)",
    // Height of the sticky header; used for scroll offsets on anchors.
    headerHeight: "4rem",
  },
} as const;

// Which CSS variable prefix each group uses ("" means no prefix).
const GROUP_PREFIX: Record<keyof typeof theme, string> = {
  root: "",
  colors: "color",
  fonts: "font",
  fontSizes: "text",
  lineHeights: "leading",
  spacing: "space",
  layout: "",
};

// camelCase -> kebab-case, e.g. "titleColor" -> "title-color".
function toKebabCase(value: string): string {
  return value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

// Build the list of "--name: value;" declarations from the theme object.
export function themeToCssVariables(tokens = theme): string {
  const declarations: string[] = [];

  for (const group of Object.keys(tokens) as (keyof typeof theme)[]) {
    const prefix = GROUP_PREFIX[group];
    const entries = Object.entries(tokens[group]) as [string, string][];

    for (const [key, value] of entries) {
      const name = prefix
        ? `--${prefix}-${toKebabCase(key)}`
        : `--${toKebabCase(key)}`;
      declarations.push(`  ${name}: ${value};`);
    }
  }

  return declarations.join("\n");
}

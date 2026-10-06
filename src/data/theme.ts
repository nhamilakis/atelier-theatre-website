// -----------------------------------------------------------------------------
// THEME / DESIGN TOKENS
// -----------------------------------------------------------------------------
// Single source of truth for all colours, fonts, sizes and spacing.
// These values are turned into CSS custom properties on :root by BaseLayout,
// so components keep styling themselves with var(--color-primary), var(--space-m),
// etc. — edit a value here and it updates everywhere.
//
// Naming: each group maps to a CSS variable prefix (see GROUP_PREFIX below).
//   colors.primaryDark  ->  --color-primary-dark
//   spacing.m           ->  --space-m
//   layout.radiusLg     ->  --radius-lg   (layout group has no prefix)
// -----------------------------------------------------------------------------

export const theme = {
  colors: {
    bg: "#faf7f2",
    surface: "#ffffff",
    ink: "#1a1614",
    muted: "#6b625b",
    primary: "#7a2e2e",
    primaryDark: "#5c2222",
    accent: "#b8893b",
    border: "#e7ded2",
  },
  fonts: {
    display: 'Georgia, "Times New Roman", "Playfair Display", serif',
    body: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  // CSS variable prefix: --text-*
  fontSizes: {
    sm: "0.875rem",
    base: "1.0625rem",
    lg: "1.25rem",
    xl: "1.75rem",
    "2xl": "2.5rem",
    "3xl": "clamp(2.5rem, 6vw, 4rem)",
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
    shadow: "0 1px 2px rgba(26, 22, 20, 0.06), 0 6px 20px rgba(26, 22, 20, 0.06)",
    // Height of the sticky header; used for scroll offsets on anchors.
    headerHeight: "4rem",
  },
} as const;

// Which CSS variable prefix each group uses ("" means no prefix).
const GROUP_PREFIX: Record<keyof typeof theme, string> = {
  colors: "color",
  fonts: "font",
  fontSizes: "text",
  lineHeights: "leading",
  spacing: "space",
  layout: "",
};

// camelCase -> kebab-case, e.g. "primaryDark" -> "primary-dark".
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
      const name = prefix ? `--${prefix}-${toKebabCase(key)}` : `--${toKebabCase(key)}`;
      declarations.push(`  ${name}: ${value};`);
    }
  }

  return declarations.join("\n");
}

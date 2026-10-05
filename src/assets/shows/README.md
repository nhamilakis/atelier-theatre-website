# Show posters

Put poster image files here (`.jpg`, `.png`, `.webp`…), one per production.

To attach a poster to a show, open the language data file
(`src/data/el.ts` or `src/data/fr.ts`) and:

1. Import the file at the top:

   ```ts
   import godotPoster from "../assets/shows/godot.jpg";
   ```

2. Reference it in the show, with alt text:

   ```ts
   poster: { image: godotPoster, alt: "Αφίσα της παράστασης" },
   ```

Astro optimizes these at build time (resizing + modern formats), so you can
drop in large source files — don't pre-shrink them. Shows without a poster
show a neutral placeholder.

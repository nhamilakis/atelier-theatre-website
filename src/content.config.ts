// Content collections. News posts live as Markdown files in src/content/news/,
// one file per post and language (e.g. 2026-10-new-season.el.md). The body is
// the news text in Markdown; the frontmatter below is type-checked.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: ({ image }) =>
    z.object({
      // Headline shown above the post.
      title: z.string(),
      // Used to sort newest-first and to show a date label.
      date: z.coerce.date(),
      // Which language's home page this post appears on.
      lang: z.enum(["el", "fr"]),
      // Optional image (e.g. an event poster). Put the file next to the .md and
      // reference it with a relative path, e.g. `image: ./poster.jpg`.
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

export const collections = { news };

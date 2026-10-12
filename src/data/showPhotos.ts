// Gallery photos for the shows. Instead of importing every file by hand, we
// eagerly glob each show's `photos/` folder (src/assets/shows/<folder>/photos/)
// and group the images by folder. Drop new photos into a folder and they show
// up automatically — just call galleryFor("<folder>", "<alt>") in the data.
//
// Note: only web formats are matched (jpg/jpeg/png); camera RAW files like .CR2
// are ignored on purpose since the image pipeline can't process them.
import type { ImageMetadata } from "astro";
import type { Figure } from "./types";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/shows/*/photos/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
  { eager: true },
);

// folder name -> images, sorted by filename for a stable, predictable order.
const byFolder: Record<string, ImageMetadata[]> = {};
for (const path of Object.keys(modules).sort()) {
  const match = path.match(/\/shows\/([^/]+)\/photos\//);
  if (!match) continue;
  (byFolder[match[1]] ??= []).push(modules[path].default);
}

// Build a gallery (Figure[]) for a show folder; every photo gets the same alt.
export function galleryFor(folder: string, alt: string): Figure[] {
  return (byFolder[folder] ?? []).map((image) => ({ image, alt }));
}

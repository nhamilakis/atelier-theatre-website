import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import type { Markdown } from "../data/types";

// Reuse a single processor across the whole build instead of creating one per
// call (creating it sets up the full remark/rehype pipeline).
type Processor = Awaited<ReturnType<typeof createMarkdownProcessor>>;
let processorPromise: Promise<Processor> | undefined;

function getProcessor(): Promise<Processor> {
  if (!processorPromise) {
    processorPromise = createMarkdownProcessor({});
  }
  return processorPromise;
}

// Strip each line's leading whitespace so a nicely-indented template literal in
// the data files isn't read as a Markdown code block (4+ leading spaces).
// Author structure with Markdown syntax (>, -, **…**), not raw indentation.
function stripIndent(markdown: string): string {
  return markdown
    .split("\n")
    .map((line) => line.replace(/^[ \t]+/, ""))
    .join("\n")
    .trim();
}

// Render an author-trusted Markdown string to an HTML string at build time.
export async function renderMarkdown(markdown: Markdown): Promise<string> {
  const processor = await getProcessor();
  const { code } = await processor.render(stripIndent(markdown));
  return code;
}

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Posts keep Jekyll's `YYYY-MM-DD-slug.md` filename shape, so the files move
   over untouched and the Obsidian workflow is unchanged. The date in the
   filename drives the URL; the one in frontmatter drives display. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.string().optional(),
    /* Optional one-liner for the post list and meta description. */
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

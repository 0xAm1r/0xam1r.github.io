import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

const FILENAME = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/;

/** Splits `2025-11-14-Unconventional` into its date parts and slug. */
export function parseId(id: string) {
  const match = id.match(FILENAME);
  if (!match) {
    throw new Error(
      `Post filename must look like YYYY-MM-DD-slug.md — got "${id}.md"`,
    );
  }
  const [, year, month, day, slug] = match;
  return { year, month, day, slug };
}

/** `/blog/2025/11/14/Unconventional` — the Jekyll path minus the .html */
export function postPath(id: string) {
  const { year, month, day, slug } = parseId(id);
  return `/blog/${year}/${month}/${day}/${slug}`;
}

/** UTC-pinned so a midnight date never renders as the previous day. */
export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Published posts, newest first. Drafts are excluded from the build. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** First sentence-ish of a post, for the list view when no description is set. */
export function excerpt(body: string, max = 170) {
  const text = body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')     // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')  // links keep their text
    .replace(/^\s*[-*_]{3,}\s*$/gm, '')       // horizontal rules
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= max) return text;
  const cut = text.lastIndexOf(' ', max);
  return text.slice(0, cut > 0 ? cut : max).replace(/[.,;:]$/, '') + '…';
}

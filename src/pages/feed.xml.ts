import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { blog } from '../data/blog';
import { getPosts, postPath, excerpt } from '../lib/posts';

/* Same path Jekyll's jekyll-feed used, so existing subscribers keep working. */
export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: blog.name,
    description: blog.tagline,
    site: context.site ?? 'https://am1r.net',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? excerpt(post.body ?? '', 300),
      link: postPath(post.id),
    })),
  });
}

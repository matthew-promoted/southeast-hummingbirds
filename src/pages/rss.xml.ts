import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getBlogPosts } from '../lib/blog';

export async function GET(context: APIContext) {
  const posts = await getBlogPosts({ includeDrafts: false });

  return rss({
    title: 'Southeast Hummingbirds',
    description:
      'Notes on attracting, feeding, and identifying hummingbirds in Georgia, Florida, South Carolina, and Alabama.',
    site: context.site ?? 'https://southernhummers.com',
    trailingSlash: true,
    customData: '<language>en-us</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
  });
}

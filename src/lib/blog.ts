import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Newest first. Drafts are included in dev so the sample post can be previewed,
 * and omitted from production so they are not published.
 */
export async function getBlogPosts(options?: { includeDrafts?: boolean }): Promise<BlogPost[]> {
  const includeDrafts = options?.includeDrafts ?? !import.meta.env.PROD;
  const posts = await getCollection('blog', ({ data }) => includeDrafts || data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatBlogDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function postHref(id: string): string {
  return `/blog/${id}`;
}

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const buildDate = new Date();

function toIso(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return buildDate.toISOString();
  return date.toISOString();
}

function frontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return undefined;
  return match[1].replace(/^['"]|['"]$/g, '');
}

function loadPosts(dir, prefix = '') {
  const posts = new Map();
  if (!existsSync(dir)) return posts;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const nestedPrefix = prefix ? `${prefix}/${entry.name}` : entry.name;
      for (const [slug, meta] of loadPosts(fullPath, nestedPrefix)) posts.set(slug, meta);
      continue;
    }
    if (!entry.name.endsWith('.md')) continue;

    const raw = readFileSync(fullPath, 'utf8');
    const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    const slug = `${prefix ? `${prefix}/` : ''}${entry.name.replace(/\.md$/, '')}`;
    const pubDate = frontmatterValue(frontmatter, 'pubDate');
    const updatedDate = frontmatterValue(frontmatter, 'updatedDate');
    posts.set(slug, {
      draft: frontmatterValue(frontmatter, 'draft') === 'true',
      lastmod: toIso(updatedDate || pubDate || statSync(fullPath).mtime),
    });
  }

  return posts;
}

const posts = loadPosts(join(root, 'src/content/blog'));
const sourceDates = new Map();

export function pathnameOf(url) {
  const pathname = decodeURIComponent(new URL(url, 'https://southernhummers.com').pathname);
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function postMetaForPath(pathname) {
  const slug = pathname.match(/^\/blog\/(.+)$/)?.[1];
  if (!slug) return undefined;
  return posts.get(slug);
}

function sourceLastmod(pathname) {
  const rel = pathname === '/' ? '' : pathname.replace(/^\//, '');
  const candidates = rel
    ? [join('src/pages', `${rel}.astro`), join('src/pages', rel, 'index.astro')]
    : ['src/pages/index.astro'];
  const relativeFile = candidates.find((file) => existsSync(join(root, file)));
  if (!relativeFile) return toIso(buildDate);
  if (sourceDates.has(relativeFile)) return sourceDates.get(relativeFile);

  let lastmod = toIso(statSync(join(root, relativeFile)).mtime);
  try {
    const committed = execFileSync('git', ['log', '-1', '--format=%cI', '--', relativeFile], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (committed) lastmod = toIso(committed);
  } catch {
    // Untracked files and builds without git history use the file mtime.
  }

  sourceDates.set(relativeFile, lastmod);
  return lastmod;
}

export function isDraftUrl(url) {
  return postMetaForPath(pathnameOf(url))?.draft === true;
}

/** updatedDate or pubDate for posts; git commit date (else file mtime) for other pages. */
export function lastmodForUrl(url) {
  const pathname = pathnameOf(url);
  const post = postMetaForPath(pathname);
  if (post && !post.draft) return post.lastmod;
  return sourceLastmod(pathname);
}

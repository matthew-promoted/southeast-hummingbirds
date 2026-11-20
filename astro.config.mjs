import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { isDraftUrl, lastmodForUrl } from './src/lib/sitemap-lastmod.mjs';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://southernhummers.com',
  output: 'static',
  integrations: [
    preact(),
    sitemap({
      serialize(item) {
        if (isDraftUrl(item.url)) return undefined;
        return { ...item, lastmod: lastmodForUrl(item.url) };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({ imageService: 'compile' }),
});
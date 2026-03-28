import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://southernhummers.com',
  output: 'static',
  integrations: [preact(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({ imageService: 'compile' }),
});
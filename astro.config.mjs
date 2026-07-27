// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://turcanime.pages.dev',
  integrations: [sitemap({ namespaces: { news: false, xhtml: false, image: false, video: false } })],
  vite: {
    plugins: [tailwindcss()]
  }
});
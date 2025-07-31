// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import viteCompression from 'vite-plugin-compression';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), vue()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  vite: {
    plugins: [viteCompression()]
  }
});
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dantas15.github.io',
  base: '/imersao-comp-blog',
  integrations: [mdx(), sitemap()],
});

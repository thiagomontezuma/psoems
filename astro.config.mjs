import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind(), mdx()],
  site: 'https://psoems.com/'
});
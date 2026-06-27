import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
// Static output. Deploys to Cloudflare Pages from /dist.
// Sitemap is hand-rolled in src/pages/sitemap.xml.ts (the @astrojs/sitemap
// integration crashes on Cloudflare Pages; same workaround as coachjeffthomas).
export default defineConfig({
  site: 'https://calebarlow.com',
  trailingSlash: 'ignore',
  integrations: [mdx()],

  build: {
    format: 'directory',
  },

  vite: {
    build: {
      cssCodeSplit: false,
    },
  },

  output: "hybrid",
  adapter: cloudflare()
});
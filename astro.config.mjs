import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. YOUR BASE URL (Crucial for SEO images)
  site: 'https://lijohhr.co.ke',
  
  // 2. SSR OUTPUT
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),

  // 3. INTEGRATIONS
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(), // Automatically handles your sitemap
  ],

  compress: true,
  server: {
    allowedHosts: ['localhost', 'lijohhr.co.ke'],
  },
});
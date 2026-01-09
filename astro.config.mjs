import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  // ESSENTIAL FOR SEO: Tells Astro the base URL for absolute links
  site: 'https://lijohhr.co.ke',
  
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  
  // NODE SSR CONFIGURATION
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),

  compress: true,
  build: {
    inlineStylesheets: 'auto',
  },
  
  server: {
    allowedHosts: [
      'localhost',
      'lijohhr.co.ke'
    ],
  },
  
  vite: {
    server: {
      allowedHosts: true,
      hmr: {
        protocol: 'ws',
      },
    },
  },
});
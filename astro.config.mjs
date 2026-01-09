import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: 'https://hr.digikenya.co.ke',
  compress: true,
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  server: {
    allowedHosts: [
      'localhost',
      '.fcapp.run',
      'ws-fdcb-cdffbea-mhakietgxu.cn-hongkong-vpc.fcapp.run',
      'lijohhr.co.ke'
    ],
  },
  vite: {
    server: {
      allowedHosts: true, // Allow all hosts
      hmr: {
        protocol: 'ws',
      },
    },
  },
});

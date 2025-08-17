import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://unitedsecurityva.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://unitedsecurityva.com/llms.txt'
      ]
    }),
    compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true
    })
  ],
  redirects: {
    '/commercial-locksmith-services': '/',
    '/commercial-locksmith-services/': '/',
    '/products-services': '/',
    '/products-services/': '/',
    '/for-your-home': '/',
    '/for-your-home/': '/'
  },
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom']
          }
        }
      }
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
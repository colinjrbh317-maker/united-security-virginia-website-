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
    '/for-your-home/': '/',
    // Location page redirects for SEO optimization
    '/lynchburg-area-security': '/lynchburg-security',
    '/lynchburg-area-security/': '/lynchburg-security',
    '/roanoke-valley-security': '/roanoke-security',
    '/roanoke-valley-security/': '/roanoke-security',
    '/allegheny-county-security': '/alleghany-county-security',
    '/allegheny-county-security/': '/alleghany-county-security'
  },
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
    splitting: true
  },
  vite: {
    build: {
      target: 'es2022',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // React core
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // Radix UI components
            if (id.includes('@radix-ui')) {
              return 'radix-vendor';
            }
            // Lucide icons
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Utility libraries
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'utils';
            }
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('zod')) {
              return 'forms';
            }
            // Large UI libraries
            if (id.includes('recharts') || id.includes('embla-carousel')) {
              return 'charts-carousel';
            }
            // Node modules that aren't specifically chunked
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
        }
      }
    },
    ssr: {
      noExternal: ['@radix-ui/*']
    }
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  experimental: {
    clientPrerender: true
  }
});
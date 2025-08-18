module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [
      require('@fullhuman/postcss-purgecss')({
        content: [
          './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
          './public/**/*.html',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          // Keep dynamic classes
          /^animate-/,
          /^duration-/,
          /^delay-/,
          /^transition-/,
          /^transform/,
          /^hover:/,
          /^focus:/,
          /^active:/,
          /^group-/,
          /^peer-/,
          // Radix UI classes
          /^radix-/,
          /^data-/,
          // Keep utility classes that might be used dynamically
          'sr-only',
          'not-sr-only',
          // Astro specific
          /^astro-/,
          // Animation classes that might be added dynamically
          'fade-in-up',
          'fade-in',
          'slide-in',
        ],
        fontFace: true,
        keyframes: true,
        variables: true
      })
    ] : [])
  ]
}
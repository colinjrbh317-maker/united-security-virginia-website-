# Virginia Shield Foundation - Astro Migration

This is the Astro migration of the Virginia Shield Foundation website, originally built with React/Vite.

## Tech Stack

- **Framework:** Astro 4.x with React integration
- **Styling:** Tailwind CSS 3.4+ with custom design system
- **UI Components:** shadcn/ui with Radix UI primitives
- **Icons:** Lucide React
- **TypeScript:** Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Features

- ✅ Static site generation with Astro
- ✅ React components as islands for interactivity
- ✅ Responsive design with mobile-first approach
- ✅ SEO-optimized with proper meta tags
- ✅ 301 redirects for legacy URLs
- ✅ Professional security company branding
- ✅ Complete component library (40+ UI components)

## Redirects

The following legacy URLs redirect to the homepage:
- `/commercial-locksmith-services` → `/`
- `/products-services` → `/`
- `/for-your-home` → `/`

## Directory Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── *.tsx           # Page sections
├── hooks/              # React hooks
├── layouts/            # Astro layouts
├── lib/                # Utilities
├── pages/              # Astro pages
└── styles/             # Global CSS
```
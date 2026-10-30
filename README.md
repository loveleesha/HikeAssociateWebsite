# Hike Associate website

Next.js (App Router) + TypeScript + Tailwind CSS site for Hike Associate.

```bash
npm install
npm run dev           # local development
npm run build         # production build
npm start             # serve the production build
npm run lint          # ESLint
npm run typecheck     # TypeScript
npm run format        # Prettier (also sorts Tailwind classes)
npm test              # Accessibility and SEO checks (needs Chrome installed)
```

## Project structure

Components follow atomic design. A component may only import from its own level or a lower one.

```
src/
  app/                  Routes, metadata, root layout, and Tailwind theme (globals.css)
  components/
    atoms/              Single-purpose building blocks: Button, Tag, Photo, Reveal, Globe
    molecules/          Small groups of atoms: ServiceCard, FormField, CheckList, SplitBlock
    organisms/          Complete page sections: Header, Hero, ContactForm, Footer
  data/                 Site copy and the photo registry
  hooks/                React hooks
  lib/                  Framework-free helpers: cn, scroll, form validation
  types/                Global type declarations
```

Components are server components unless they need the browser. Those few are marked `'use client'`. Lucide icons
are functions, so they can't be passed as props from a server component into a client component: pass rendered
children instead, as `Reveal` and `TiltCard` do.

## Where to change things

- **Text, services, stats, contact details:** `src/data/site.ts`
- **Colours, breakpoints, shadows, animations:** the `@theme` block in `src/app/globals.css` (dark palette in the `[data-theme='dark']` block below it)
- **Photos:** `public/img/`, registered in `src/data/photos.ts`. Add one large WebP: `next/image` generates the smaller sizes.
- **Logo:** `src/components/atoms/Logo.tsx`

## SEO

- **Page titles and descriptions:** the `pageMetadata()` call at the top of each `src/app/**/page.tsx`
- **New pages:** add the route to `navLinks` in `src/data/site.ts` so it reaches the sitemap, and to `tests/routes.ts`
- **Domain:** set `NEXT_PUBLIC_SITE_URL` if the site isn't served from `https://hikeassociate.com`. Canonical URLs, the sitemap and social tags all use it.
- **Business details for search engines:** `src/lib/structuredData.ts`, fed by `company` in `src/data/site.ts`

## Accessibility

The site targets WCAG 2.2 AA, and `npm test` runs axe on every page in both themes. When changing colours in `globals.css`, keep
text at 4.5:1 and input borders and focus rings at 3:1. Inside a new dark section, set `[--focus-ring:var(--color-cyan-400)]`
so keyboard focus stays visible.

## Contact form

With no configuration, submitting opens the visitor's email app with the enquiry filled in,
addressed to the email in `src/data/site.ts`.

To receive enquiries directly, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_ENDPOINT` to a
URL that accepts a JSON POST (Formspree or your own API), then rebuild.

## Deploying

Deploy to any host that runs Next.js, such as Vercel, or run `npm run build && npm start` on your own Node server.
`next/image` optimizes photos on the server, so a purely static host won't work without further changes.

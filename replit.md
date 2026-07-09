# Bantayan Island Travel Guide

A complete, production-ready travel website for Bantayan Island, Cebu, Philippines. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deployable directly to Vercel.

## Run & Operate

- `cd artifacts/bantayan-travel && npm run dev` — run locally (port 3000)
- `cd artifacts/bantayan-travel && npm run build` — production build
- `cd artifacts/bantayan-travel && npm run lint` — ESLint check
- `cd artifacts/bantayan-travel && npm run typecheck` — TypeScript check

## Project Location

All code is in `artifacts/bantayan-travel/` — a standalone Next.js project independent of the pnpm workspace. It has its own `package.json`, `node_modules`, and is ready to be pushed to GitHub and deployed on Vercel.

## Stack

- **Framework**: Next.js 15.5 (App Router, static export)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4 + custom theme (ocean palette, sand colors)
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Fonts**: Inter + Playfair Display (Google Fonts)
- **Dark Mode**: next-themes
- **Toasts**: react-hot-toast
- **Intersection Observer**: react-intersection-observer

## Where Things Live

```
artifacts/bantayan-travel/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home page (14 sections)
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── destinations/       # Destinations list + [slug] detail pages
│   │   ├── beaches/            # Beaches page
│   │   ├── attractions/        # Attractions page
│   │   ├── activities/         # Activities page
│   │   ├── food/               # Food guide page
│   │   ├── hotels/             # Hotels page
│   │   ├── transportation/     # Transportation guide
│   │   ├── travel-tips/        # Travel tips page
│   │   ├── gallery/            # Photo gallery page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   └── robots.ts           # Robots.txt
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Data (destinations, hotels, etc.) + utils
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── vercel.json
```

## Vercel Deployment

1. Push `artifacts/bantayan-travel/` to a GitHub repo (or push the whole monorepo and set root directory to `artifacts/bantayan-travel/`)
2. Import into Vercel — no configuration needed
3. Build command: `npm run build` · Output: `.next` · Install: `npm install`

## Architecture Decisions

- All 15 destination pages are statically generated via `generateStaticParams`
- Favorites system uses localStorage (no backend required)
- Dark mode managed by next-themes with class strategy
- Images served from Unsplash CDN (configured in next.config.ts remotePatterns)
- No external API dependencies — fully static site

## User Preferences

- Developer credit: Vernie Esgana, BSIT 3 NORTH (displayed in footer)
- No emojis anywhere in the UI
- Professional travel website aesthetic (Airbnb/Booking.com/Lonely Planet style)
- Glassmorphism used sparingly (hero stats bar, map overlay)

## Pointers

- All destination/hotel/food/activity content is in `src/lib/data.ts` — edit there to update content
- Theme colors are defined in `tailwind.config.ts` under `primary` and `ocean`
- Contact form currently shows a success toast — wire to an email service (Resend, SendGrid) for production
- Google Maps iframes use public embed URLs — replace with Maps API key for advanced features

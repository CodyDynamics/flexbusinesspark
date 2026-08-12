# Vertex Industrial Build

Premium landing page for a fictional international warehouse design and construction company. Built for design demonstration purposes.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- Motion (`motion/react`)
- React Hook Form + Zod + Sonner

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
npx tsc --noEmit # TypeScript check
```

## Project structure

```text
app/
  layout.tsx          # fonts, SEO metadata, skip link, toaster, JSON-LD
  page.tsx            # assembles all landing sections
  globals.css         # brand tokens + industrial utilities
components/
  landing/            # all page sections and shared motion helpers
  ui/                 # shadcn primitives
data/                 # typed static content (projects, FAQs, etc.)
types/industrial.ts   # shared interfaces
lib/validation.ts     # Zod schemas for inquiry forms
lib/utils.ts          # cn helper
```

## Where to edit content

| Content | Location |
|---------|----------|
| Company info / nav | `data/company.ts` |
| Capabilities | `data/capabilities.ts` |
| Industries | `data/industries.ts` |
| Projects / images | `data/projects.ts` |
| Warehouse types | `data/warehouse-types.ts` |
| Testimonials | `data/testimonials.ts` |
| Markets | `data/markets.ts` |
| Insights | `data/insights.ts` |
| FAQs | `data/faqs.ts` |

## Images

Remote Unsplash images are configured in `next.config.ts` under `images.remotePatterns`.

Replace image URLs in:

- `components/landing/hero-section.tsx` (hero)
- `data/projects.ts`
- `data/warehouse-types.ts`
- `data/insights.ts`
- `components/landing/design-build-section.tsx`
- `components/landing/final-cta.tsx`

Prefer local assets in `/public` for production.

## Connecting real APIs

Forms currently simulate submission and show a toast.

- Hero inquiry: `components/landing/project-inquiry-card.tsx`
- Contact inquiry: `components/landing/project-form.tsx`

Replace the simulated `await new Promise(...)` blocks with `fetch` calls to your backend (e.g. `/api/project-inquiry`).

Suggested environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
PROJECT_INQUIRY_WEBHOOK_URL=
CRM_API_KEY=
```

See `.env.example`.

## Disclaimer

Vertex Industrial Build is a fictional company created for website design demonstration purposes. Statistics and testimonials are demo content.

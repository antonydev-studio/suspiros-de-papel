# ARCHITECTURE.md — Suspiros de Papel

> Living document. Update it whenever the structure, data model, or
> integration contracts change. Never let it drift from reality.

---

## 1. System Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Browser / Client                     │
│  Next.js 16 · App Router · React 19 · TypeScript        │
│  Tailwind CSS · Custom useScrollReveal hook             │
└───────────────────────┬─────────────────────────────────┘
                        │  Phase 1: static / ISR
                        │  Phase 2: API routes + Supabase
                        ▼
┌─────────────────────────────────────────────────────────┐
│                  Next.js Server Layer                    │
│  /app/api/* (Phase 2 only)                              │
│  Server Components for data-heavy sections              │
└───────────────────────┬─────────────────────────────────┘
                        │  Phase 2 only
                        ▼
┌─────────────────────────────────────────────────────────┐
│                    Supabase (Phase 2)                    │
│  PostgreSQL · Auth · Storage · Realtime                 │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Repository Layout

```
suspiros-de-papel/
├── public/
│   └── images/
│       ├── Logo.webp
│       └── portfolio/          # All portfolio .webp images
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout: fonts, metadata, Navbar, Footer
│   │   ├── page.tsx            # Home — composes landing sections
│   │   ├── portfolio/
│   │   │   └── page.tsx        # Full portfolio page
│   │   ├── nuestra-historia/
│   │   │   └── page.tsx        # Our Story sub-page
│   │   ├── faq/
│   │   │   └── page.tsx        # FAQ sub-page
│   │   └── api/                # Phase 2 — API routes (empty in Phase 1)
│   │
│   ├── components/
│   │   ├── ui/                 # Primitive, stateless, reusable
│   │   │   ├── Button.tsx      # Named export: Button
│   │   │   └── Container.tsx   # Named export: Container
│   │   ├── layout/             # App chrome
│   │   │   ├── Navbar.tsx      # Named export: Navbar
│   │   │   └── Footer.tsx      # Named export: Footer
│   │   └── sections/           # Page-level sections (all named exports)
│   │       ├── Hero/
│   │       │   ├── index.ts    # Re-exports Hero, HeroBackground, HeroContent, HeroImage
│   │       │   ├── Hero.tsx
│   │       │   ├── HeroBackground.tsx
│   │       │   ├── HeroContent.tsx
│   │       │   └── HeroImage.tsx
│   │       ├── Portfolio/
│   │       │   ├── index.ts    # Re-exports PortfolioPreview, PortfolioGrid, PortfolioCard, CategoryTabs
│   │       │   ├── PortfolioPreview.tsx  # Home preview (featured only)
│   │       │   ├── PortfolioGrid.tsx     # Full grid (portfolio page)
│   │       │   ├── PortfolioCard.tsx
│   │       │   └── CategoryTabs.tsx
│   │       ├── Services.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── OurStory.tsx
│   │       ├── CTA.tsx
│   │       └── FAQ.tsx
│   │
│   ├── constants/              # Pure static data — no React, no side effects
│   │   ├── site.ts             # Brand: name, WhatsApp, email, socials
│   │   ├── portfolio.ts        # PORTFOLIO_ITEMS, FEATURED_ITEMS, filterByCategory
│   │   ├── services.tsx        # SERVICES array with variants
│   │   ├── faq.ts              # FAQ_DATA (categories + Q&A pairs)
│   │   └── howItWorks.ts       # PROCESS_STEPS
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts  # Generic IntersectionObserver scroll animation
│   │
│   ├── lib/                    # Pure utility functions (no side effects)
│   │   ├── cn.ts               # clsx wrapper: cn(...classes)
│   │   └── whatsapp.ts         # formatWhatsAppUrl(message?) → wa.me URL
│   │
│   ├── types/
│   │   └── index.ts            # Shared TypeScript types
│   │
│   └── features/               # Phase 2 — domain features (reserved)
│       ├── orders/             # Order management
│       ├── products/           # Product catalog (admin-editable)
│       └── admin/              # Admin panel
│
├── supabase/                   # Phase 2
│   ├── migrations/
│   └── seed.sql
│
├── .env.example                # All env vars documented with placeholders
├── .env.local                  # Gitignored — real secrets
├── AGENTS.md                   # AI agent rules (single source of truth)
├── ARCHITECTURE.md             # This file
├── ROADMAP.md                  # Phase timeline and milestones
├── README.md                   # Human onboarding
├── package.json
├── pnpm-lock.yaml              # PNPM lockfile — never commit package-lock.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

---

## 3. Component Architecture

### Hierarchy

```
app/page.tsx                    # Home page — conversion funnel
└── <Navbar />                  (layout)
└── <Hero />                    (section → sub-components)
    ├── <HeroBackground />
    ├── <HeroContent />
    └── <HeroImage />
└── <PortfolioPreview />        (section — featured items only)
    └── <PortfolioGrid /> → <PortfolioCard /> ×N
└── <Services />                (section)
└── <HowItWorks />              (section)
└── <CTA />                     (section + WhatsApp FAB)
└── <Footer />                  (layout)

app/portfolio/page.tsx          # Full portfolio page
└── <PortfolioGrid showFilters showLoadMore />
    ├── <CategoryTabs />
    └── <PortfolioCard /> ×N

app/nuestra-historia/page.tsx   # Extended "Our Story" page
└── <OurStory />                (StorySection, StatsSection, ValuesSection…)

app/faq/page.tsx                # FAQ standalone page
└── <FAQ />                     (accordion by category)
```

### Composition Rules

| Layer | Imports from | Never imports from |
|---|---|---|
| `app/` | `sections/`, `layout/`, `constants/`, `hooks/` | `features/` (Phase 1) |
| `sections/` | `ui/`, `constants/`, `hooks/`, `lib/`, `types/` | other `sections/` |
| `ui/` | `lib/`, `types/` | `sections/`, `layout/`, `constants/` |
| `constants/` | nothing (pure data) | anything |
| `features/` | any (Phase 2 only) | `sections/` directly |

---

## 4. Data Flow

### Phase 1 — Static Data

```
constants/portfolio.ts
  PORTFOLIO_ITEMS[]
  FEATURED_ITEMS[]         ← pre-filtered at build time
  filterByCategory()       ← pure function, called client-side
       │
       ▼
PortfolioGrid / PortfolioPreview
  ← CategoryTabs drives active filter state (useState)
  ← PortfolioCard renders each item
```

### Phase 2 — Supabase Data (planned)

```
Supabase PostgreSQL
  products table
  orders table
  order_status table
       │
       ▼
Next.js Server Components (app/api/*)
  GET /api/products
  POST /api/orders
  PATCH /api/orders/[id]/status
       │
       ▼
Client Components
  Admin panel (CRUD products, update order status)
  Customer order tracker
```

---

## 5. Design System

### CSS Variables (`src/app/globals.css`)

```css
:root {
  --color-primary:    #95442a;   /* terracotta — CTAs, headings */
  --color-secondary:  #7a573c;   /* warm brown — subheadings */
  --color-accent:     #ffb59f;   /* peach — hover, highlights */
  --color-background: #fdf9f5;   /* cream — page background */
  --color-olive:      #5b5e41;   /* olive — logo, decorative */
}
```

### Tailwind Tokens (`tailwind.config.ts`)

All CSS vars are mirrored as Tailwind color tokens (`text-primary`,
`bg-accent`, etc.). **Never use arbitrary hex values** — always reference a
token.

### Typography Scale

| Class | Font | Weight | Use |
|---|---|---|---|
| `font-headline` | Champagne Limousines Bold | 700 | Section titles, display headings |
| `font-display` | Champagne Limousines Bold | 700 | Alias of `font-headline` — same font |
| `font-body` | Plus Jakarta Sans | 300–700 | Body text, UI labels |

Noto Serif is loaded (variable `--font-noto-serif`) but not mapped to any Tailwind class.
`font-headline` and `font-display` both resolve to `var(--font-champagne)` (Champagne Limousines).
Change the font globally by editing the `headline`/`display` entries in `tailwind.config.ts`.

Italic is reserved for important display headings — never body text.

### Utility Classes

| Class | Definition |
|---|---|
| `section-padding` | `py-16 px-4 md:py-24 md:px-6` (approximate) |
| `scroll-reveal` | Opacity/translate entry animation via `useScrollReveal` |

---

## 6. Key Integrations

### WhatsApp CTA

All contact links use the WhatsApp API. The URL is constructed from
`SITE.whatsapp` in `src/constants/site.ts`:

```ts
`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
```

Never hard-code the phone number inline.

### Images

- All portfolio images: `public/images/portfolio/*.webp`
- Served via `next/image` (`<Image />`) with explicit `width`, `height`, and
  `alt`.
- `aspectRatio` field on `PortfolioItem` drives the CSS wrapper's `aspect-ratio`
  class so object-cover crops correctly.

### Fonts

Loaded in `src/app/layout.tsx` via `next/font/google`. Two families:
- `Noto_Serif` → CSS variable `--font-headline`
- `Plus_Jakarta_Sans` → CSS variable `--font-body`

---

## 7. Phase 2 Data Model (Planned)

```ts
// Products (admin-managed via Supabase)
type Product = {
  id: string                         // UUID
  slug: string                       // URL-safe identifier
  name: string                       // Display name (Spanish)
  category: PortfolioCategory
  description: string
  imageUrls: string[]                // Supabase Storage URLs
  basePrice: number                  // MXN
  active: boolean
  createdAt: Date
}

// Orders
type Order = {
  id: string                         // UUID
  customerName: string
  customerPhone: string              // WhatsApp number
  productId: string                  // FK → Product
  quantity: number
  customization: string              // Free-text instructions
  status: OrderStatus
  createdAt: Date
  updatedAt: Date
}

type OrderStatus =
  | "PENDING"        // received, not yet reviewed
  | "IN_REVIEW"      // admin reviewing feasibility
  | "CONFIRMED"      // confirmed, awaiting payment
  | "IN_PROGRESS"    // in production
  | "READY"          // ready for pickup/shipping
  | "DELIVERED"      // order complete
  | "CANCELLED"      // cancelled
```

---

## 8. Environment Variables

```bash
# .env.example

# ── Phase 2: Supabase ──────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key   # server only

# ── Phase 2: Admin Auth ────────────────────────────────────
# Supabase Auth handles this — no extra env needed

# ── Phase 1: No secrets required ──────────────────────────
# WhatsApp number lives in src/constants/site.ts (not a secret)
```

---

## 9. Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| LCP | < 2.5 s |
| CLS | < 0.1 |
| FID / INP | < 200 ms |
| Image format | WebP only |
| Bundle size (JS) | < 150 kB first load |

All images must pass through `next/image` for automatic optimisation,
lazy-loading, and responsive `srcset` generation.

---

## 10. Deployment

- **Host**: Vercel (recommended — native Next.js support)
- **Branch strategy**: `main` → production, `dev` → preview deployments
- **Environment**: Set all `.env` vars in Vercel dashboard, never in
  `next.config.ts`
- **Domain**: Configure custom domain in Vercel after DNS transfer

---

*Last updated: 2025 — Suspiros de Papel*
# ROADMAP.md — Suspiros de Papel

> Strategic plan for the two-phase evolution of the platform.
> Update the status column as work progresses. Never delete completed items —
> mark them ✅ for historical record.

---

## Legend

| Symbol | Meaning |
|---|---|
| ✅ | Done |
| 🔄 | In progress |
| ⏳ | Planned — next up |
| 🔵 | Planned — future |
| ❌ | Blocked / cancelled |

---

## Phase 1 — Landing Page & Portfolio

**Goal:** A polished, fast, conversion-focused landing page that showcases
the portfolio and drives leads via WhatsApp.  
**Deploy target:** Vercel — static + ISR, no backend required.

### 1.1 Foundation

| Status | Task |
|---|---|
| ✅ | Initialize Next.js 16 with TypeScript, Tailwind, App Router |
| ✅ | Configure design system (CSS vars, Tailwind tokens, fonts) |
| ✅ | Set up `SITE` constants (`site.ts`) |
| ✅ | Set up `PORTFOLIO_ITEMS` data (`portfolio.ts`) |
| ✅ | Set up `SERVICES` data (`services.tsx`) |
| ✅ | Implement `useScrollReveal` hook |
| ✅ | Configure ESLint + TypeScript strict mode |
| ✅ | Migrate from npm to **pnpm** (delete `package-lock.json`, add `pnpm-lock.yaml`) |
| ✅ | Add `.env.example` with all documented variables |

### 1.2 Core Sections

| Status | Task |
|---|---|
| ✅ | Navbar (responsive, mobile menu) |
| ✅ | Hero (headline, tagline, WhatsApp CTA, hero image) |
| ✅ | Services (sublimation, laser, stationery cards) |
| ✅ | Portfolio Preview (featured items, category tabs) |
| ✅ | How It Works (4-step process) |
| ✅ | Our Story |
| ✅ | FAQ (collapsible) |
| ✅ | CTA (WhatsApp contact block) |
| ✅ | Footer (social links, contact info) |

### 1.3 Sub-pages

| Status | Task |
|---|---|
| ✅ | `/portfolio` — Full portfolio grid with all categories |
| ✅ | `/nuestra-historia` — Extended Our Story page |
| ✅ | `/faq` — Extended FAQ page |
| 🔵 | `/servicios` — Dedicated services detail page |

### 1.4 Polish & Performance

| Status | Task |
|---|---|
| ✅ | Audit all images: confirm WebP format, correct `aspectRatio`, `objectPosition` |
| ⏳ | Lighthouse audit — achieve ≥ 90 Performance score |
| ✅ | Meta tags / Open Graph for all pages (`metadata` export) |
| ✅ | `sitemap.xml` and `robots.txt` |
| ✅ | Favicon and Apple touch icon |
| ✅ | 404 page (`not-found.tsx`) |
| 🔵 | Animated loading page (`loading.tsx`) |
| 🔵 | Install Framer Motion and upgrade scroll animations |

### 1.5 Launch Checklist

| Status | Task |
|---|---|
| ⏳ | Final copy review (Spanish) |
| ⏳ | WhatsApp link smoke test on mobile |
| ⏳ | Cross-browser test (Chrome, Safari, Firefox) |
| ⏳ | Mobile responsiveness audit (375px, 390px, 430px) |
| ⏳ | Deploy to Vercel production |
| ⏳ | Connect custom domain |
| ⏳ | Google Search Console setup |

---

## Phase 2 — Admin Panel & Order System

**Goal:** A Supabase-powered backend allowing the owner to manage products
and track orders through a secure admin panel, with customer-facing order
status updates via WhatsApp.

> ⚠️ Phase 2 work must NOT begin until Phase 1 launch checklist is 100% ✅.
> Read `ARCHITECTURE.md` section 7 (data model) before writing any schema.

### 2.1 Infrastructure

| Status | Task |
|---|---|
| 🔵 | Create Supabase project |
| 🔵 | Configure Supabase Auth (email/password for admin) |
| 🔵 | Configure Supabase Storage bucket for product images |
| 🔵 | Install `@supabase/supabase-js` via pnpm |
| 🔵 | Add env vars to `.env.local` and Vercel dashboard |
| 🔵 | Create `src/lib/supabase/` client helpers (server + browser) |

### 2.2 Database Schema

| Status | Task |
|---|---|
| 🔵 | Create `products` table (see `ARCHITECTURE.md` data model) |
| 🔵 | Create `orders` table |
| 🔵 | Create `order_status` enum |
| 🔵 | Row Level Security (RLS) policies — public read for products, admin write |
| 🔵 | Seed initial product data from `portfolio.ts` |
| 🔵 | Create `supabase/migrations/` directory and document migration workflow |

### 2.3 API Routes

| Status | Task |
|---|---|
| 🔵 | `GET /api/products` — list active products (public) |
| 🔵 | `GET /api/products/[slug]` — product detail (public) |
| 🔵 | `POST /api/orders` — create order (public, validated) |
| 🔵 | `GET /api/orders` — list orders (admin only) |
| 🔵 | `PATCH /api/orders/[id]/status` — update order status (admin only) |
| 🔵 | `POST /api/products` — create product (admin only) |
| 🔵 | `PATCH /api/products/[id]` — update product (admin only) |
| 🔵 | `DELETE /api/products/[id]` — soft delete product (admin only) |

### 2.4 Admin Panel (`/admin`)

| Status | Task |
|---|---|
| 🔵 | Admin login page (Supabase Auth) |
| 🔵 | Protected middleware — redirect unauthenticated users |
| 🔵 | Dashboard — KPIs: pending orders, products count |
| 🔵 | Product list with search and filter |
| 🔵 | Product create/edit form with image upload to Supabase Storage |
| 🔵 | Order list with status filter |
| 🔵 | Order detail view — update status, add internal notes |
| 🔵 | Order status change triggers WhatsApp message template |
| 🔵 | Admin logout |

### 2.5 Customer-Facing Features

| Status | Task |
|---|---|
| 🔵 | Dynamic product catalog page (replaces static `portfolio.ts` data) |
| 🔵 | Product detail page (`/productos/[slug]`) |
| 🔵 | Order form — customer submits customization request |
| 🔵 | Order confirmation page with order ID |
| 🔵 | Order tracker (`/pedido/[id]`) — read-only status view |
| 🔵 | WhatsApp notification on status change (via WhatsApp API or manual link) |

### 2.6 State Management

| Status | Task |
|---|---|
| 🔵 | Evaluate Zustand for global state (cart, admin session) |
| 🔵 | Install Zustand via pnpm if needed |
| 🔵 | Implement cart store (if multi-product orders are required) |

### 2.7 Phase 2 Launch Checklist

| Status | Task |
|---|---|
| 🔵 | Security audit — RLS policies cover all tables |
| 🔵 | Input validation on all API routes (Zod schemas) |
| 🔵 | Error boundaries for all async client components |
| 🔵 | Lighthouse audit maintained ≥ 90 |
| 🔵 | Admin panel mobile-usable (owner manages from phone) |
| 🔵 | Staging environment smoke test |
| 🔵 | Production deploy |

---

## Phase 3 — Growth (Speculative)

> Ideas to evaluate after Phase 2 is stable. No commitments yet.

- Email notifications (Resend or SendGrid)
- Automated WhatsApp messages via official API
- Customer accounts and order history
- Analytics dashboard (sales trends, popular products)
- Promotional landing pages for seasonal campaigns
- Integration with Mexican payment gateways (Stripe MX, Clip, Conekta)
- Printable order sheets for production workflow

---

## Tech Debt Tracker

Track decisions made for speed that need revisiting.

| Item | Created | Priority | Notes |
|---|---|---|---|
| ~~`package-lock.json` in repo~~ | Phase 1 start | ✅ Done | Migrated to pnpm-lock.yaml |
| Static portfolio data in `.ts` | Phase 1 | 🟡 Medium | Replace with Supabase in Phase 2 |
| No error boundaries | Phase 1 | 🟡 Medium | Add before Phase 2 launch |
| No E2E tests | Phase 1 | 🟠 Low | Playwright setup in Phase 2 |

---

*Last updated: 2025 — Suspiros de Papel*
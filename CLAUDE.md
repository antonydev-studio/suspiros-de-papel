# CLAUDE.md — Suspiros de Papel

> Claude Code project context. Read this, then AGENTS.md (full rules), ARCHITECTURE.md (structure), ROADMAP.md (status).

## Quick Reference

| Key | Value |
|---|---|
| **Phase** | 1 — Landing page (no backend yet) |
| **Package manager** | `pnpm` only — `npm` is banned |
| **Next.js** | 16.2.2 (App Router) |
| **React** | 19.2.4 |
| **UI copy** | Spanish · **Code/names** | English |

## Verify Next.js before writing Next-specific code

```bash
cat node_modules/next/package.json | grep '"version"'
```

## Directory Contract (strict)

```
src/app/          → pages + layouts only (no business logic)
src/components/
  ui/             → stateless primitives: Button, Container
  layout/         → Navbar, Footer
  sections/       → page-level sections (Hero/, Portfolio/, etc.)
src/constants/    → pure static data (no React, no side effects)
src/hooks/        → custom hooks
src/lib/          → pure utility functions (cn, whatsapp, etc.)
src/types/        → shared TypeScript types
src/features/     → RESERVED for Phase 2 (do not touch in Phase 1)
```

## Import rules

| Layer | May import | Never imports |
|---|---|---|
| `app/` | sections, layout, constants, hooks | features (Phase 1) |
| `sections/` | ui, constants, hooks, lib, types | other sections |
| `ui/` | lib, types | sections, layout, constants |
| `constants/` | nothing | anything |

## Exports — Named only

All components use **named exports**. Default exports are forbidden.

```tsx
// ✅ correct
export function MySection() { ... }

// ❌ forbidden
export default function MySection() { ... }
```

## Design system — never deviate

- Colors → CSS vars mapped in `tailwind.config.ts` (e.g. `text-primary`, `bg-accent`)
- **Never hardcode hex values** in JSX
- Headings → `font-headline` class
- Body → `font-body` class
- No inline `style={{}}` — exception: `objectPosition` on `<Image>` (dynamic Tailwind can't handle arbitrary positioning)
- No new Google Fonts without updating `layout.tsx` + `tailwind.config.ts`

## WhatsApp URLs

Always use `formatWhatsAppUrl` from `src/lib/whatsapp.ts`:

```ts
import { formatWhatsAppUrl } from "@/lib/whatsapp"
const link = formatWhatsAppUrl() // basic
const link = formatWhatsAppUrl("Hola, me interesa un pedido") // with message
```

## Scroll reveal pattern

```tsx
const ref = useScrollReveal<HTMLElement>()   // sections
const ref = useScrollReveal<HTMLDivElement>() // divs
<section ref={ref} className="scroll-reveal section-padding">
```

## Forbidden patterns (quick list)

`npm` · `any` types · `console.log` · `style={{}}` (except objectPosition) · hardcoded hex · default section exports · `framer-motion` · business logic in `app/page.tsx` · cross-section imports · new fonts without config update

## Before adding any portfolio image

1. Convert to `.webp` → `public/images/portfolio/`
2. Add entry to `src/constants/portfolio.ts`
3. `featured: true` max 6 total
4. `aspectRatio` must match real file ratio

## Phase 1 status

All core sections done. Outstanding: image audit, Lighthouse ≥ 90, meta tags, sitemap, robots.txt, 404 page, launch checklist. See ROADMAP.md.

## pnpm commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm lint       # eslint
pnpm add <pkg>  # add dependency
```

Run `pnpm lint && pnpm build` before every commit.

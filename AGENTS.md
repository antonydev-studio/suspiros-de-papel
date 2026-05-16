# AGENTS.md — Suspiros de Papel

> Single source of truth for every AI agent or coding assistant working on this repo.
> Read this file **in full** before writing a single line of code.

---

## 1. Next.js Version Warning

This project runs **Next.js 16 (App Router)**. APIs, file conventions, and
component contracts **differ from your training data**. Before writing any
Next.js-specific code:

1. Run `cat node_modules/next/package.json | grep '"version"'` to confirm the
   exact version.
2. Consult `node_modules/next/dist/docs/` for authoritative API docs.
3. Treat any Next.js knowledge older than this version as potentially stale.

---

## 2. Package Manager — PNPM Only

**npm is BANNED.** Never run `npm`, never write `npm install`, never generate a
`package-lock.json`. If one appears, delete it immediately.

| ❌ Forbidden | ✅ Required |
|---|---|
| `npm install` | `pnpm install` |
| `npm run dev` | `pnpm dev` |
| `npm run build` | `pnpm build` |
| `npm add <pkg>` | `pnpm add <pkg>` |
| `package-lock.json` | `pnpm-lock.yaml` |

If you detect a `package-lock.json` in the repo, remove it:

```bash
rm package-lock.json
pnpm install   # regenerates pnpm-lock.yaml
```

---

## 3. Project Identity

| Key | Value |
|---|---|
| **Business** | Suspiros de Papel |
| **Domain** | Personalized gifts — sublimation, laser engraving, stationery |
| **Market** | Mexican consumers (Zihuatanejo / Guerrero) |
| **Stack** | Next.js · TypeScript · Tailwind CSS |
| **Phase** | 1 — Landing page (portfolio + lead capture) |
| **Contact CTA** | WhatsApp only (`SITE.whatsapp` from `src/constants/site.ts`) |

---

## 4. Language & Naming Conventions

| Scope | Language | Example |
|---|---|---|
| File names | English, PascalCase for components | `HeroContent.tsx` |
| Component names | English, PascalCase | `PortfolioCard` |
| Variable / function names | English, camelCase | `filteredItems` |
| Type / interface names | English, PascalCase | `PortfolioItem` |
| Code comments | English | `// Filter featured items` |
| UI copy & labels | Spanish | `"Cotiza tu pedido"` |
| CSS class names | English (Tailwind utilities) | `section-padding` |

---

## 5. Directory Contract

```
src/
  app/              # Next.js App Router — pages and layouts only
  components/
    ui/             # Primitive, stateless components (Button, Container…)
    layout/         # Chrome: Navbar, Footer
    sections/       # Page sections: Hero, Services, Portfolio…
  constants/        # Static data: site.ts, portfolio.ts, services.tsx
  hooks/            # Custom hooks: useScrollReveal.ts
  lib/              # Pure utility functions (no side effects)
  types/            # Shared TypeScript types (index.ts)
  features/         # Reserved for Phase 2 features (orders, admin…)
```

**Rules:**
- Never put business logic inside `app/` pages — delegate to `sections/` or
  `features/`.
- Never import a `sections/` component from another `sections/` component —
  compose at the `app/` page level only.
- `constants/` files are pure data — no React, no side effects.

---

## 6. Design System — Do Not Deviate

### Colors
All colours are CSS variables in `src/app/globals.css` and mapped to Tailwind
extensions in `tailwind.config.ts`. **Never hardcode hex values in JSX.**

| Token | CSS Var | Usage |
|---|---|---|
| primary | `--color-primary` | Buttons, headings accent |
| secondary | `--color-secondary` | Subheadings, borders |
| accent | `--color-accent` | Highlights, hover states |
| background | `--color-background` | Page background |
| olive | `--color-olive` | Logo, decorative elements |

### Typography
| Role | Class | Font |
|---|---|---|
| Headings | `font-headline` | Noto Serif |
| Body | `font-body` | Plus Jakarta Sans |

- **Italic** is reserved for important display headings only — never body text.
- Never add new Google Fonts without updating `layout.tsx` and `tailwind.config.ts`.

### Animations
- Use the existing `useScrollReveal` hook — **do not install framer-motion**.
- Section entry pattern: `section-padding scroll-reveal` CSS classes.
- Hover states: Tailwind `transition-*` utilities only.

---

## 7. Code Quality Non-Negotiables

### SOLID
- **S** — Each component/function has one responsibility.
- **O** — Extend via props/composition; never modify shared primitives.
- **L** — Subtypes honour the contract of their base (e.g. all section props
  extend a common `SectionProps`).
- **I** — Keep prop interfaces narrow; no "god object" props.
- **D** — Depend on abstractions (types, hooks) not concrete implementations.

### DRY
- If a pattern appears twice → extract a component or utility.
- Shared strings live in `src/constants/` — never inline them in JSX.

### Clean Code Checklist
- [ ] No `any` types — use proper generics or `unknown`.
- [ ] No unused imports or variables (`eslint --fix` must pass).
- [ ] No inline styles (`style={{}}`) — use Tailwind or CSS vars.
- [ ] Props interfaces documented with JSDoc `/** */` on complex types.
- [ ] Components ≤ 150 lines — split if longer.
- [ ] No `console.log` in committed code.

---

## 8. Component Authoring Template

```tsx
// src/components/sections/ExampleSection.tsx

import { Container } from "@/components/ui/Container"
import { useScrollReveal } from "@/hooks/useScrollReveal"

/** Props for ExampleSection */
interface ExampleSectionProps {
  /** Override the default heading */
  heading?: string
}

/**
 * ExampleSection — brief description of what this renders.
 */
export function ExampleSection({ heading = "Default" }: ExampleSectionProps) {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="section-padding scroll-reveal">
      <Container>
        <h2 className="font-headline text-3xl text-primary">{heading}</h2>
      </Container>
    </section>
  )
}
```

---

## 9. Adding Portfolio Items

1. Convert image to `.webp` → place in `public/images/portfolio/`.
2. Add an entry to `src/constants/portfolio.ts` following the documented
   template inside that file.
3. Set `featured: true` only if it should appear on the home page preview
   (maximum **6** featured items total).
4. Choose `aspectRatio` to match the file's actual proportions — wrong ratio
   causes object-cover to crop incorrectly.

---

## 10. Adding a New Section

1. Create `src/components/sections/MySectionName.tsx`.
2. Export a named function (not default export) matching PascalCase filename.
3. Import and place it in `src/app/page.tsx` in the correct DOM order.
4. If the section needs its own data, add a constant to `src/constants/`.
5. Run `pnpm lint` and `pnpm build` — both must pass before committing.

---

## 11. Environment Variables

- Store secrets in `.env.local` (gitignored).
- Expose to the browser only with the `NEXT_PUBLIC_` prefix.
- Document every variable in `.env.example` with a placeholder value and
  comment explaining its purpose.
- Never hard-code API keys, phone numbers, or credentials in source files —
  reference `SITE` constants or env vars.

---

## 12. Phase 2 Preparation Rules

- The `src/features/` directory is **reserved** for Phase 2 (admin panel,
  orders, Supabase integration).
- Do **not** create files inside `src/features/` during Phase 1 unless
  explicitly instructed.
- When Phase 2 work begins, read `ROADMAP.md` and `ARCHITECTURE.md` before
  touching any existing Phase 1 file.
- Database migrations go in `supabase/migrations/` — never alter the DB schema
  directly.

---

## 13. Commit Hygiene

```
feat(portfolio): add servilleta-personalizada image
fix(navbar): prevent scroll-lock on mobile menu close
chore: remove package-lock.json, migrate to pnpm
docs: update ROADMAP Phase 2 milestones
```

Format: `type(scope): short imperative description`
Types: `feat` · `fix` · `chore` · `docs` · `refactor` · `style` · `test`

---

## 14. Forbidden Patterns

| Pattern | Reason |
|---|---|
| `npm` any command | pnpm only |
| `any` TypeScript type | Defeats type safety |
| `console.log` in commits | Use proper error boundaries |
| Inline `style={{}}` | Breaks design system |
| Hardcoded hex colors | Must use CSS vars / Tailwind tokens |
| Default exports for sections | Makes refactoring harder |
| Framer Motion (Phase 1) | Not installed; use `useScrollReveal` |
| Business logic in `app/page.tsx` | Delegate to sections or features |
| New Google Fonts without config update | Breaks font loading |

---

## 15. AI Agent Skills Orchestration

> Full inventory: `.claude/SKILLS.md`  
> Cursor rules: `.cursor/rules/`  
> Skills live in `~/.agents/skills/` (Claude Code) and `~/.cursor/skills-cursor/` (Cursor)

### Always-Active Skills
- `napkin` — reads/curates `.claude/napkin.md` every session (auto)
- `caveman` — terse response mode (session hook)
- `commit-suggest` — appended after every file-change response

### Context → Skill Map

| Task | Claude Code | Cursor |
|---|---|---|
| UI / component work | `/frontend-design` + `/responsive-design` + `/vercel-react-best-practices` | `frontend` rule (auto) |
| Tailwind / design system | `/tailwind-design-system` + `/frontend-design` | `frontend` rule (auto) |
| Performance audit | `/vercel:performance-optimizer` + `/vercel-react-best-practices` | `nextjs` rule (auto) |
| SEO / launch prep | `/seo-audit` + `/seo-technical` + `/seo-sitemap` + `/seo-schema` | `seo` rule (auto) |
| Code review | `/review` + `/web-design-guidelines` + `/caveman:caveman-review` | manual |
| Refactor | `/simplify` + `/review` + `/vercel-react-best-practices` | `nextjs` rule (auto) |
| Deployment | `/vercel:deploy` + `/vercel:env` | manual |
| Copy review | `/humanizer` | manual |
| Security (Phase 2) | `/security-review` | manual |
| pnpm issues | `/pnpm` | `pnpm` rule (auto) |
| Find new skills | `/find-skills` + `/skill-creator` | — |

### Architecture Rules (Always Enforced)
- SOLID principles — one responsibility per component/function
- Directory contract (see §5) — enforced by layer import rules
- Named exports only — `export function`, never `export default`
- Design system tokens — CSS vars, never hex
- Phase boundary — `features/` reserved for Phase 2
- pnpm only — `npm` is banned

---

*Last updated: 2026-05-15 — Suspiros de Papel, Phase 1*
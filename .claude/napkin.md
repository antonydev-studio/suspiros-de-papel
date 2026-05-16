# Napkin Runbook — Suspiros de Papel

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

---

## Execution & Validation (Highest Priority)

1. **[2026-05-15] Always run lint+build before commit**
   Do instead: `pnpm lint && pnpm build` — both must pass or do not commit.

2. **[2026-05-15] pnpm only — npm is banned**
   Do instead: `pnpm add`, `pnpm dev`, `pnpm build`. Delete `package-lock.json` if it appears.

3. **[2026-05-15] Named exports only — no default exports for sections/components**
   Do instead: `export function MySection()` — never `export default function`.

4. **[2026-05-15] No `any` TypeScript type**
   Do instead: Use proper generics or `unknown`. ESLint will catch this.

5. **[2026-05-15] No `console.log` in committed code**
   Do instead: Remove all console.log before `pnpm lint`.

---

## Shell & Command Reliability

1. **[2026-05-15] Confirm Next.js version before writing Next-specific code**
   Do instead: `cat node_modules/next/package.json | grep '"version"'`

2. **[2026-05-15] Phase 1 — `src/features/` is reserved, do not touch**
   Do instead: All Phase 1 work goes in `sections/`, `ui/`, `constants/`, `hooks/`, `lib/`.

3. **[2026-05-15] robots.ts and sitemap.ts live in `src/app/` (App Router)**
   Do instead: `src/app/robots.ts` and `src/app/sitemap.ts` — Next.js generates `/robots.txt` and `/sitemap.xml` automatically.

4. **[2026-05-15] `SITE.url` is the canonical domain — update in site.ts when domain is set**
   Do instead: All canonical URLs, OG, sitemap derive from `SITE.url`. Change once, propagates everywhere.

---

## Design System Guardrails

1. **[2026-05-15] Never hardcode hex colors in JSX**
   Do instead: Use CSS var tokens: `text-primary`, `bg-accent`, `text-secondary`, etc.

2. **[2026-05-15] No inline `style={{}}` — except `objectPosition` on `<Image>`**
   Do instead: Use Tailwind utilities. Only exception: dynamic `objectPosition` where Tailwind can't handle arbitrary values.

3. **[2026-05-15] No framer-motion in Phase 1**
   Do instead: Use `useScrollReveal` hook + `section-padding scroll-reveal` classes.

4. **[2026-05-15] No new Google Fonts without updating layout + tailwind config**
   Do instead: Edit `src/app/layout.tsx` AND `tailwind.config.ts` together, or skip.

---

## Domain Behavior Guardrails

1. **[2026-05-15] WhatsApp links must use `formatWhatsAppUrl`**
   Do instead: `import { formatWhatsAppUrl } from "@/lib/whatsapp"` — never hardcode wa.me URLs.

2. **[2026-05-15] Portfolio images require WebP + aspectRatio match**
   Do instead: Convert to `.webp`, place in `public/images/portfolio/`, set `aspectRatio` to match real file ratio.

3. **[2026-05-15] Cross-section imports are forbidden**
   Do instead: Compose sections only at `app/page.tsx` level. Sections never import other sections.

4. **[2026-05-15] UI copy is Spanish, code/names are English**
   Do instead: Spanish for all user-visible strings. English for file names, vars, comments, types.

---

## User Directives

1. **[2026-05-15] Caveman mode active every response**
   Do instead: Drop articles, filler, pleasantries. Fragments OK. Technical terms exact. Off only if user says "stop caveman".

2. **[2026-05-15] Append commit suggestion after every response with file changes**
   Do instead: End response with single line: `git commit -m "type: brief description in English"`

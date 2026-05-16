# Skills Orchestration — Suspiros de Papel

> AI agent skill map for this repo. Updated 2026-05-15.
> Skills from two sources: `~/.agents/skills/` (Claude Code) and `~/.claude/skills/` (Claude Code).
> Cursor skills live in `~/.cursor/skills-cursor/` and are wired via `.cursor/rules/`.

---

## Honest Inventory

### What "skills" actually are

Claude Code skills = slash commands backed by SKILL.md prompt files.
They augment behavior for specific tasks. They do NOT replace TypeScript/React
knowledge — that comes from base training + CLAUDE.md + AGENTS.md.

The "always-on" architecture, TypeScript, React, Tailwind rules live in
**AGENTS.md** and **CLAUDE.md** — those ARE always active.

---

## Always-Active Skills

| Skill | Source | Trigger | Purpose |
|---|---|---|---|
| `napkin` | `~/.claude/skills/` | Every session (auto) | Curates `.claude/napkin.md` runbook |
| `caveman` | `~/.agents/skills/` | Session hook (auto) | Terse, high-signal responses |
| `commit-suggest` | `~/.claude/skills/` | After file changes | Conventional commit message |

---

## Available Skills — `~/.agents/skills/` (Claude Code)

| Skill | When to invoke |
|---|---|
| `/frontend-design` | Any UI component, section, or layout work |
| `/responsive-design` | Mobile-first layouts, container queries, fluid typography |
| `/tailwind-design-system` | Tailwind v4 tokens, component variants, dark mode |
| `/vercel-react-best-practices` | React 19/Next.js 16 patterns, waterfalls, bundle size |
| `/web-design-guidelines` | UI code review against Vercel web interface guidelines |
| `/pnpm` | Workspace config, lockfile issues, CI/CD pnpm setup |
| `/css-animations` | CSS keyframe patterns, animation-fill-mode |
| `/seo-audit` | Full SEO audit before launch |
| `/find-skills` | Discover new installable agent skills |
| `/skill-creator` | Create or improve skills, run evals |

---

## Available Skills — `~/.claude/skills/` (Claude Code)

### Code Quality & Review
| Skill | When to invoke |
|---|---|
| `/review` | PR diff review, before merge |
| `/security-review` | Before deploying auth/API routes (Phase 2) |
| `/simplify` | After adding new components — check reuse + quality |
| `/caveman:caveman-review` | Terse code review with severity tags |

### Next.js / React / Performance
| Skill | When to invoke |
|---|---|
| `/vercel:nextjs` | Next.js 16 patterns, App Router questions |
| `/vercel:react-best-practices` | React 19 patterns, hooks, performance |
| `/vercel:performance-optimizer` | Lighthouse audit, Core Web Vitals, bundle size |
| `/vercel:next-cache-components` | ISR/cache strategy questions |

### Deployment
| Skill | When to invoke |
|---|---|
| `/vercel:deploy` | Vercel deploy, CI/CD setup |
| `/vercel:env` | Environment variable management |
| `/vercel:vercel-functions` | API routes (Phase 2) |

### SEO & Launch (Phase 1 remaining tasks)
| Skill | When to invoke |
|---|---|
| `/seo` | Full SEO audit orchestration |
| `/seo-technical` | Crawlability, indexability, robots.txt |
| `/seo-sitemap` | Generate/validate sitemap.xml |
| `/seo-schema` | JSON-LD structured data |
| `/seo-page` | Per-page meta tags, Open Graph |

### Copy & Content
| Skill | When to invoke |
|---|---|
| `/humanizer` | Review Spanish UI copy for naturalness |

### Utilities
| Skill | When to invoke |
|---|---|
| `/fewer-permission-prompts` | Reduce bash permission prompts |
| `/update-config` | Modify settings.json, hooks, permissions |

---

## Dynamic Orchestration Map

```
UI / component work
  → /frontend-design + /responsive-design + /vercel-react-best-practices + /simplify

Design system / Tailwind
  → /tailwind-design-system + /frontend-design

Performance work
  → /vercel:performance-optimizer + /vercel-react-best-practices + /vercel:nextjs

SEO / launch prep
  → /seo-audit + /seo-technical + /seo-sitemap + /seo-schema + /seo-page

Phase 1 → Phase 2 transition
  → /security-review + /vercel:vercel-functions + /vercel:env

Code review
  → /caveman:caveman-review OR /review + /web-design-guidelines

Refactoring
  → /simplify + /review + /vercel-react-best-practices

pnpm / workspace issues
  → /pnpm

New skills needed?
  → /find-skills + /skill-creator
```

---

## Cursor Integration

Cursor skills are wired via `.cursor/rules/` in this project root.
Rules auto-activate based on file glob patterns. See `.cursor/rules/` for details.

---

*Last updated: 2026-05-15 — Suspiros de Papel, Phase 1*

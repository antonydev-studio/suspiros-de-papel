# /src/features — Phase 2 Domain Logic

This directory is reserved for **Phase 2** feature modules (order system, contact flows, admin panel).

It is intentionally empty during Phase 1 (the marketing landing page).

---

## Planned features

| Folder | Description |
|--------|-------------|
| `orders/` | Customer order creation, status tracking, and history |
| `contact/` | Contact form submission and WhatsApp routing logic |
| `auth/` | Admin authentication (owner login for order management) |
| `admin/` | Order dashboard, status updates, product management |

---

## Folder convention

Each feature folder should contain:

```
features/<feature>/
  types.ts        ← domain types specific to this feature
  constants.ts    ← feature-level constants and config values
  hooks/          ← React hooks (data fetching, form state, etc.)
  components/     ← UI components scoped to this feature
```

Shared/cross-feature types live in `/src/types/index.ts`.
API route handlers live in `/src/app/api/`.

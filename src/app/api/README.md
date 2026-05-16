# /src/app/api — Next.js Route Handlers (Phase 2)

This directory is reserved for **Phase 2** API routes built with the
[Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) convention (`route.ts` files).

It is intentionally empty during Phase 1 (static landing page — no server-side data mutations needed).

---

## Planned endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/orders` | Create a new customer order |
| `GET` | `/api/orders/[id]` | Fetch a single order by ID |
| `PATCH` | `/api/orders/[id]` | Update order status (admin only) |
| `POST` | `/api/contact` | Submit a contact form inquiry |

---

## Convention

Each route file follows Next.js App Router convention:

```
app/api/<resource>/
  route.ts            ← GET / POST handlers for the collection
  [id]/
    route.ts          ← GET / PATCH / DELETE handlers for a single resource
```

Handler logic (validation, DB access) should live in `/src/features/<feature>/`,
not inline inside the route file.

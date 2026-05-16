// ─── PHASE 1 — Active types ───────────────────────────────────────────────────

/**
 * A single image entry used in masonry gallery displays.
 * Currently defined but not consumed by any component (reserved for future
 * gallery features). Active portfolio items use PortfolioItem from constants/portfolio.ts.
 */
export type GalleryItem = {
  id: string
  src: string
  alt: string
  /** Controls the aspect ratio slot in the masonry grid. */
  size: "short" | "med" | "long"
}

// ─── PHASE 2 — NOT IN USE ─────────────────────────────────────────────────────
// These types are scaffolded for the upcoming order-management system.
// Do not import or use them until Phase 2 development begins.
// See /src/features/README.md for the planned feature structure.

/** All possible states an order can move through from submission to delivery. */
// [PHASE 2 — NOT IN USE]
export type OrderStatus =
  | "PENDING"
  | "DESIGNING"
  | "IN_PRODUCTION"
  | "READY"
  | "DELIVERED"

/** Represents a customer order in the Phase 2 order-management system. */
// [PHASE 2 — NOT IN USE]
export type Order = {
  id: string
  customerName: string
  product: string
  quantity: number
  status: OrderStatus
  createdAt: Date
}

/** Shape of the contact form submitted by a customer. */
// [PHASE 2 — NOT IN USE]
export type ContactForm = {
  name: string
  phone: string
  message: string
  productInterest: string
}

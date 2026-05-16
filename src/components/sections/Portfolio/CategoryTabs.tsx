"use client"

import { type PortfolioCategory, PORTFOLIO_CATEGORIES } from "@/constants/portfolio"

/** Props for the CategoryTabs filter bar. */
type Props = {
  /** The currently selected category id. */
  active: PortfolioCategory
  /** Called when the user selects a different category tab. */
  onChange: (cat: PortfolioCategory) => void
}

export function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {PORTFOLIO_CATEGORIES.map((cat) => {
        const isActive = active === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`
              px-6 py-2.5 rounded-full text-sm font-semibold
              border transition-all duration-300
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
              ${
                isActive
                  ? "bg-primary text-on-primary border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary bg-transparent"
              }
            `}
          >
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}

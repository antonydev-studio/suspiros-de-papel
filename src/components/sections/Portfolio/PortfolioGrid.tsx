"use client"

import { useState } from "react"
import { type PortfolioItem, type PortfolioCategory, filterByCategory } from "@/constants/portfolio"
import { PortfolioCard } from "./PortfolioCard"
import { CategoryTabs } from "./CategoryTabs"

/** Props for the masonry-style portfolio grid. */
type Props = {
  /** Items to display; pass FEATURED_ITEMS for home preview or PORTFOLIO_ITEMS for full page. */
  initialItems: PortfolioItem[]
  /** When true, renders the CategoryTabs filter bar above the grid. */
  showFilters?: boolean
  /** When true, renders a "Cargar más" button once initialVisible items are shown. */
  showLoadMore?: boolean
  /** Number of items visible before the load-more button appears. Defaults to all items. */
  initialVisible?: number
}

export function PortfolioGrid({
  initialItems,
  showFilters = false,
  showLoadMore = false,
  initialVisible,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("todo")
  const [visible, setVisible] = useState(initialVisible ?? 999)

  const displayItems = showFilters ? filterByCategory(activeCategory) : initialItems
  const shownItems = displayItems.slice(0, visible)
  const hasMore = visible < displayItems.length

  const handleCategoryChange = (cat: PortfolioCategory) => {
    setActiveCategory(cat)
    setVisible(initialVisible ?? 999)
  }

  return (
    <div className="space-y-10">
      {showFilters && (
        <CategoryTabs active={activeCategory} onChange={handleCategoryChange} />
      )}

      <div
        className="
          columns-1
          sm:columns-2
          lg:columns-3
          gap-5
          [column-fill:_balance]
        "
      >
        {shownItems.map((item, i) => (
          <div key={item.id} className="break-inside-avoid mb-5">
            <PortfolioCard item={item} priority={i < 6} />
          </div>
        ))}
      </div>

      {showLoadMore && hasMore && (
        <div className="text-center pt-4">
          <button
            onClick={() => setVisible((v) => v + 6)}
            className="
              px-10 py-4 rounded-full border-2 border-primary/30
              text-primary font-semibold text-sm uppercase tracking-widest
              hover:bg-primary hover:text-on-primary hover:border-primary
              transition-all duration-300
            "
          >
            Cargar más
          </button>
        </div>
      )}
    </div>
  )
}

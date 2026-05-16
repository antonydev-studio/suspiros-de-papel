"use client"

import Link from "next/link"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Container } from "@/components/ui/Container"
import { PortfolioGrid } from "./PortfolioGrid"
import { FEATURED_ITEMS } from "@/constants/portfolio"

const IconArrow = () => (
  <svg
    width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

export function PortfolioPreview() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="portfolio"
      className="scroll-reveal scroll-mt-20 py-20 lg:py-32 bg-surface-container-low relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-fixed/20 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-eyebrow mb-4">
              Nuestro Trabajo
            </p>
            <h2 className="section-heading leading-tight">
              Piezas creadas{" "}
              <br className="hidden lg:block" />
              <span className="italic font-normal">con alma.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="
              group hidden md:inline-flex items-center gap-3
              text-primary font-semibold text-sm uppercase tracking-widest
              border-b-2 border-primary/30 hover:border-primary
              pb-1 transition-all duration-300
              whitespace-nowrap
            "
          >
            Ver todo el portafolio
            <IconArrow />
          </Link>
        </div>

        <PortfolioGrid
          initialItems={FEATURED_ITEMS}
          showFilters={false}
          showLoadMore={false}
        />

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/portfolio"
            className="
              group inline-flex items-center gap-3
              px-10 py-4 rounded-full
              bg-primary text-on-primary font-semibold
              shadow-lg shadow-primary/20
              hover:-translate-y-0.5 transition-all duration-300
            "
          >
            Ver todo el portafolio
            <IconArrow />
          </Link>
        </div>
      </Container>
    </section>
  )
}

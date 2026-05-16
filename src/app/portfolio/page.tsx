import type { Metadata } from "next"
import { SITE } from "@/constants/site"
import { Container } from "@/components/ui/Container"
import { PortfolioGrid } from "@/components/sections/Portfolio/PortfolioGrid"
import { PORTFOLIO_ITEMS } from "@/constants/portfolio"

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Explora nuestra colección completa de piezas personalizadas: tazas, textil, papelería, accesorios y regalos para eventos.",
  alternates: {
    canonical: `${SITE.url}/portfolio`,
  },
  openGraph: {
    title: `Portafolio | ${SITE.name}`,
    description:
      "Explora nuestra colección completa de piezas personalizadas: tazas, textil, papelería, accesorios y regalos para eventos.",
    url: `${SITE.url}/portfolio`,
    images: [{ url: "/images/portfolio/Agenda-personalizada.webp", alt: "Portafolio — Suspiros De Papel" }],
  },
}

export default function PortfolioPage() {
  return (
    <main className="pt-28 pb-32 min-h-screen bg-background">
      <Container>
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-primary text-xs font-bold uppercase tracking-eyebrow mb-4">
            Portafolio completo
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-on-surface mb-6">
            Nuestro{" "}
            <span className="italic font-normal">Trabajo</span>
          </h1>
          <div className="w-20 h-0.5 bg-primary/30 mx-auto mb-8 rounded-full" />
          <p className="text-on-surface-variant text-lg font-light max-w-xl mx-auto">
            Cada pieza cuenta una historia. Aquí están las nuestras.
          </p>
        </div>

        <PortfolioGrid
          initialItems={PORTFOLIO_ITEMS}
          showFilters={true}
          showLoadMore={true}
          initialVisible={9}
        />
      </Container>
    </main>
  )
}

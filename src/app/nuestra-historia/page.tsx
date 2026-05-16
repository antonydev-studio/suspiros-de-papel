import type { Metadata } from "next"
import { SITE } from "@/constants/site"
import { Container } from "@/components/ui/Container"
import { OurStory } from "@/components/sections/OurStory"

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description:
    "Conoce a Yahaira, la persona detrás de Suspiros de Papel. Desde marzo de 2022, más de 5,000 pedidos personalizados hechos con cuidado desde Zihuatanejo para todo México.",
  alternates: {
    canonical: `${SITE.url}/nuestra-historia`,
  },
  openGraph: {
    title: `Nuestra Historia | ${SITE.name}`,
    description:
      "Conoce a Yahaira, la persona detrás de Suspiros de Papel. Desde marzo de 2022, más de 5,000 pedidos personalizados hechos con cuidado desde Zihuatanejo para todo México.",
    url: `${SITE.url}/nuestra-historia`,
  },
}

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface-container-low">
        <Container>
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-5">
              {SITE.name}
            </p>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface mb-6">
              Nuestra{" "}
              <span className="italic font-normal">Historia</span>
            </h1>
            <div className="w-20 h-0.5 bg-primary/30 mb-8 rounded-full" />
            <p className="text-on-surface-variant text-xl font-light leading-relaxed max-w-xl">
              Hola, soy Yahaira. Te cuento cómo empezó todo esto y por qué
              cada pedido que hago lleva un pedacito de mí.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Secciones ─────────────────────────────────────── */}
      <OurStory />
    </main>
  )
}

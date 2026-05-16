import type { Metadata } from "next"
import { SITE } from "@/constants/site"
import { Container } from "@/components/ui/Container"
import { FAQ } from "@/components/sections/FAQ"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Resolvemos tus dudas sobre pedidos, personalización, pagos, envíos, productos y garantías. Yahaira te responde directamente.",
  alternates: {
    canonical: `${SITE.url}/faq`,
  },
  openGraph: {
    title: `Preguntas Frecuentes | ${SITE.name}`,
    description:
      "Resolvemos tus dudas sobre pedidos, personalización, pagos, envíos, productos y garantías. Yahaira te responde directamente.",
    url: `${SITE.url}/faq`,
  },
}

export default function FAQPage() {
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
              Preguntas{" "}
              <span className="italic font-normal">Frecuentes</span>
            </h1>
            <div className="w-20 h-0.5 bg-primary/30 mb-8 rounded-full" />
            <p className="text-on-surface-variant text-xl font-light leading-relaxed max-w-xl">
              Aquí resuelvo las dudas que me preguntan más seguido — con la misma honestidad con la que trabajo.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Secciones ─────────────────────────────────────── */}
      <FAQ />
    </main>
  )
}

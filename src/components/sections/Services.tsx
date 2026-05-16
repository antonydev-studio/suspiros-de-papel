"use client"
import { useEffect, useRef, useState } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Container } from "@/components/ui/Container"
import { SERVICES, type ServiceVariant } from "@/constants/services"

// ── Hook: revela descripción al entrar al viewport (solo móvil/tablet) ────────
function useDescReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timer: ReturnType<typeof setTimeout> | null = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setVisible(true), 150)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timer !== null) clearTimeout(timer)
    }
  }, [])

  return { ref, visible }
}

// ── SVG Icons ────────────────────────────────────────────────────────────────
const IconCoffee = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
)
const IconLaser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 1 3 3v1H9V5a3 3 0 0 1 3-3z" />
    <path d="M9 6h6l1 5H8L9 6z" />
    <path d="M8 11H5l-1 9h16l-1-9h-3" />
    <path d="M12 11v4" />
    <path d="M9 15h6" />
  </svg>
)
const IconSparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M5 15l.75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75L5 15z" />
    <path d="M19 2l.5 1.5L21 4l-1.5.5L19 6l-.5-1.5L17 4l1.5-.5L19 2z" />
  </svg>
)
const IconCelebration = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.8 11.3L2 22l10.7-3.79" />
    <path d="M4 3h.01" />
    <path d="M22 8h.01" />
    <path d="M15 2h.01" />
    <path d="M22 20h.01" />
    <path d="M22 2l-7.5 7.5" />
    <path d="M10 10l-5 5" />
    <path d="M5 3l1.5 1.5" />
    <path d="M18 8l1.5-1.5" />
    <circle cx="16.5" cy="7.5" r="2.5" />
  </svg>
)
const ICONS: Record<string, React.ReactNode> = {
  sublimation: <IconCoffee />,
  laser:       <IconLaser />,
  stationery:  <IconSparkles />,
  events:      <IconCelebration />,
}
// ─────────────────────────────────────────────────────────────────────────────

const cardStyles: Record<ServiceVariant, {
  card: string
  iconBg: string
  iconText: string
  tagBg: string
  descText: string
  offset: string
}> = {
  light: {
    card:     "bg-surface-container-lowest text-on-surface",
    iconBg:   "bg-surface-container-lowest",
    iconText: "text-primary",
    tagBg:    "bg-surface-container-lowest/60 text-on-surface",
    descText: "text-on-surface-variant",
    offset:   "",
  },
  "dark-tertiary": {
    card:     "bg-tertiary text-on-primary",
    iconBg:   "bg-on-primary/10",
    iconText: "text-on-primary",
    tagBg:    "bg-on-primary/10 text-on-primary",
    descText: "text-on-primary/70",
    offset:   "xl:translate-y-12",
  },
  "dark-primary": {
    card:     "bg-primary text-on-primary",
    iconBg:   "bg-on-primary/10",
    iconText: "text-on-primary",
    tagBg:    "bg-on-primary/10 text-on-primary",
    descText: "text-on-primary/70",
    offset:   "xl:translate-y-12",
  },
}

// ── Tarjeta individual ────────────────────────────────────────────────────────
function ServiceCard({
  service,
  s,
}: {
  service: (typeof SERVICES)[number]
  s: (typeof cardStyles)[ServiceVariant]
}) {
  const { ref, visible } = useDescReveal()

  return (
    <div
      ref={ref}
      className={`group relative min-h-[280px] lg:min-h-[320px] xl:min-h-0 xl:aspect-[3/4] rounded-card overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${s.card} ${s.offset}`}
    >
      {/* Icono */}
      <div className={`absolute top-6 left-6 xl:top-10 xl:left-10 w-14 h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${s.iconBg} ${s.iconText}`}>
        {ICONS[service.id]}
      </div>

      {/* Contenido inferior */}
      <div className="absolute bottom-6 left-6 right-6 xl:bottom-10 xl:left-10 xl:right-10">
        <h3 className="text-xl xl:text-2xl font-headline font-bold mb-4">
          {service.title}
        </h3>
        <p
          className={`text-sm leading-relaxed mb-4 xl:mb-6 transition-all duration-500
            xl:opacity-0 xl:translate-y-4 xl:group-hover:opacity-100 xl:group-hover:translate-y-0 xl:transition-all xl:duration-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            ${s.descText}`}
        >
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full ${s.tagBg}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Sección principal ─────────────────────────────────────────────────────────
export function Services() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="services"
      className="scroll-reveal section-padding relative overflow-hidden line-art-bg scroll-mt-20"
    >
      {/* Blob decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 blur-3xl organic-blob" />

      <Container>
        {/* Header */}
        <div className="text-center mb-12 lg:mb-24 relative">
          <h2 className="section-heading mb-6">
            Tienes un proyecto{" "}
            <br />
            <span className="italic font-normal">especial?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-30 mb-8" />
          <p className="text-on-surface-variant text-xl font-light max-w-2xl mx-auto">
            Soluciones creativas donde la técnica y la inspiración se encuentran.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              s={cardStyles[service.variant]}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

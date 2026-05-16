"use client"

import { Container } from "@/components/ui/Container"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { formatWhatsAppUrl } from "@/lib/whatsapp"

// ─── Sub-components with individual scroll reveals ───────────────────────────

function StorySection() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section
      ref={ref}
      className="scroll-reveal section-padding"
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow mb-4">
            Cómo empezó todo
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-8">
            Una amiga, un empujón{" "}
            <span className="italic font-normal">y muchas ganas</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary/30 mb-10 rounded-full" />
          <div className="space-y-6 text-on-surface-variant text-lg font-light leading-relaxed">
            <p>
              Todo comenzó en marzo del 2022. Tenía años haciendo manualidades
              por gusto, por amor a crear cosas con mis manos — pero nunca
              me había atrevido a convertirlo en algo más. Fue una amiga la que
              me dio ese empujón que necesitaba: <em>&ldquo;Yahaira, esto que haces
              es hermoso, ¿por qué no lo compartes con el mundo?&rdquo;</em>
            </p>
            <p>
              Le hice caso. Y desde ese día no he parado.
            </p>
            <p>
              Arrancé desde cero, desde mi casa, en Zihuatanejo. Sin tienda,
              sin empleados, sin gran presupuesto — solo mis herramientas,
              mis ganas y mucha ilusión. Hoy, cada pedido sigue pasando por
              mis manos. Yo misma diseño, produzco, empaco y coordino la
              entrega. Cuando se necesita, cuento con ayuda, pero el cuidado
              y la responsabilidad siempre son míos.
            </p>
            <p>
              Sin local físico por ahora — los pedidos locales los coordino
              directamente contigo, y hago envíos a todo México. Pero sueño
              con tener un espacio propio algún día donde pueda recibir a mis
              clientes cara a cara.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function StatsSection() {
  const ref = useScrollReveal<HTMLElement>()

  const stats = [
    {
      value: "Marzo 2022",
      label: "El inicio de todo",
      detail: "Cuando una amiga me animó a emprender lo que siempre amé",
    },
    {
      value: "+5,000",
      label: "Pedidos entregados",
      detail: "Y orgullosa de cada uno — cada uno fue hecho con cuidado",
    },
    {
      value: "Atención directa",
      label: "Sin intermediarios",
      detail: "Yo misma te atiendo, de principio a fin, siempre",
    },
    {
      value: "Garantía total",
      label: "Mi nombre lo avala",
      detail: "Si algo no quedó bien, lo resolvemos. Punto.",
    },
  ]

  return (
    <section
      ref={ref}
      className="scroll-reveal section-padding bg-surface-container-low"
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-background rounded-2xl p-8 border border-outline-variant/20 flex flex-col gap-2"
            >
              <span className="font-headline text-2xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="font-semibold text-on-surface text-sm uppercase tracking-wide">
                {stat.label}
              </span>
              <span className="text-on-surface-variant text-sm font-light leading-snug">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ValuesSection() {
  const ref = useScrollReveal<HTMLElement>()

  const values = [
    {
      icon: "✦",
      title: "Atendo cada pedido yo misma",
      body:
        "No hay un equipo de ventas ni un bot que responda por mí. Cuando me escribes, me escribes a mí. Conozco cada pedido, cada historia, cada fecha importante que me compartes.",
    },
    {
      icon: "◈",
      title: "Garantizo lo que entrego",
      body:
        "Me importa que quedes contenta o contento con tu pedido. Si algo no cumplió con lo que acordamos, lo revisamos juntos y encontramos una solución. Mi reputación se construye pedido a pedido.",
    },
    {
      icon: "◇",
      title: "Siempre estoy mejorando",
      body:
        "Cada pedido me enseña algo. Escucho a mis clientes, aprendo de cada proyecto y busco que la siguiente pieza sea aún mejor que la anterior. Eso no va a cambiar.",
    },
  ]

  return (
    <section
      ref={ref}
      className="scroll-reveal section-padding"
    >
      <Container>
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-4">
            Lo que me define
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
            Mis valores,{" "}
            <span className="italic font-normal">mi manera de trabajar</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary/30 mx-auto mt-8 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-outline-variant/20 p-8 flex flex-col gap-4 bg-surface-container-low"
            >
              <span className="text-primary text-2xl">{v.icon}</span>
              <h3 className="font-headline text-xl font-bold text-on-surface">
                {v.title}
              </h3>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function HowWeWorkSection() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section
      ref={ref}
      className="scroll-reveal section-padding bg-surface-container-low"
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow mb-4">
            Cómo trabajamos
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-8">
            Envíos y pagos,{" "}
            <span className="italic font-normal">sin complicaciones</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary/30 mb-10 rounded-full" />
          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <span className="text-primary text-xl mt-1 shrink-0">✈</span>
              <div>
                <h4 className="font-semibold text-on-surface mb-1">
                  Envíos a todo México
                </h4>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  Estoy en Zihuatanejo, Guerrero, pero eso no nos limita. Envío
                  a cualquier parte de la República — coordino todo contigo
                  para que tu pedido llegue bien y a tiempo. Si eres local,
                  lo arreglamos directamente.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <span className="text-primary text-xl mt-1 shrink-0">💳</span>
              <div>
                <h4 className="font-semibold text-on-surface mb-1">
                  Formas de pago
                </h4>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  Acepto pagos en <strong>efectivo</strong> y por{" "}
                  <strong>transferencia bancaria</strong>. Nada raro, nada
                  complicado — como debe ser entre personas de confianza.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <span className="text-primary text-xl mt-1 shrink-0">💬</span>
              <div>
                <h4 className="font-semibold text-on-surface mb-1">
                  Coordinación directa contigo
                </h4>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  Me escribes por WhatsApp, me cuentas qué necesitas, y
                  lo planeamos juntos. Sin formularios complicados. Sin esperar
                  días para una respuesta. Solo tú y yo resolviendo tu pedido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ClosingSection() {
  const ref = useScrollReveal<HTMLElement>()
  const waLink = formatWhatsAppUrl("Hola Yahaira, me gustaría hacer un pedido 🌸")

  return (
    <section
      ref={ref}
      className="scroll-reveal section-padding"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Pull quote */}
          <blockquote className="font-headline text-2xl md:text-3xl italic font-normal text-on-surface leading-snug mb-10">
            &ldquo;Cada pieza que hago lleva mi tiempo, mi cuidado y mi nombre.
            Gracias por confiarme tus momentos especiales.&rdquo;
          </blockquote>
          <p className="text-on-surface-variant font-light leading-relaxed mb-10 text-lg">
            No sería nada sin las personas que han confiado en mí desde el
            principio. Cada mensaje, cada pedido, cada foto que me comparten
            con su regalo en mano me recuerda por qué empecé. Gracias — de
            verdad.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-on-primary font-semibold text-sm px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Escríbeme por WhatsApp
          </a>
        </div>
      </Container>
    </section>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function OurStory() {
  return (
    <>
      <StorySection />
      <StatsSection />
      <ValuesSection />
      <HowWeWorkSection />
      <ClosingSection />
    </>
  )
}

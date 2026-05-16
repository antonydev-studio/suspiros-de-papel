"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { Container } from "@/components/ui/Container"
import { PROCESS_STEPS } from "@/constants/howItWorks"

export function HowItWorks() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="scroll-reveal section-padding relative bg-surface-container-low scroll-mt-20"
    >
      <Container>

        <div className="flex flex-col md:flex-row gap-12 items-end mb-12 lg:mb-24">
          <h2 className="section-heading flex-1">
            Tú piénsalo,{" "}
            <span className="block italic font-normal text-primary">
              nosotros lo creamos
            </span>
          </h2>
          <p className="max-w-sm mb-4 font-light text-on-surface-variant">
            Un proceso fluido y artesanal pensado en la perfección de cada entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className={`relative group ${step.offset ? "lg:mt-20" : ""}`}>
              {/* Número decorativo — en mobile fluye con el contenido, en desktop es absoluto */}
              <div className="text-7xl lg:text-9xl font-headline italic select-none pointer-events-none text-primary/10 leading-none mb-2 lg:mb-0 lg:absolute lg:-top-16 lg:-left-4">
                {step.number}
              </div>
              <div className="lg:pt-10">
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-sm leading-relaxed font-light text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          <svg
            className="hidden md:block absolute top-1/2 left-0 w-full h-32 -z-10 opacity-10 pointer-events-none text-primary"
            fill="none"
            viewBox="0 0 1000 100"
          >
            <path d="M0 50 Q 250 100 500 50 T 1000 50" stroke="currentColor" strokeDasharray="10 10" strokeWidth="2" />
          </svg>
        </div>

      </Container>
    </section>
  )
}

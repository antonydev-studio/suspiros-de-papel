"use client"

import { useScrollReveal } from "@/hooks/useScrollReveal"
import { formatWhatsAppUrl } from "@/lib/whatsapp"

export function CTA() {
  const ref = useScrollReveal<HTMLElement>()
  const waLink = formatWhatsAppUrl()

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className="scroll-reveal py-20 lg:py-28 px-4 sm:px-8 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden bg-primary shadow-2xl shadow-primary/30">
          {/* Decoración interior */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
            <svg className="w-full h-full" fill="none" viewBox="0 0 800 800">
              <circle cx="400" cy="400" r="300" stroke="white" strokeWidth="0.5" />
              <circle cx="400" cy="400" r="200" stroke="white" strokeWidth="0.5" />
              <path d="M0 800 L800 0" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 space-y-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-on-primary tracking-tight leading-tight">
              ¿Tienes un proyecto{" "}
              <span className="block italic font-normal">especial?</span>
            </h2>

            <p className="text-base sm:text-lg text-on-primary/80 max-w-xl mx-auto font-light leading-relaxed">
              Estamos listos para escucharte y dar vida a tus ideas con la mayor dedicación.
              Cada consulta es el inicio de algo único.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-surface-container-lowest rounded-full text-base font-bold hover:scale-105 hover:-rotate-2 transition-transform shadow-xl text-primary"
            >
              Hablemos por WhatsApp
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden>
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.346.496 1.213.539 1.3.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.177.211-.077.385.101.173.447.737.959 1.193.658.587 1.215.77 1.388.857.173.087.275.072.376-.043s.433-.506.549-.68c.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.045.072.045.419-.1.824z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── WhatsApp FAB ─────────────────────────────────── */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-10 right-10 z-50 bg-whatsapp text-on-primary p-5 rounded-full shadow-2xl flex items-center gap-2 overflow-hidden max-w-[64px] hover:max-w-[200px] transition-all duration-500 hover:scale-105 active:scale-95 group"
      >
        <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden>
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.346.496 1.213.539 1.3.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.101-.177.211-.077.385.101.173.447.737.959 1.193.658.587 1.215.77 1.388.857.173.087.275.072.376-.043s.433-.506.549-.68c.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.045.072.045.419-.1.824z" />
        </svg>
        <span className="font-semibold whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          ¿Conversamos?
        </span>
      </a>
    </>
  )
}

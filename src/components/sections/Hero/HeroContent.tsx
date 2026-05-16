import { Button } from "@/components/ui/Button"
import { formatWhatsAppUrl } from "@/lib/whatsapp"
import { SITE } from "@/constants/site"

export function HeroContent() {
  return (
    <div className="lg:col-span-7 z-20 space-y-6 lg:space-y-8 lg:pr-12 text-center lg:text-left">

      {/* Badge — oculto en móvil */}
      <div className="hidden lg:inline-flex items-center gap-3 px-5 py-2 rounded-full bg-surface-container-lowest/40 backdrop-blur-sm border border-outline-variant/20 text-secondary text-xs font-bold tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Artesanía Digital &amp; Creativa
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-on-surface leading-[1.1] tracking-tight italic">
        Detalles personalizados que cuentan
        <span className="block font-headline font-normal italic text-primary mt-1">
          tu historia
        </span>
      </h1>

      {/* Descripción */}
      <p className="text-base lg:text-xl text-on-surface-variant max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
        {SITE.description}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center">
        <Button href={formatWhatsAppUrl()} className="w-full sm:w-auto justify-center">
          Pedir por WhatsApp →
        </Button>
        <Button variant="ghost" href="/portfolio">
          Explorar Catálogo
        </Button>
      </div>

    </div>
  )
}

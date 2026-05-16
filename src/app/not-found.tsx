import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { formatWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe. Regresa al inicio o escríbenos por WhatsApp.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center">
      <Container>
        <div className="max-w-xl mx-auto text-center py-32">
          <p className="font-headline text-8xl font-bold text-primary/20 leading-none mb-6">
            404
          </p>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Página no encontrada
          </h1>
          <p className="text-on-surface-variant font-light leading-relaxed mb-10 text-lg">
            La página que buscas no existe o fue movida.
            <br />
            Pero puedo ayudarte a encontrar lo que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-primary text-on-primary rounded-full font-semibold hover:-translate-y-0.5 transition-transform shadow-lg shadow-primary/20 no-underline"
            >
              Volver al inicio
            </Link>
            <a
              href={formatWhatsAppUrl("Hola, necesito ayuda")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary/30 text-primary rounded-full font-semibold hover:border-primary transition-colors no-underline"
            >
              Escríbenos
            </a>
          </div>
        </div>
      </Container>
    </main>
  )
}

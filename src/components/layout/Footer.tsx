"use client"

import Link from "next/link"
import { SITE } from "@/constants/site"
import { formatWhatsAppUrl } from "@/lib/whatsapp"

// ─── Iconos SVG inline ────────────────────────────────────────────────────────
function IconShare() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.84a8.2 8.2 0 0 0 4.78 1.52V6.91a4.85 4.85 0 0 1-1.01-.22Z" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
// ─────────────────────────────────────────────────────────────────────────────

const socialBtnClass =
  "w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-200"

export function Footer() {
  const waLink = formatWhatsAppUrl()

  function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: SITE.name,
        text: SITE.tagline,
        url: window.location.origin,
      }).catch(() => {/* user dismissed — no action needed */})
    } else {
      navigator.clipboard.writeText(window.location.origin).then(() => {
        alert("¡Link copiado al portapapeles!")
      })
    }
  }

  return (
    <footer className="bg-surface-container-low w-full border-t border-outline-variant/10">

      {/* Grid principal */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 py-14 max-w-7xl mx-auto items-start">

        {/* ── Brand — 2 columnas ───────────────────────────── */}
        <div className="space-y-5 md:col-span-2">
          {/* Brand name styled with italic for display; cannot use SITE.name directly without losing visual treatment. */}
          <div className="font-headline text-2xl text-primary font-bold">
            Suspiros <span className="italic font-normal">De Papel</span>
          </div>

          <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed font-light">
            Personalización artesanal con alma. Especialistas en hacer que cada
            detalle sea un recuerdo inolvidable para siempre.
          </p>

          {/* Redes sociales */}
          <div className="flex gap-3">
            <button
              onClick={handleShare}
              aria-label="Compartir sitio"
              className={socialBtnClass}
            >
              <IconShare />
            </button>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={socialBtnClass}
            >
              <IconInstagram />
            </a>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={socialBtnClass}
            >
              <IconFacebook />
            </a>
            <a
              href={SITE.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className={socialBtnClass}
            >
              <IconTikTok />
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={socialBtnClass}
            >
              <IconWhatsApp />
            </a>
          </div>
        </div>

        {/* ── Navegación ──────────────────────────────────── */}
        <div className="space-y-5">
          <h4 className="font-bold text-xs uppercase tracking-widest text-primary">
            Navegación
          </h4>
          <ul className="space-y-3 text-sm text-on-surface-variant font-light">
            <li><Link href="/#services"  className="hover:text-primary transition-colors">Servicios</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portafolio</Link></li>
            <li><Link href="/faq"        className="hover:text-primary transition-colors">Preguntas Frecuentes</Link></li>
            <li><Link href="/nuestra-historia" className="hover:text-primary transition-colors">Nuestra Historia</Link></li>
          </ul>
        </div>

        {/* ── Contacto ────────────────────────────────────── */}
        <div className="space-y-5">
          <h4 className="font-bold text-xs uppercase tracking-widest text-primary">
            Contacto
          </h4>
          <ul className="space-y-4 text-sm text-on-surface-variant font-light">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5 shrink-0"><IconLocation /></span>
              <span>Envíos seguros a todo el territorio nacional</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary shrink-0"><IconMail /></span>
              <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-xs tracking-widest uppercase">
          © 2026 {SITE.name}. Handcrafted Excellence.
        </p>
        <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-muted">
          <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
          <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
        </div>
      </div>

    </footer>
  )
}

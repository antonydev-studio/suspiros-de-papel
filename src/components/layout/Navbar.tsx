"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { SITE } from "@/constants/site"
import { Container } from "@/components/ui/Container"
import { formatWhatsAppUrl } from "@/lib/whatsapp"

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const waLink = formatWhatsAppUrl()

  // When on home, use in-page anchors (smooth scroll via NavLink).
  // When on any other page, navigate to home + anchor so the browser jumps on load.
  const servicesHref   = isHome ? "#services"     : "/#services"
  const howItWorksHref = isHome ? "#how-it-works" : "/#how-it-works"
  const portfolioHref  = isHome ? "#portfolio"    : "/portfolio"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobile = () => setIsOpen(false)

  return (
    <header
      className={[
        "fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/10 transition-colors duration-500",
        scrolled ? "bg-surface/80" : "bg-surface/60",
      ].join(" ")}
    >
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* LOGO */}
          <Link
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
            className="p-0 pr-8 mr-4 border-r border-outline-variant/30"
          >
            <Image
              src="/images/Logo.webp"
              alt={SITE.name}
              width={120}
              height={36}
              priority
              className="object-contain w-auto h-8 md:h-10"
            />
          </Link>

          {/* LINKS desktop */}
          <div className="hidden md:flex items-center gap-12">
            <NavLink href={portfolioHref}>Portafolio</NavLink>
            <NavLink href={servicesHref}>Servicios</NavLink>
            <NavLink href={howItWorksHref}>Proceso</NavLink>

            <Link
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-container text-on-primary px-8 py-2.5 rounded-full text-sm font-semibold no-underline shadow-sm transition-colors duration-200"
            >
              Contacto
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            className="md:hidden text-on-surface-variant bg-transparent border-none cursor-pointer p-2"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <IconX /> : <IconMenu />}
          </button>
        </nav>
      </Container>

      {/* Panel mobile */}
      {isOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10 px-4 py-6 flex flex-col gap-4">
          <NavLink href={portfolioHref}  onClick={closeMobile} mobile>Portafolio</NavLink>
          <NavLink href={servicesHref}   onClick={closeMobile} mobile>Servicios</NavLink>
          <NavLink href={howItWorksHref} onClick={closeMobile} mobile>Proceso</NavLink>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-8 py-3 rounded-full text-sm font-semibold text-center mt-2"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  )
}

/** Props for an individual navigation link. */
type NavLinkProps = {
  /** Destination — in-page anchor (e.g. "#services") or route (e.g. "/portfolio"). */
  href: string
  /** Optional callback fired after navigation, used to close the mobile menu. */
  onClick?: () => void
  /** When true, applies mobile-specific padding and font size. */
  mobile?: boolean
  children: React.ReactNode
}

function NavLink({ href, onClick, mobile = false, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    // In-page anchor: smooth scroll to section
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault()
      const el = document.getElementById(href.slice(1))
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: "smooth" })
      }
    }
    onClick?.()
  }

  const baseClass = "no-underline hover:text-primary transition-colors"
  const desktopClass = "text-on-surface-variant text-sm font-medium"
  const mobileClass  = "text-on-surface-variant font-medium py-1"

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${baseClass} ${mobile ? mobileClass : desktopClass}`}
    >
      {children}
    </Link>
  )
}

/**
 * Portfolio item definitions, category list, and filter utilities.
 *
 * Consumed by: PortfolioPreview (featured items on home), PortfolioGrid (full
 * portfolio page), PortfolioCard (individual image card).
 *
 * FEATURED_ITEMS — items where `featured: true` (max 6 recommended for home grid).
 * filterByCategory — returns items matching a given PortfolioCategory.
 *
 * To add new images, follow the step-by-step guide in the CÓMO AGREGAR UNA
 * IMAGEN comment block below.
 */
export type PortfolioCategory =
  | "todo"
  | "tazas"
  | "textil"
  | "papeleria"
  | "accesorios"
  | "eventos"

export type PortfolioItem = {
  id: string
  title: string
  category: PortfolioCategory
  src: string
  alt: string
  aspectRatio: "portrait" | "landscape" | "square" | "wide"
  objectPosition?: string   // ej: "center", "top", "50% 30%"
  featured: boolean
}

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory; label: string }[] = [
  { id: "todo",       label: "Todo"              },
  { id: "tazas",      label: "Tazas & Termos"    },
  { id: "textil",     label: "Textil"            },
  { id: "papeleria",  label: "Papelería"         },
  { id: "accesorios", label: "Accesorios"        },
  { id: "eventos",    label: "Regalos & Eventos" },
]

// ─── CÓMO AGREGAR UNA IMAGEN ──────────────────────────────────────────────────
//
// 1. Convierte la imagen a .webp y colócala en:
//      public/images/portfolio/nombre-descriptivo.webp
//
// 2. Elige el `aspectRatio` según la orientación REAL del archivo:
//
//      "portrait"   → imagen más alta que ancha  (relación 3:4)   ej: tazas, libretas verticales
//      "landscape"  → imagen más ancha que alta  (relación 4:3)   ej: gorras, bolsas, grupales
//      "square"     → imagen cuadrada o casi     (relación 1:1)   ej: productos planos, cenital
//      "wide"       → panorámica                 (relación 16:9)  ej: abanico abierto, escenas
//
//    ⚠ Si el ratio no coincide con la imagen real, object-cover recortará
//      partes importantes. Elige el ratio más cercano al archivo original.
//
// 3. Especifica `objectPosition` para controlar qué parte se muestra
//    cuando object-cover recorta la imagen:
//
//      "center"        → predeterminado (centrado horizontal y vertical)
//      "top"           → ancla el borde superior (útil si el sujeto está arriba)
//      "bottom"        → ancla el borde inferior
//      "50% 20%"       → punto focal: 50% horizontal, 20% desde arriba
//      "right center"  → ancla el lado derecho, centrado vertical
//
//    Omítelo solo si el centro geométrico de la imagen coincide con el sujeto.
//
// 4. Copia este bloque y rellena los campos:
//
// {
//   id: "id-unico-sin-espacios",        ← identificador único, nunca repetir
//   title: "Nombre visible en hover",
//   category: "tazas" | "textil" | "papeleria" | "accesorios" | "eventos",
//   src: "/images/portfolio/nombre-descriptivo.webp",
//   alt: "Descripción accesible y concisa del producto",
//   aspectRatio: "portrait",            ← ver punto 2 arriba
//   objectPosition: "center",           ← ver punto 3 arriba; ajusta si el sujeto se recorta
//   featured: false,                    ← true solo si debe aparecer en el home (máx 6 totales)
// },
//
// ─────────────────────────────────────────────────────────────────────────────

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ── TAZAS & TERMOS ────────────────────────
  {
    id: "copa-grabado",
    title: "Copa Grabada",
    category: "tazas",
    src: "/images/portfolio/Copa-grabado.webp",
    alt: "Copa de cristal con nombre grabado a láser",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "bule-sublimado",
    title: "Bule Sublimado",
    category: "tazas",
    src: "/images/portfolio/Bule-sublimado.webp",
    alt: "Bule con diseño sublimado a todo color",
    aspectRatio: "square",
    featured: false,
  },
  {
    id: "termo-personalizado",
    title: "Termo Personalizado",
    category: "tazas",
    src: "/images/portfolio/Termo-personalizado.webp",
    alt: "Termo de acero con nombre e ilustración personalizada",
    aspectRatio: "portrait",
    featured: false,
  },

  // ── TEXTIL ────────────────────────────────
  {
    id: "playera-estampado",
    title: "Playera Estampada",
    category: "textil",
    src: "/images/portfolio/Playera-estampado.webp",
    alt: "Playera de algodón con estampado personalizado",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "gorra-estampado",
    title: "Gorra Estampada",
    category: "textil",
    src: "/images/portfolio/Gorra-estampado.webp",
    alt: "Gorra con bordado o estampado personalizado",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "bolsa-estampado",
    title: "Bolsa Estampada",
    category: "textil",
    src: "/images/portfolio/Bolsa-estampado.webp",
    alt: "Bolsa de tela con estampado a color personalizado",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "bolsa-tote",
    title: "Bolsa Tote",
    category: "textil",
    src: "/images/portfolio/Bolsa-tote.webp",
    alt: "Bolsa tote de lona con diseño impreso",
    aspectRatio: "landscape",
    featured: false,
  },
  {
    id: "calcetas-estampado",
    title: "Calcetas Estampadas",
    category: "textil",
    src: "/images/portfolio/Calcetas-estampado.webp",
    alt: "Calcetas con diseño personalizado estampado",
    aspectRatio: "landscape",
    featured: false,
  },

  // ── PAPELERÍA ─────────────────────────────
  {
    id: "agenda-personalizada",
    title: "Agenda Personalizada",
    category: "papeleria",
    src: "/images/portfolio/Agenda-personalizada.webp",
    alt: "Agenda con portada personalizada e impresión de nombre",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "libreta-empastado",
    title: "Libreta Empastada",
    category: "papeleria",
    src: "/images/portfolio/Libreta-empastado.webp",
    alt: "Libreta con empaste personalizado y portada a color",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "libro-empastado",
    title: "Libro Empastado",
    category: "papeleria",
    src: "/images/portfolio/Libro-empastado.webp",
    alt: "Libro con empaste artesanal y diseño de portada personalizado",
    aspectRatio: "portrait",
    featured: false,
  },
  {
    id: "carpeta-personalizada",
    title: "Carpeta Personalizada",
    category: "papeleria",
    src: "/images/portfolio/Carpeta-personalizada.webp",
    alt: "Carpeta con portada impresa y diseño corporativo personalizado",
    aspectRatio: "portrait",
    featured: false,
  },

  // ── ACCESORIOS ────────────────────────────
  {
    id: "abanico-personalizado",
    title: "Abanico Personalizado",
    category: "accesorios",
    src: "/images/portfolio/Abanico-personalizado.webp",
    alt: "Abanico artesanal con diseño e imagen personalizada",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "pines-personalizado",
    title: "Pines Personalizados",
    category: "accesorios",
    src: "/images/portfolio/Pines-personalizado.webp",
    alt: "Set de pines metálicos con diseños personalizados",
    aspectRatio: "square",
    featured: false,
  },

  // ── REGALOS & EVENTOS ─────────────────────
  {
    id: "servilleta-personalizada",
    title: "Servilleta Personalizada",
    category: "eventos",
    src: "/images/portfolio/Servilleta-personalizada.webp",
    alt: "Servilleta bordada o impresa con nombre y fecha para evento especial",
    aspectRatio: "square",
    featured: true,
  },
]

export const FEATURED_ITEMS = PORTFOLIO_ITEMS.filter((item) => item.featured)

export function filterByCategory(category: PortfolioCategory): PortfolioItem[] {
  if (category === "todo") return PORTFOLIO_ITEMS
  return PORTFOLIO_ITEMS.filter((item) => item.category === category)
}
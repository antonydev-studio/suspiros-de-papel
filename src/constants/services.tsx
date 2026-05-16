/**
 * Service definitions for the Services section on the home page.
 *
 * Each entry maps to one card in the 4-column services grid.
 * `variant` controls the card's color scheme — see `cardStyles` in Services.tsx.
 * To add a service: append a new entry to SERVICES and add its icon to the
 * `ICONS` map in Services.tsx keyed by the same `id`.
 */
export type ServiceVariant = "light" | "dark-tertiary" | "dark-primary"

export type Service = {
  id: string
  title: string
  description: string
  tags: string[]
  variant: ServiceVariant
}

export const SERVICES: Service[] = [
  {
    id: "sublimation",
    title: "Sublimación",
    description: "Mugs y textiles con acabados permanentes y colores vivos.",
    tags: ["Termos", "Textil"],
    variant: "light",
  },
  {
    id: "laser",
    title: "Grabado Láser",
    description: "Precisión en madera, cuero y acrílico para un toque eterno.",
    tags: ["Maderas", "Cuero"],
    variant: "dark-tertiary",
  },
  {
    id: "stationery",
    title: "Papelería",
    description: "Etiquetas y branding de autor con texturas orgánicas.",
    tags: ["Stickers", "Branding"],
    variant: "light",
  },
  {
    id: "events",
    title: "Eventos",
    description: "Invitaciones y souvenirs que transforman celebraciones.",
    tags: ["Bodas", "Regalos"],
    variant: "dark-primary",
  },
]

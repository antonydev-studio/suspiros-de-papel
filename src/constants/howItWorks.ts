/** A single step in the "How It Works" process. */
export type ProcessStep = {
  number: string
  title: string
  description: string
  /** When true, the card is offset downward on large screens for a staggered layout. */
  offset: boolean
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Idea & Concepto",
    description: "Cuéntanos tu proyecto. Escuchamos cada detalle para entender tu visión.",
    offset: false,
  },
  {
    number: "02",
    title: "Propuesta Digital",
    description: "Enviamos bocetos visuales para que veas tu producto antes de producirlo.",
    offset: true,
  },
  {
    number: "03",
    title: "Mano de Obra",
    description: "Fabricación cuidadosa mezclando tecnología láser y acabado manual.",
    offset: false,
  },
  {
    number: "04",
    title: "Envío Seguro",
    description: "Recibe tu pieza lista para regalar o lucir, empacada con cariño.",
    offset: true,
  },
]

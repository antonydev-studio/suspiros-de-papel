import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand ────────────────────────────────────────────
        primary:                    "#95442a",
        "primary-container":        "#b45b3f",
        "primary-fixed":            "#ffdbd0",
        "on-primary":               "#ffffff",   // text/icons ON primary-colored bg
        secondary:                  "#7a573c",
        tertiary:                   "#5b5e41",

        // ── Surfaces ─────────────────────────────────────────
        background:                 "#fdf9f5",
        surface:                    "#fdf9f5",
        "surface-container-low":    "#f7f3ef",
        "surface-container-lowest": "#ffffff",   // pure white surface

        // ── On surfaces ──────────────────────────────────────
        "on-surface":               "#1c1c19",
        "on-surface-variant":       "#55433d",
        muted:                      "#9e8c87",   // subdued text (copyright, captions)

        // ── Fixed tones ──────────────────────────────────────
        "secondary-fixed":          "#ffdcc4",
        "tertiary-fixed":           "#e3e5c0",

        // ── Borders ──────────────────────────────────────────
        "outline-variant":          "#dbc1ba",

        // ── Brand external ───────────────────────────────────
        whatsapp:                   "#25D366",   // WhatsApp brand color
      },
      fontFamily: {
        headline: ["var(--font-champagne)", "serif"],
        body:     ["var(--font-plus-jakarta)", "sans-serif"],
        display:  ["var(--font-champagne)", "serif"],
        // <- cambiar solo aquí en el futuro para cambiar fuentes globalmente
      },
      borderRadius: {
        card: "2.5rem",   // tarjetas de servicios y elementos con esquinas redondeadas grandes
      },
      letterSpacing: {
        eyebrow: "0.2em",   // section eyebrow labels (Nuestro Trabajo, Portafolio completo…)
      },
      screens: {
        landscape: { raw: "(orientation: landscape) and (max-width: 1023px)" },
      },
    },
  },
  plugins: [],
} satisfies Config

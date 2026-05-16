/**
 * Single source of truth for all brand-level data.
 *
 * Consumed by: Navbar, Footer (incl. developerCredit), CTA, HeroContent, FAQ, OurStory, page metadata.
 * To extend: add new fields here and import where needed — never hardcode brand
 * values (name, phone, social URLs) inside components.
 */
export const SITE = {
  name: "Suspiros De Papel",
  tagline: "Personalización con Alma",
  description: "Sublimación, grabado láser y papelería creativa diseñada para momentos que merecen ser eternos.",
  /** Production URL — update when custom domain is configured. */
  url: "https://www.suspirosdepapel.net",
  whatsapp: "7551212871",
  email: "suspirosdepapel2@gmail.com",
  instagramUrl: "https://www.instagram.com/suspirosdepapel.mx/",
  facebookUrl: "https://www.facebook.com/share/18iCcH9ovT/",
  tiktokUrl: "https://www.tiktok.com/@yahairacortez852?_r=1&_t=ZS-95dD3gbEAXF",
  /** Footer attribution — design & development credit (external). */
  developerCredit: {
    url: "https://www.antonydev.com/",
    displayName: "AntonyDev.",
  },
} as const
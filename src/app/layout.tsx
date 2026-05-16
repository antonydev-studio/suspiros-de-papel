import "./globals.css"
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google"
import localFont from "next/font/local"
import { SITE } from "@/constants/site"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
})

const champagne = localFont({
  src: "./fonts/ChampagneLimousinesBold.ttf",
  variable: "--font-champagne",
})

export const metadata: import("next").Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "sublimación personalizada",
    "grabado láser",
    "papelería creativa",
    "regalos personalizados",
    "Zihuatanejo",
    "Guerrero",
    "México",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/images/hero.webp",
        width: 512,
        height: 512,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  other: {
    "theme-color": "#fdf9f5",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: `+52${SITE.whatsapp}`,
  email: SITE.email,
  image: `${SITE.url}/images/hero.webp`,
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "México",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zihuatanejo",
    addressRegion: "Guerrero",
    addressCountry: "MX",
  },
  sameAs: [SITE.instagramUrl, SITE.facebookUrl, SITE.tiktokUrl],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${plusJakarta.variable} ${champagne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

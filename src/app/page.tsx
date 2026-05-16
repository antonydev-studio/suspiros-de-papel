import type { Metadata } from "next"
import { SITE } from "@/constants/site"
import { Hero }           from "@/components/sections/Hero"
import { PortfolioPreview } from "@/components/sections/Portfolio"
import { Services }       from "@/components/sections/Services"
import { HowItWorks }     from "@/components/sections/HowItWorks"
import { CTA }            from "@/components/sections/CTA"

export const metadata: Metadata = {
  alternates: {
    canonical: SITE.url,
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioPreview />
      <Services />
      <HowItWorks />
      <CTA />
    </>
  )
}

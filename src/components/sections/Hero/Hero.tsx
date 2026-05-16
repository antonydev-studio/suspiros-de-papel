import { Container } from "@/components/ui/Container"
import { HeroBackground } from "./HeroBackground"
import { HeroContent } from "./HeroContent"
import { HeroImage } from "./HeroImage"

export function Hero() {
  return (
    <section className="relative lg:min-h-[90vh] flex items-center overflow-visible py-16 lg:py-20 line-art-bg">

      <HeroBackground />

      <Container>
        <div className="w-full grid lg:grid-cols-12 gap-4 items-center relative z-10">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

    </section>
  )
}

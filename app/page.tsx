import { PageReveal } from '@/components/PageReveal'
import { IntroLoader } from '@/components/IntroLoader'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { FlavorCarousel } from '@/components/FlavorCarousel'
import { MixLab } from '@/components/MixLab'
import { ScrollTimeline } from '@/components/ScrollTimeline'
import { Sustainability } from '@/components/Sustainability'
import { StoreLocator } from '@/components/StoreLocator'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="relative">
      <IntroLoader />
      <PageReveal />
      <ScrollProgress />
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Signature Flavours */}
      <section id="flavours">
        <FlavorCarousel />
      </section>

      {/* Mix & Match Lab */}
      <section id="mix-lab">
        <MixLab />
      </section>

      {/* Moments & Memories */}
      <section id="story">
        <ScrollTimeline />
      </section>

      {/* Sustainably Sweet */}
      <section id="sustainability">
        <Sustainability />
      </section>

      {/* Store Locator */}
      <section id="stores">
        <StoreLocator />
      </section>

      {/* Call to Action */}
      <section id="cta">
        <CallToAction />
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}

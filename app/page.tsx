import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { YouTubeGallerySection } from "@/components/youtube-gallery-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ShortsSection } from "@/components/shorts-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ApproachSection } from "@/components/approach-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PortfolioShowcase />
      <YouTubeGallerySection />
      <ClientLogos />
      <StatsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ShortsSection />
      <TestimonialsSection />
      <ApproachSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

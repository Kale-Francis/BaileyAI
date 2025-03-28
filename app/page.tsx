import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import DemoSection from "@/components/demo-section"
import PricingSection from "@/components/pricing-section"
import SocialProofSection from "@/components/social-proof-section"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <SocialProofSection />
      <Footer />
    </main>
  )
}


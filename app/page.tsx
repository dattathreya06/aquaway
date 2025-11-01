import Navigation from "@/components/navigation"
import HeroSlider from "@/components/hero-slider"
import FeaturesSection from "@/components/features-section"
import ProductsPreview from "@/components/products-preview"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSlider />
      <FeaturesSection />
      <ProductsPreview />
      <CTASection />
      <Footer />
    </main>
  )
}

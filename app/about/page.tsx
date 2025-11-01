import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const AwardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8 14 12 17 16 14" />
    <line x1="12" y1="17" x2="12" y2="23" />
    <line x1="9" y1="21" x2="15" y2="21" />
  </svg>
)

const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

export default function AboutPage() {
  const stats = [
    { icon: <UsersIcon />, number: "5000+", label: "Happy Customers" },
    { icon: <AwardIcon />, number: "15+", label: "Years Experience" },
    { icon: <ZapIcon />, number: "100%", label: "Quality Assured" },
    { icon: <GlobeIcon />, number: "50+", label: "Installations Monthly" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About AQUA WAY</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering pure water solutions and healthy living to families across Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide affordable, reliable, and advanced water purification solutions to every household in
                Hyderabad. We are committed to ensuring that safe, clean drinking water is accessible to all, promoting
                health and wellness for families everywhere.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most trusted and innovative water purification company in India, recognized for excellence
                in product quality, customer service, and environmental sustainability. We envision a future where water
                purity is no longer a luxury but a basic necessity for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-primary mb-4">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Why Choose AQUA WAY?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Technology",
                description:
                  "State-of-the-art RO, alkaline, and UV purification systems for comprehensive water treatment",
              },
              {
                title: "Expert Installation",
                description: "Professional installation and setup by trained technicians with after-sales support",
              },
              {
                title: "Affordable Pricing",
                description: "Premium quality water purifiers at competitive prices with easy payment options",
              },
              {
                title: "Warranty & Service",
                description: "5-year comprehensive warranty with free maintenance and filter replacement support",
              },
              {
                title: "Eco-Friendly",
                description: "Sustainable solutions that minimize water waste and protect the environment",
              },
              {
                title: "24/7 Support",
                description: "Dedicated customer support team available for any queries or service requests",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

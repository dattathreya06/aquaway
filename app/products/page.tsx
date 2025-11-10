import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ShoppingCartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const products = [
  {
    id: 1,
    name: "Water Purifier Elite",
    price: "12,999",
    image: "/aquawayelite.jpg",
    description: "Premium water purifier with advanced RO and Alkaline technology",
    specs: [
      "RO + Alkaline Purification",
      "Capacity: 12-15 Liters/Hour",
      "TDS Level: Up to 2000 ppm",
      "Automatic Temperature Control",
      "Digital Display with Smart Sensors",
      "Copper Infused Technology",
      "Wall or Counter Top Installation",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
  {
    id: 2,
    name: "RO+Alkaline Water Purifier",
    price: "14,499",
    image: "/aquawayro.jpg",
    description: "Advanced dual purification with alkaline water benefits",
    specs: [
      "RO + Alkaline Dual System",
      "Capacity: 10-12 Liters/Hour",
      "TDS Level: Up to 1500 ppm",
      "pH Balance Maintained",
      "High Capacity Storage Tank",
      "Easy Filter Replacement",
      "Compact Design",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
  {
    id: 3,
    name: "Ultra Plus Water Purifier",
    price: "15,999",
    image: "/aquaway1.jpg",
    description: "Ultimate water purification with UV and mineral retention",
    specs: [
      "Premium RO + UV Technology",
      "Capacity: 15-18 Liters/Hour",
      "TDS Level: Upto 3000 ppm",
      "UV Sterilization System",
      "Mineral Retention Technology",
      "Advanced Pre-filtration",
      "Touchless Operation Available",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Premium Water Purifiers</h1>
          <p className="text-lg text-muted-foreground">
            Choose from our range of advanced water purification solutions designed for your family's health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-80 overflow-hidden bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">₹{product.price}</p>
                <p className="text-muted-foreground mb-4">{product.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-3">Key Specifications:</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <CheckIcon />
                        <span className="text-muted-foreground">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground">Warranty</p>
                    <p className="font-bold text-foreground">{product.warranty}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Installation</p>
                    <p className="font-bold text-foreground">{product.installation}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="tel:+919876543210"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <ShoppingCartIcon />
                    Order Now
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MessageIcon />
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

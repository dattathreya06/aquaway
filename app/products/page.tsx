import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ShoppingCartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const products = [
  {
    id: 1,
    name: "AQUA WAY ELITE",
    price: "12,499",
    image: "/aqelite.png",
    description:
      "The AQUA WAY ELITE offers advanced RO + Alkaline purification with a stylish design. Perfect for homes that value high-flow purification and natural mineral retention.",
    specs: [
      "RO + Alkaline Purification",
      "Flow Rate 75 GPD",
      "Tank Capacity 9L",
      "Weight 10kg",
      "Digital Display with Smart Sensors",
      "Copper Infused Technology",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
  {
    id: 2,
    name: "AQUA WAY ECO SMART",
    price: "14,999",
    image: "/aqsmart.png",
    description:
      "A smart and eco-friendly purifier that balances purification power with energy efficiency. Its dual RO + Alkaline system ensures healthy, mineral-rich water.",
    specs: [
      "Dual Purification System",
      "pH Balance Maintained",
      "Weight 10kg",
      "Smart LED Indicators",
      "Energy Efficient Design",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
  {
    id: 3,
    name: "AQUA WAY ULTRA PLUS",
    price: "15,999",
    image: "/aqultraplus.png",
    description:
      "Ultimate RO + UV purification with UV sterilization and mineral retention technology, ensuring pure and safe water every time.",
    specs: [
      "Premium RO + UV Technology",
      "TDS Level: Up to 3000 ppm",
      "UV Sterilization System",
      "Mineral Retention",
      "Touchless Operation",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
  {
    id: 4,
    name: "AQUA WAY LEO",
    price: "18,999",
    image: "/aqleo.png",
    description:
      "High-end RO + Alkaline system with Active Copper filtration and modern, space-saving design for contemporary homes.",
    specs: [
      "RO + Alkaline + Copper",
      "H2AA Filter Technology",
      "pH Balancing",
      "Compact Wall Mount Design",
      "Weight 10kg",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
    {
    id: 5,
    name: "AQUA WAY CORAL",
    price: "14,999",
    image: "/aqcoral.png",
    description:
      "High-end RO + Alkaline system with Active Copper filtration and modern, space-saving design for contemporary homes.",
    specs: [
      "RO + Alkaline + Copper",
      "H2AA Filter Technology",
      "pH Balancing",
      "Compact Wall Mount Design",
      "Weight 10kg",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
    {
    id: 6,
    name: "AQUA WAY ALPHA",
    price: "19,999",
    image: "/aqalpha.png",
    description:
      "High-end RO + Alkaline system with Active Copper filtration and modern, space-saving design for contemporary homes.",
    specs: [
      "RO + Alkaline + Copper",
      "H2AA Filter Technology",
      "pH Balancing",
      "Compact Wall Mount Design",
      "Weight 10kg",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
    {
    id: 7,
    name: "AQUA WAY HYDROX",
    price: "20,000",
    image: "/aqhydrox.png",
    description:
      "High-end RO + Alkaline system with Active Copper filtration and modern, space-saving design for contemporary homes.",
    specs: [
      "RO + Alkaline + Copper",
      "H2AA Filter Technology",
      "pH Balancing",
      "Compact Wall Mount Design",
      "Weight 10kg",
    ],
    warranty: "5 Years",
    installation: "Free",
  },
]

export default function ProductsPage() {
  return (
    <main style={{ backgroundColor: "#5c5c5c" }}>
      <Navigation />

      {/* Header Section */}
      <section
        className="py-12 md:py-20 text-center"
        style={{ background: "linear-gradient(to right, #7C7C7C, #A2A2A2)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium Water Purifiers
          </h1>
          <p className="text-lg text-gray-200">
            Explore our advanced purification systems designed for your family's health
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center gap-8 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(to right, #7C7C7C, #A2A2A2)",
              }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-80 flex-shrink-0 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-white p-6">
                <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
                <p className="text-xl font-semibold text-black mb-4">
                  ₹{product.price}
                </p>
                <p className="text-gray-100 mb-6">{product.description}</p>

                {/* Specs */}
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-100 flex items-start"
                    >
                      <span className="text-black mr-2">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Warranty + Installation */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg"
                  style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                  <div>
                    <p className="text-xs text-gray-200">Warranty</p>
                    <p className="font-bold text-white">{product.warranty}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-200">Installation</p>
                    <p className="font-bold text-white">{product.installation}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* <a
                    href="tel:+919876543210"
                    className="flex-1 flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800 px-5 py-3 rounded-lg font-semibold transition-all"
                  >
                    <ShoppingCartIcon /> Order Now
                  </a> */}
                   <div className="mt-6">
                  <Link href={`/products/${product.id}`}>
                    <button className="inline-block px-6 py-2 bg-black text-white hover:bg-gray-800 rounded-lg font-semibold transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
                  <a
                    href="https://wa.me/919876543210"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 px-5 py-3 rounded-lg font-semibold transition-all"
                  >
                    <MessageIcon /> WhatsApp
                  </a>
                </div>

                {/* View Details Button */}
               
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

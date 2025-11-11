import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "AQUA WAY ELITE",
    price: "12,499",
    image: "/aqelite.png",
    features: ["Flow Rate 75 GPD", "Tank Capacity 9L", "Weight 10kg"],
  },
  {
    id: 2,
    name: "AQUA WAY ECO SMART",
    price: "14,999",
    image: "/aqsmart.png",
    features: ["Dual purification", "pH balance", "Weight 10kg"],
  },
   {
    id: 5,
    name: "AQUA WAY CORAL",
    price: "14,999",
    image: "/aqcoral.png",
    features: ["Detachable Tank", "LED Indicator", "Wall or Counter Top Installation"],
  },
  {
    id: 3,
    name: "AQUA WAY ULTRA PLUS",
    price: "15,999",
    image: "/aqultraplus.png",
    features: ["Premium RO", "UV sterilization", "Weight 9.8g"],
  },
   {
    id: 4,
    name: "AQUA WAY LEO",
    price: "18,999",
    image: "/aqleo.png",
    features: ["RO + Alkaline", "H2AA Filter with Active Copper", "Weight 10kg"],
  },
    {
    id: 7,
    name: "AQUA WAY ALPHA",
    price: "19,999",
    image: "/aqalpha.png",
    features: ["RO + Copper with Alkaline", "UV sterilization", "Mineral retention"],
  },
  {
    id: 6,
    name: "AUQA WAY HYDROX",
    price: "20,000",
    image: "/aqhydrox.png",
    features: ["Premium RO", "UV sterilization", "Multi Stage Filtration"],
  },
 
];

export default function ProductsPreview() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#5c5c5c" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Choose from our premium range of water purification systems
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center gap-6 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(to right, #7C7C7C, #A2A2A2)",
              }}
            >
              <div className="w-full md:w-1/2 h-64 flex-shrink-0 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-xl font-semibold text-black mb-4">
                  ₹{product.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-100 flex items-start"
                    >
                      <span className="text-black mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
               <Link href={`/products/${product.id}`}>
                <button className="inline-block px-6 py-2 bg-black text-white hover:bg-gray-800 rounded-lg font-semibold transition-colors">
                  View Details
                </button>
              </Link>

              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg font-semibold transition-colors"
          >
            Explore All Products
          </Link>
        </div> */}
      </div>
    </section>
  );
}

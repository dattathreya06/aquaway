import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Water Purifier Elite",
    price: "12,999",
    image: "/aquawayelite.jpg",
    features: ["RO + Alkaline", "Advanced filtration", "Smart display"],
    color: "from-primary/10 to-primary/5",
  },
  {
    id: 2,
    name: "RO+Alkaline Water Purifier",
    price: "14,499",
    image: "/aquawayro.jpg",
    features: ["Dual purification", "pH balance", "High capacity"],
    color: "from-secondary/10 to-secondary/5",
  },
  {
    id: 3,
    name: "Ultra Plus Water Purifier",
    price: "15,999",
    image: "/aquaway1.jpg",
    features: ["Premium RO", "UV sterilization", "Mineral retention"],
    color: "from-accent/10 to-accent/5",
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our premium range of water purification systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-gradient-to-br ${product.color} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
            >
              <div className="h-150 overflow-hidden bg-white">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  ₹{product.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="text-secondary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className="w-full block text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

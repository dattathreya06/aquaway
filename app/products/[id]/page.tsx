import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { ShoppingCart, Store, Package, MapPin, Handshake } from 'lucide-react';
const products = [
  {
    id: 1,
    name: "AQUA WAY ELITE",
    price: "12,499",
    image: "/aqelite.png",
    description:
      "The AQUA WAY ELITE offers advanced RO + Alkaline purification with a stylish design. Perfect for homes that value high-flow purification and natural mineral retention.",
    features: [
      {
        title: "Purity in Every Drop",
        text: "Removes bacteria, viruses, and dissolved impurities to meet drinking water standards (IS:10500).",
      },
      {
        title: "Multiple Purification Process",
        text: "RO + UF + TDS Control + UV In-tank process ensures water is 100% safe and healthy for your family.",
      },
      {
        title: "Retains Essential Minerals",
        text: "TDS control technology maintains natural minerals for taste and health benefits.",
      },
    ],
    specs: [
      { label: "Applications", value: "Brackish / Tap / Municipal Water" },
      { label: "Purification Rate", value: "20 L/hr" },
      { label: "Body Material", value: "ABS Food Grade Plastic" },
      { label: "Mounting", value: "Wall Mount / Counter Top" },
      { label: "Dimensions (mm)", value: "390 (L) x 255 (W) x 535 (H)" },
      { label: "Input Power Supply", value: "230V AC / 50 Hz" },
      { label: "Storage Capacity", value: "8 Litres" },
      { label: "Power Consumption", value: "60 W" },
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
    features: [
      {
        title: "Eco-Smart Filtration",
        text: "Advanced RO + Alkaline + Carbon filters for balanced, natural-tasting water.",
      },
      {
        title: "Smart Indicator System",
        text: "LED display shows water purity and filter status for user convenience.",
      },
      {
        title: "Energy Efficient",
        text: "Consumes low power while maintaining high purification output.",
      },
    ],
    specs: [
      { label: "Applications", value: "Tap / Municipal Water" },
      { label: "Purification Rate", value: "18 L/hr" },
      { label: "Body Material", value: "ABS Plastic" },
      { label: "Mounting", value: "Wall Mount" },
      { label: "Dimensions (mm)", value: "385 (L) x 240 (W) x 510 (H)" },
      { label: "Power Supply", value: "230V AC / 50 Hz" },
      { label: "Storage Capacity", value: "9 Litres" },
      { label: "Power Consumption", value: "55 W" },
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
    features: [
      {
        title: "Premium RO + UV Technology",
        text: "Dual purification process eliminates impurities and harmful microorganisms effectively.",
      },
      {
        title: "Mineral Retention System",
        text: "Preserves essential minerals to maintain natural water taste and health benefits.",
      },
      {
        title: "Touchless Operation",
        text: "Sensor-based dispensing provides hygiene and convenience for modern homes.",
      },
    ],
    specs: [
      { label: "Applications", value: "Tap / Municipal Water" },
      { label: "Purification Rate", value: "22 L/hr" },
      { label: "Body Material", value: "ABS Plastic" },
      { label: "Mounting", value: "Wall Mount / Counter Top" },
      { label: "Dimensions (mm)", value: "400 (L) x 260 (W) x 540 (H)" },
      { label: "Power Supply", value: "230V AC / 50 Hz" },
      { label: "Storage Capacity", value: "10 Litres" },
      { label: "Power Consumption", value: "65 W" },
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
    features: [
      {
        title: "Active Copper Technology",
        text: "Infuses water with copper ions, known for their antimicrobial and antioxidant properties.",
      },
      {
        title: "H2AA Filter Technology",
        text: "Delivers perfectly balanced alkaline water with hydrogen activation.",
      },
      {
        title: "Compact Design",
        text: "Elegant and space-saving design suitable for modern kitchens.",
      },
    ],
    specs: [
      { label: "Applications", value: "Brackish / Tap / Municipal Water" },
      { label: "Purification Rate", value: "21 L/hr" },
      { label: "Body Material", value: "ABS Food Grade Plastic" },
      { label: "Mounting", value: "Wall Mount" },
      { label: "Dimensions (mm)", value: "400 (L) x 260 (W) x 545 (H)" },
      { label: "Power Supply", value: "230V AC / 50 Hz" },
      { label: "Storage Capacity", value: "9 Litres" },
      { label: "Power Consumption", value: "58 W" },
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
      "Stylish and efficient purifier featuring detachable tank and advanced LED indicators for user convenience.",
    features: [
      {
        title: "Detachable Tank",
        text: "Easy to clean and refill detachable water storage tank for convenience.",
      },
      {
        title: "LED Indicator System",
        text: "Smart LED display shows power, tank full, and purification status.",
      },
      {
        title: "Flexible Installation",
        text: "Can be wall-mounted or placed on a countertop depending on space.",
      },
    ],
    specs: [
      { label: "Applications", value: "Tap / Municipal Water" },
      { label: "Purification Rate", value: "17 L/hr" },
      { label: "Body Material", value: "ABS Plastic" },
      { label: "Mounting", value: "Wall Mount / Counter Top" },
      { label: "Dimensions (mm)", value: "380 (L) x 250 (W) x 520 (H)" },
      { label: "Power Supply", value: "230V AC / 50 Hz" },
      { label: "Storage Capacity", value: "8 Litres" },
      { label: "Power Consumption", value: "50 W" },
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
      "A premium purifier equipped with RO + Copper + Alkaline + UV sterilization for 360° protection.",
    features: [
      {
        title: "Multi-Stage Filtration",
        text: "RO + UV + UF + Alkaline + Copper filtration ensures safe and mineral-balanced water.",
      },
      {
        title: "Mineral Guard",
        text: "Restores essential minerals lost during purification for improved taste and nutrition.",
      },
      {
        title: "High Storage Capacity",
        text: "Suitable for large families with consistent water supply.",
      },
    ],
    specs: [
      { label: "Applications", value: "Brackish / Tap / Municipal Water" },
      { label: "Purification Rate", value: "24 L/hr" },
      { label: "Body Material", value: "ABS Plastic" },
      { label: "Mounting", value: "Wall Mount" },
      { label: "Dimensions (mm)", value: "410 (L) x 260 (W) x 555 (H)" },
      { label: "Power Supply", value: "230V AC / 50 Hz" },
      { label: "Storage Capacity", value: "10 Litres" },
      { label: "Power Consumption", value: "65 W" },
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
      "High-end RO + UV purifier with multi-stage filtration and copper enhancement for pure, healthy hydration.",
    features: [
      {
        title: "Copper + Alkaline Fusion",
        text: "Combines copper enrichment and alkaline balance for superior water quality.",
      },
      {
        title: "Multi-Stage Filtration",
        text: "7-stage purification removes all contaminants while retaining natural minerals.",
      },
      {
        title: "UV Sterilization",
        text: "Ensures bacteria-free and safe water in every glass.",
      },
    ],
    specs: [
      { label: "Applications", value: "Brackish / Tap / Municipal Water" },
      { label: "Purification Rate", value: "25 L/hr" },
      { label: "Body Material", value: "ABS Plastic" },
      { label: "Mounting", value: "Wall Mount" },
      { label: "Dimensions (mm)", value: "420 (L) x 270 (W) x 560 (H)" },
      { label: "Power Supply", value: "230V AC / 50 Hz" },
      { label: "Storage Capacity", value: "10 Litres" },
      { label: "Power Consumption", value: "70 W" },
    ],
    warranty: "5 Years",
    installation: "Free",
  },
];

const cards = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'AQUAWAY Online Store',
      subtitle: 'AQUAWAY',
    },
   
 
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Request a Demo',
      subtitle: '',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Find Dealer',
      subtitle: '',
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Become Partner',
      subtitle: '',
    },
  ];


const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // ✅ unwrap the promise
  const product = products.find((p) => p.id === Number(resolvedParams.id));

  if (!product) return notFound();

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#5c5c5c", color: "#fff" }}>
      <Navigation />

      {/* HERO SECTION */}
      <section
        className="py-12 md:py-20"
        style={{ background: "linear-gradient(to right, #7C7C7C, #A2A2A2)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl shadow-lg w-full object-contain"
            />
          </div>
          <div className="flex-1 text-white">
            <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4 text-black">₹{product.price}</p>
            <p className="text-gray-100 mb-6 leading-relaxed">{product.description}</p>
            <a
              href="https://wa.me/+918926189189"
              className="inline-block bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>
<section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Main Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Why Choose an RO Water Purifier?
    </h2>

    {/* Intro Paragraph */}
    <p className="text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
      Impure water acts as a silent threat to your health, gradually leading to serious illnesses. 
      Contaminated water is responsible for diseases such as <strong>Cholera, Dysentery, Diarrhoea, Jaundice, Typhoid, Tuberculosis</strong>, 
      and in extreme cases, even <strong>Cancer</strong>.
    </p>

    {/* Statistics */}
    <div className="mb-12 text-left md:text-center max-w-3xl mx-auto">
      <p className="text-gray-300 font-medium mb-4">In India, the impact is alarming:</p>
      <ul className="space-y-3 text-gray-200">
        <li>✓ Over <strong>37.7 million people</strong> suffer from waterborne diseases every year.</li>
        <li>✓ More than <strong>1.5 million children</strong> lose their lives annually due to diarrhoea alone.</li>
        <li>✓ <strong>80% of stomach-related illnesses</strong> in the country are linked directly to polluted drinking water.</li>
      </ul>
    </div>

    {/* Rising Impurities Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div
        className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.03]"
        style={{ background: "linear-gradient(to right, #7C7C7C, #A2A2A2)" }}
      >
        <h3 className="text-xl font-bold mb-3 text-white">Groundwater Contamination</h3>
        <p className="text-gray-100">
          Excessive use of pesticides and fertilizers has introduced dangerous chemicals like 
          <strong> arsenic, fluoride, and lead</strong> into borewell water.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.03]"
        style={{ background: "linear-gradient(to right, #7C7C7C, #A2A2A2)" }}
      >
        <h3 className="text-xl font-bold mb-3 text-white">River Water Pollution</h3>
        <p className="text-gray-100">
          Industrial waste and agricultural runoff release harmful pesticides and chemicals into rivers, 
          making the water unsafe for drinking.
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.03]"
        style={{ background: "linear-gradient(to right, #7C7C7C, #A2A2A2)" }}
      >
        <h3 className="text-xl font-bold mb-3 text-white">Rusted Pipelines</h3>
        <p className="text-gray-100">
          Municipal water travels through old, corroded pipes and unclean overhead tanks, 
          picking up rust particles and bacteria along the way.
        </p>
      </div>
    </div>

    {/* Closing Statement */}
    <div className="mt-12 max-w-4xl mx-auto">
      <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed">
        These invisible impurities <strong>cannot be removed by boiling or ordinary filters</strong>. 
        Only <strong>Reverse Osmosis (RO) technology</strong> can effectively eliminate dissolved salts, 
        heavy metals, pesticides, and harmful chemicals—delivering <strong>100% safe and pure drinking water</strong>.
      </p>
      <p className="mt-6 text-2xl font-bold text-white">
        Make the smart choice—install an RO water purifier today and protect your family from the hidden dangers of impure water.
      </p>
    </div>
  </div>
</section>
      {/* FEATURES SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Features</h2>
          <p className="text-gray-200 mb-12">
            Makes water pure & keeps your family healthy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.03]"
                style={{ background: "linear-gradient(to right, #7C7C7C, #A2A2A2)" }}
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-100">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  <section className="py-12 md:py-16 bg-gray-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
      Where To Buy
    </h2>

    {/* 2-column grid on md+ */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {cards.map((card, idx) => {
        // Determine href based on title
        const getHref = () => {
          if (card.title === "AQUAWAY Online Store") return "/products";
          if (
            card.title === "Request a Demo" ||
            card.title === "Find Dealer" ||
            card.title === "Become Partner"
          )
            return "/contact";
          return "#";
        };

        return (
          <Link
            key={idx}
            href={getHref()}
            className="flex flex-col items-center justify-center p-6 rounded-xl
                       bg-gradient-to-r from-[#7C7C7C] to-[#A2A2A2]
                       text-white hover:shadow-xl transition-all transform hover:scale-[1.02]
                       focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            {/* Icon + optional subtitle */}
            <div className="mb-4">
              {card.subtitle ? (
                <div className="flex flex-col items-center gap-2">
                  {card.icon}
                  <span className="text-sm opacity-80">{card.subtitle}</span>
                </div>
              ) : (
                card.icon
              )}
            </div>

            <h3 className="text-lg md:text-xl font-semibold">
              {card.title}
            </h3>
          </Link>
        );
      })}
    </div>
  </div>
</section>

      {/* SPECIFICATIONS SECTION */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(to right, #7C7C7C, #A2A2A2)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.specs.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-b border-white/20 pb-4"
              >
                <div>
                  <p className="font-bold">{spec.label}</p>
                  <p className="text-gray-200">{spec.value}</p>
                </div>
                <CheckIcon />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

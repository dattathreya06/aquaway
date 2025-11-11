const DropletIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const LeafIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 21 1 21 1s-6 5.5-7 10.2A7 7 0 0 1 11 20z" />
  </svg>
);

const ZapIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const features = [
  {
    icon: <DropletIcon />,
    title: "Pure Drinking Water",
    description:
      "Advanced filtration removes harmful contaminants and ensures safe drinking water",
  },
  {
    icon: <LeafIcon />,
    title: "Eco-Friendly",
    description:
      "Sustainable water purification solutions that protect our environment",
  },
  {
    icon: <ZapIcon />,
    title: "Energy Efficient",
    description:
      "Low power consumption technology saves electricity while maintaining performance",
  },
  {
    icon: <ShieldIcon />,
    title: "5-Year Warranty",
    description:
      "Comprehensive warranty and after-sales service support included",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="py-8 md:py-12"
      style={{ backgroundColor: "#5c5c5c" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose AQUA WAY?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Leading provider of premium water purification solutions with proven
            quality and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center"
              style={{
                background: "linear-gradient(to right, #7C7C7C, #A2A2A2)",
              }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-100">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

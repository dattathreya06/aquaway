import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

const PackageIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const DropletIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
);

const services = [
  {
    id: 1,
    icon: <PackageIcon />,
    title: "Installation Service",
    description:
      "Professional installation of your water purifier system at your home or office by trained technicians.",
    link: "/installation",
  },
  {
    id: 2,
    icon: <WrenchIcon />,
    title: "Maintenance & Repair",
    description: "Regular maintenance, filter replacement, and repair services to keep your system running smoothly.",
    link: "/service-request",
  },
  {
    id: 3,
    icon: <DropletIcon />,
    title: "Water Testing",
    description: "Free water quality testing and analysis to determine your purification needs.",
    link: "/contact",
  },
  {
    id: 4,
    icon: <ClipboardIcon />,
    title: "Consultation",
    description: "Expert consultation on choosing the right water purifier for your specific requirements.",
    link: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#5c5c5c", color: "#fff" }}>
      <Navigation />

      {/* Hero */}
      <section
        className="py-12 md:py-20 text-center"
        style={{
          background: "linear-gradient(to right, #7C7C7C, #A2A2A2)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-gray-200">
            Complete water purification solutions from installation to maintenance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service) => (
              <Link key={service.id} href={service.link}>
                <div
                  className="h-full p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
                  style={{
                    background: "linear-gradient(to right, #7C7C7C, #A2A2A2)",
                  }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className="p-8 md:p-12 rounded-lg text-center"
            style={{
              background: "linear-gradient(to right, #7C7C7C, #A2A2A2)",
              color: "#fff",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Our Services?
            </h3>
            <p className="text-lg mb-6 text-gray-100">
              Contact us today to book a service or get professional consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-block px-8 py-3 bg-black text-white hover:bg-gray-800 font-bold rounded-lg transition-all"
              >
                Call: +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-200 font-bold rounded-lg transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

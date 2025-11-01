import Link from "next/link";
import Image from "next/image";
const MapPinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MessageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5m3.106-11.75a3.106 3.106 0 11-6.212 0 3.106 3.106 0 016.212 0zm5.529-3.263a.725.725 0 100-1.45.725.725 0 000 1.45zM12 17a5 5 0 110-10 5 5 0 010 10z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div>
                <Link href="/" className="flex items-center mb-4">
                  <div className="w-50 h-35 relative">
                    <Image
                      src="/aqualogo.png"
                      alt="Aquawaylogo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </h3>
            <p className="text-sm text-gray-300">
              Your trusted partner for premium water purification solutions in
              Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/service-request"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/installation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                {/* <MapPinIcon /> */}
                <span className="text-gray-300">
                  Shop No. 1,2,3, D.No. 8-15-106, Opp. Parking Gate, Vijayalaxmi
                  Theatre (B.V.K. Multiplex), Sriramnagar, L.B. Nagar, Hyderabad
                </span>
              </li>
              <li className="flex gap-2">
                <PhoneIcon />
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-2">
                <MailIcon />
                <a
                  href="mailto:info@aquaway.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@aquaway.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="#"
              className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            {/* <a
              href="#"
              className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a> */}
            <a
              href="https://wa.me/919876543210"
              className="bg-secondary hover:bg-secondary/80 p-3 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <MessageIcon />
            </a>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p>
              &copy; 2025 AQUA WAY. All rights reserved. | Designed with care
              for your water quality.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

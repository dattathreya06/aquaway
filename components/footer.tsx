import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, YoutubeIcon } from "lucide-react";

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className="text-white py-8 border-t border-white/20 "
      style={{ backgroundColor: "#5c5c5c" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Logo & About */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <div className="w-56 h-24 relative">
                <Image
                  src="/aqualogo.png"
                  alt="Aquaway Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-200">
              Your trusted partner for premium water purification solutions in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Services"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-200 hover:text-black transition-colors duration-200 text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Our Services</h4>
            <ul className="space-y-3">
              {["Maintenance", "Installation", "Support", "Feedback"].map((service) => (
                <li key={service}>
                  <Link
                    href="/contact"
                    className="text-gray-200 hover:text-black transition-colors duration-200 text-sm font-medium"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon />
                <span className="text-gray-200 leading-relaxed">
                  Shop No. 1,2,3, D.No. 8-15-106,<br />
                  Opp. Parking Gate, Vijayalaxmi Theatre (B.V.K. Multiplex),<br />
                  Sriramnagar, L.B. Nagar, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+918926189189" className="hover:text-black transition-colors">
                  +91 8926189189
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:aquawaytechnologies1@gmail.com" className="hover:text-black transition-colors">
                  aquawaytechnologies1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div
          className="border-t border-white/20 pt-10"
        
        >
          <div className="flex justify-center gap-5 mb-8 pt-6">
            {/* <a
              href="#"
              aria-label="Facebook"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 shadow-lg"
            >
              <FacebookIcon />
            </a> */}
             <a
              href="https://www.instagram.com/aquaway_technologies?igsh=MTFuczltNTlvbzgxaw=="
              aria-label="Instagram"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 shadow-lg"
            >
              <InstagramIcon />
            </a>
             <a
              href="https://youtube.com/@aquawaytechnologies?si=aElJY7hDV3RLhzT5"
              target="_blank"
              aria-label="Youtube"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 shadow-lg"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://wa.me/918926189189"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 shadow-lg"
            >
              <MessageIcon />
            </a>
          </div>

          <div className="text-center text-sm text-white/70 pb-4">
            <p>
              &copy; 2025 <span className="font-semibold text-white">AQUA WAY</span>. All rights reserved.{" "}
              <br className="md:hidden" /> Designed with care for your water quality.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

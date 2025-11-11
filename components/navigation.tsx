"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MessageIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
<nav className="sticky top-0 z-50 bg-[#cecece] border-b border-border shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 hover:opacity-80 transition"
      >
        <div className="w-50 h-20 relative">
          <Image
            src="/a-logo.png"
            alt="Aquaway Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 rounded-md text-black hover:bg-black/10 hover:text-black/80 transition-all duration-200 text-sm font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="tel:+919876543210"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg  transition-all font-medium shadow-md"
          style={{
              background: "#000",
              color: "white",
            }}
        >
          <PhoneIcon />
          <span className="hidden lg:inline" >Call Now</span>
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#7C7C7C] to-[#A2A2A2] text-white hover:opacity-90 transition-all font-medium shadow-md"
        >
          <MessageIcon />
          <span className="hidden lg:inline">WhatsApp</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-black hover:bg-black/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden pb-6 pt-4 bg-[#cecece] border-t border-border">
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-black hover:bg-black/10 hover:text-black/80 transition-all text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <a
              href="tel:+919876543210"
              className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-[#0156dd] text-white hover:bg-[#1f75fe] transition-all font-medium shadow-md"
            >
              <PhoneIcon />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-r from-[#7C7C7C] to-[#A2A2A2] text-white hover:opacity-90 transition-all font-medium shadow-md"
            >
              <MessageIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    )}
  </div>
</nav>
  );
}

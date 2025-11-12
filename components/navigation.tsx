"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ──────────── Icons ──────────── */
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MessageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

/* ──────────── Navigation ──────────── */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"en" | "te">("en");
  const observerRef = useRef<MutationObserver | null>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  /* Load Google Translate Script */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const id = "google-translate-script";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    (window as any).googleTranslateElementInit = () => {
      if (!(window as any).google) return;
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,te",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "hidden_google_translate_container"
      );
    };

    // Hide ugly Google frames and combo box
    observerRef.current = new MutationObserver(() => {
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      const frames = document.querySelectorAll("iframe.goog-te-banner-frame, iframe.goog-te-menu-frame");
      frames.forEach((f) => ((f as HTMLIFrameElement).style.display = "none"));
      if (combo) combo.style.display = "none";
    });

    observerRef.current.observe(document.body, { childList: true, subtree: true });
    return () => observerRef.current?.disconnect();
  }, []);

  /* Change Language Function */
  function changeLanguage(lang: "en" | "te") {
    setSelectedLang(lang);
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;

    if (combo) {
      combo.value = lang;
      const event = document.createEvent("HTMLEvents");
      event.initEvent("change", true, true);
      combo.dispatchEvent(event);
    } else {
      // fallback via cookie + reload
      const value = `/en/${lang}`;
      document.cookie = `googtrans=${value}; path=/;`;
      document.cookie = `googtrans=${value}; domain=${location.hostname}; path=/;`;
      setTimeout(() => location.reload(), 100);
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#cecece] border-b border-border shadow-md">
      {/* Hidden container for Google translate engine */}
      <div id="hidden_google_translate_container" style={{ display: "none" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-44 h-14 relative">
              <Image src="/aqualogo.png" alt="Aquaway Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-black hover:bg-black/10 hover:text-black/80 transition-all duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Themed Translator */}
            <div className="ml-3 flex items-center bg-white border border-gray-300 rounded-md px-3 py-1.5 shadow-sm">
              <GlobeIcon />
              <select
                value={selectedLang}
                onChange={(e) => changeLanguage(e.target.value as "en" | "te")}
                className="ml-2 bg-transparent text-sm font-medium cursor-pointer outline-none text-gray-800"
              >
                <option value="en">English</option>
                <option value="te">తెలుగు</option>
              </select>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+918926189189"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-black text-white hover:bg-black/90 transition-all font-medium shadow-md"
            >
              <PhoneIcon />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918926189189"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#7C7C7C] to-[#A2A2A2] text-white hover:opacity-90 transition-all font-medium shadow-md"
            >
              <MessageIcon />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-black hover:bg-black/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-4 bg-[#cecece] border-t border-border">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-black hover:bg-black/10 transition-all text-base font-medium rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Translator (mobile) */}
              <div className="px-4 mt-3 flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 shadow-sm">
                <GlobeIcon />
                <select
                  value={selectedLang}
                  onChange={(e) => changeLanguage(e.target.value as "en" | "te")}
                  className="ml-2 bg-transparent text-sm font-medium cursor-pointer outline-none text-gray-800"
                >
                  <option value="en">English</option>
                  <option value="te">తెలుగు</option>
                </select>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border px-4">
                <a
                  href="tel:+918926189189"
                  className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-lg bg-[#0156dd] text-white hover:bg-[#1f75fe] transition-all font-medium shadow-md"
                >
                  <PhoneIcon />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918926189189"
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

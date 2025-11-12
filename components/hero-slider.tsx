"use client";

import { useState, useEffect, useRef } from "react";

/* ──────────── Icons ──────────── */
const ChevronLeftIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const slides = [
  { id: 1, title: "", subtitle: "", image: "/bn1.png", cta: "" },
  { id: 2, title: "", subtitle: "", image: "/bn2.png", cta: "" },
  { id: 3, title: "", subtitle: "", image: "/bn3.png", cta: "" },
];

/* ──────────── Component ──────────── */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  /* Auto Play */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  /* Navigation */
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  /* Swipe */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image Container */}
      <div className="relative w-full h-[350px] sm:h-[350px] md:h-[600px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image (contain on mobile, cover on desktop) */}
            <img
              src={slide.image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain md:object-cover transition-all duration-700"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Optional dark overlay (subtle gradient for text readability) */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" /> */}

            {/* Text / Content (currently empty placeholders) */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 z-20">
              {slide.title && (
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                  {slide.title}
                </h2>
              )}
              {slide.subtitle && (
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-xl">
                  {slide.subtitle}
                </p>
              )}
              {slide.cta && (
                <button className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105">
                  {slide.cta}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-md transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-md transition-all"
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all rounded-full ${
              index === current
                ? "bg-white w-8 sm:w-10 h-2 sm:h-3"
                : "bg-white/60 hover:bg-white/80 w-2.5 sm:w-3 h-2.5 sm:h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

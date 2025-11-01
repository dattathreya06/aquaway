"use client"

import { useState, useEffect } from "react"

const ChevronLeftIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const slides = [
  {
    id: 1,
    title: "Pure Water, Pure Health",
    subtitle: "Advanced water purification technology for your family",
    image: "/water-purifier-home.jpg",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Alkaline Water Benefits",
    subtitle: "Restore pH balance and boost immunity naturally",
    image: "/alkaline-water-purifier.jpg",
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Advanced RO Technology",
    subtitle: "Remove 99.9% impurities with our elite RO systems",
    image: "/ro-water-purifier-system.jpg",
    cta: "Explore Products",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden rounded-lg shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">{slide.title}</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">{slide.subtitle}</p>
              <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all transform hover:scale-105">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-accent w-8" : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Water Quality?</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Get professional consultation for your water purification needs today. Our experts are ready to help!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary hover:bg-white/90 font-bold rounded-lg transition-all transform hover:scale-105 text-lg"
          >
            <PhoneIcon />
            Call: +91 98765 43210
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-lg transition-all transform hover:scale-105 text-lg"
          >
            <MessageIcon />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}

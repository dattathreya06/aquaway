"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const PackageIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

export default function InstallationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productModel: "",
    installationType: "wall",
    address: "",
    city: "Hyderabad",
    postalCode: "",
    installationDate: "",
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Installation request:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        productModel: "",
        installationType: "wall",
        address: "",
        city: "Hyderabad",
        postalCode: "",
        installationDate: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <PackageIcon />
            Installation Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional installation of your water purifier with free setup and guidance
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <h3 className="text-lg font-bold text-foreground mb-3">Professional Installation</h3>
              <p className="text-muted-foreground">
                Our trained technicians will install your water purifier with proper setup and testing.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
              <h3 className="text-lg font-bold text-foreground mb-3">Free Training</h3>
              <p className="text-muted-foreground">
                Complete guidance on usage, maintenance, and filter replacement for optimal performance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
              <h3 className="text-lg font-bold text-foreground mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We ensure the system is working perfectly before completion with water quality testing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {submitted && (
                <div className="mb-6 p-4 bg-secondary/10 border-2 border-secondary rounded-lg flex items-start gap-3">
                  <CheckCircleIcon />
                  <div>
                    <h3 className="font-bold text-foreground">Request Received!</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will contact you to confirm installation details.
                    </p>
                  </div>
                </div>
              )}

              <h2 className="text-2xl font-bold text-foreground mb-6">Book Installation</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Purifier Model *</label>
                  <select
                    name="productModel"
                    value={formData.productModel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select model</option>
                    <option value="elite">Water Purifier Elite</option>
                    <option value="roalkaline">RO+Alkaline Water Purifier</option>
                    <option value="ultraplus">Ultra Plus Water Purifier</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Installation Type *</label>
                  <select
                    name="installationType"
                    value={formData.installationType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="wall">Wall-mounted</option>
                    <option value="counter">Counter-top</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Street address, building name, etc."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Postal Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="PIN code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="installationDate"
                      value={formData.installationDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  Book Installation
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Installation Process</h3>
                <div className="space-y-4">
                  {[
                    { num: "1", title: "Assessment", desc: "Our technician assesses your water supply and location" },
                    {
                      num: "2",
                      title: "Installation",
                      desc: "Professional installation with proper fittings and connections",
                    },
                    { num: "3", title: "Testing", desc: "Water quality testing and system performance verification" },
                    { num: "4", title: "Training", desc: "Complete user training and warranty information" },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/10 rounded-lg p-6 border-l-4 border-secondary">
                <h4 className="font-bold text-foreground mb-2">Service Area</h4>
                <div className="flex items-start gap-2">
                  <MapPinIcon />
                  <div>
                    <p className="text-muted-foreground">
                      We provide installation services across Hyderabad and nearby areas. Call us to check service
                      availability in your location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

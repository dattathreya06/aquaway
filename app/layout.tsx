import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script";

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AQUA WAY - Premium Water Purifiers in Hyderabad",
  description:
    "AQUA WAY provides high-quality water purification solutions including RO, Alkaline, and Elite water purifiers in Hyderabad.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}
       {/* ✅ 1. Define callback globally before anything else */}
        <Script src="/translate-init.js" strategy="beforeInteractive" />

        {/* ✅ 2. Load Google Translate script after page becomes interactive */}
       <Script
  id="google-translate-loader"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.addEventListener('load', function () {
        if (typeof googleTranslateElementInit === 'function') {
          googleTranslateElementInit();
        } else {
          const s = document.createElement('script');
          s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          s.async = true;
          document.body.appendChild(s);
        }
      });
    `,
  }}
/>


      </body>
    </html>
  )
}

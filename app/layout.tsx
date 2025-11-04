import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inter = Inter({ subsets: ["latin"] })

// Rich metadata for SEO, Open Graph, Twitter cards, and canonical
export const metadata: Metadata = {
  title: {
    default: "Accord Medical Supplies Ltd",
    template: "%s | Accord Medical Supplies Ltd",
  },
  description:
    "Your trusted healthcare supplies partner — medical equipment, consumables, and PPE in Kenya.",
  generator: "v0.app",
  keywords: [
    "medical supplies",
    "medical equipment",
    "healthcare supplies",
    "Accord Medical",
    "Nairobi",
    "Kenya",
    "PPE",
    "wholesale medical supplies",
  ],
  authors: [{ name: "Accord Medical Supplies Ltd", url: "https://accordmedical.co.ke" }],
  openGraph: {
    title: "Accord Medical Supplies Ltd",
    description:
      "Your trusted healthcare supplies partner — medical equipment, consumables, and PPE in Kenya.",
    url: "https://accordmedical.co.ke",
    siteName: "Accord Medical Supplies Ltd",
    images: [
      {
        url: "https://accordmedical.co.ke/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accord Medical Supplies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accord Medical Supplies Ltd",
    description:
      "Your trusted healthcare supplies partner — medical equipment, consumables, and PPE in Kenya.",
    images: ["https://accordmedical.co.ke/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://accordmedical.co.ke",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Accord Medical Supplies Ltd",
    url: "https://accordmedical.co.ke",
    logo: "https://accordmedical.co.ke/logo.png",
    sameAs: [
      "https://x.com/AccordMedKe",
      "https://www.facebook.com/AccordMedKe",
      "https://www.instagram.com/accordmedicalke/",
      "https://www.linkedin.com/company/accord-medical-supplies-ltd",
      "https://www.tiktok.com/@accordmedicalke",
      "https://accordmedical.co.ke",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+254729115000",
        contactType: "customer service",
        areaServed: "KE",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* Preconnect to font host for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Canonical link to prefer production domain */}
        <link rel="canonical" href="https://accordmedical.co.ke" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        {/* JSON-LD organization schema for better SERP presence */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
      </body>
    </html>
  )
}

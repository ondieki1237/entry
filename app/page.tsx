"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Phone,
  MessageCircle,
  Briefcase,
  AlertCircle,
  Calendar,
  Tag,
  MapPin,
  X,
  Instagram,
  Linkedin,
  Facebook,
  Music,
  ShoppingCart,
} from "lucide-react"

interface Location {
  name: string
  address: string
  email: string
  phone: string
}

const locations: Location[] = [
  {
    name: "Nairobi (Head Office)",
    address: "Commerce House, 3rd Floor, Room 308, Moi Avenue",
    email: "info@accordmedical.co.ke",
    phone: "+254 729 115000 / +254 700 672600",
  },
  {
    name: "Eldoret Office",
    address: "Aico Plaza, 2nd Floor, Room 8, Makasembo Road",
    email: "eldoret@accordmedical.co.ke",
    phone: "+254 729 115000",
  },
  {
    name: "Syokimau Warehouse",
    address: "Silver Business Centre, Warehouse No.16, Carepack Road",
    email: "—",
    phone: "+254 729 115000",
  },
]

const tiles = [
  {
    id: 1,
    title: "Purchase with Us",
    description: "Browse and buy our products",
    icon: ShoppingCart,
    href: "https://accordmedical.co.ke",
    external: true,
  },
  {
    id: 2,
    title: "Chat with Us",
    description: "WhatsApp support available",
    icon: MessageCircle,
    action: "whatsapp",
    phone: "+254729115000",
  },
  {
    id: 3,
    title: "Available Jobs",
    description: "Join our growing team",
    icon: Briefcase,
    href: "https://jobs.accordmedical.co.ke",
    external: true,
  },
  {
    id: 4,
    title: "Share Feedback",
    description: "Share your feedback with us",
    icon: AlertCircle,
    href: "https://customerresponse.accordmedical.co.ke",
    external: true,
  },
  {
    id: 5,
    title: "Upcoming Events",
    description: "Stay updated with our events",
    icon: Calendar,
    href: "https://events.accordmedical.co.ke",
    external: true,
  },
  {
    id: 6,
    title: "Special Offers",
    description: "Check current promotions",
    icon: Tag,
    href: "https://events.accordmedical.co.ke",
    external: true,
  },
  {
    id: 7,
    title: "Office Locations",
    description: "Find us near you",
    icon: MapPin,
    action: "locations",
  },
  {
    id: 8,
    title: "Social Media",
    description: "Follow us online",
    icon: Phone,
    action: "social",
  },
]

export default function EntryPage() {
  const [showLocations, setShowLocations] = useState(false)
  const [showSocial, setShowSocial] = useState(false)

  const handleWhatsApp = (phone: string) => {
    const message = encodeURIComponent("Hello Accord Medical — I would like help with...")
    window.open(`https://wa.me/${phone.replace(/\D/g, "")}?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out;
        }

        .modal-backdrop {
          animation: fadeInDown 0.3s ease-out;
          backdrop-filter: blur(8px);
          background-color: rgba(0, 0, 0, 0.5);
        }

        .tile-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 174, 239, 0.15);
        }

        .button-hover:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 16px rgba(0, 174, 239, 0.2);
        }
      `}</style>

      {/* Header */}
      <header className="border-b animate-fade-in-down" style={{ borderColor: "#E5E7EB", backgroundColor: "#F6F8FB" }}>
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src="/logo.png" alt="Accord Medical Logo" width={80} height={80} className="w-16 md:w-20" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#000000" }}>
              Accord Medical
            </h1>
            <p className="text-lg md:text-xl" style={{ color: "#6B7280" }}>
              Supplies Ltd
            </p>
            <p className="text-sm md:text-base mt-3" style={{ color: "#00AEEF" }}>
              We supply Medical Equipment, Consumables in Kenya and beyond.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Grid of Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {tiles.map((tile, index) => {
            const Icon = tile.icon
            return (
              <div
                key={tile.id}
                className="rounded-lg p-6 shadow-sm border tile-hover transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E5E7EB",
                  animationDelay: `${index * 0.05}s`,
                }}
                onClick={() => {
                  if (tile.action === "locations") setShowLocations(true)
                  if (tile.action === "social") setShowSocial(true)
                  if (tile.action === "whatsapp") handleWhatsApp(tile.phone!)
                  if (tile.external || tile.href) window.open(tile.href, "_blank")
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300"
                  style={{ backgroundColor: "#00AEEF" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#FFFFFF" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#000000" }}>
                  {tile.title}
                </h3>
                <p style={{ color: "#6B7280" }}>{tile.description}</p>
              </div>
            )
          })}
        </div>
      </main>

      {/* Locations Modal */}
      {showLocations && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50">
          <div
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-96 overflow-y-auto animate-scale-in"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold" style={{ color: "#000000" }}>
                  Our Offices
                </h2>
                <button
                  onClick={() => setShowLocations(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg button-hover transition-all duration-200"
                >
                  <X className="w-6 h-6" style={{ color: "#000000" }} />
                </button>
              </div>

              <div className="space-y-6">
                {locations.map((location, idx) => (
                  <div key={idx} className="pb-6 border-b last:border-b-0" style={{ borderColor: "#E5E7EB" }}>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: "#00AEEF" }}>
                      {location.name}
                    </h3>
                    <p className="mb-2" style={{ color: "#6B7280" }}>
                      <span className="font-medium">Address:</span> {location.address}
                    </p>
                    <p className="mb-2" style={{ color: "#6B7280" }}>
                      <span className="font-medium">Email:</span> {location.email}
                    </p>
                    <p style={{ color: "#6B7280" }}>
                      <span className="font-medium">Phone:</span> {location.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Modal */}
      {showSocial && (
        <div className="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50">
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full animate-scale-in"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold" style={{ color: "#000000" }}>
                  Follow Us
                </h2>
                <button
                  onClick={() => setShowSocial(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg button-hover transition-all duration-200"
                >
                  <X className="w-6 h-6" style={{ color: "#000000" }} />
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 button-hover transition-all duration-300"
                  style={{ backgroundColor: "#00AEEF", color: "#FFFFFF" }}
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 button-hover transition-all duration-300"
                  style={{ backgroundColor: "#00AEEF", color: "#FFFFFF" }}
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 button-hover transition-all duration-300"
                  style={{ backgroundColor: "#00AEEF", color: "#FFFFFF" }}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 button-hover transition-all duration-300"
                  style={{ backgroundColor: "#00AEEF", color: "#FFFFFF" }}
                >
                  <Music className="w-5 h-5" />
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className="border-t mt-12 md:mt-16 animate-fade-in-up"
        style={{ borderColor: "#E5E7EB", backgroundColor: "#F6F8FB" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p style={{ color: "#6B7280" }} className="text-sm">
              © 2025 Accord Medical Supplies Ltd. All rights reserved.
            </p>
            <p style={{ color: "#6B7280" }} className="text-sm mt-2">
              📞 +254 729 115000 | 📧 info@accordmedical.co.ke
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

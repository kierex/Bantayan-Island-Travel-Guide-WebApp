"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  const quickLinks = [
    { label: "Destinations", href: "/destinations" },
    { label: "Beaches", href: "/beaches" },
    { label: "Activities", href: "/activities" },
    { label: "Hotels", href: "/hotels" },
    { label: "Food Guide", href: "/food" },
    { label: "Transportation", href: "/transportation" },
    { label: "Travel Tips", href: "/travel-tips" },
    { label: "Gallery", href: "/gallery" },
  ];

  const infoLinks = [
    { label: "About Bantayan", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Attractions", href: "/attractions" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center shrink-0">
                <MapPin size={17} className="text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-base leading-tight">
                  Bantayan Island
                </p>
                <p className="text-xs text-gray-500 leading-tight">Travel Guide</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Your complete guide to discovering the pristine beaches, rich culture, and unforgettable experiences of Bantayan Island, Cebu, Philippines.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={14} className="shrink-0 text-primary-500" />
                <span>Bantayan Island, Cebu, Philippines</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Phone size={14} className="shrink-0 text-primary-500" />
                <span>+63 32 438 0000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Mail size={14} className="shrink-0 text-primary-500" />
                <span>info@bantayan-island-guide.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Information</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Connect</h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-white text-sm font-semibold mb-2">Newsletter</p>
              <p className="text-gray-600 text-xs mb-3">Get travel tips and updates.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600 text-center md:text-left">
              &copy; {new Date().getFullYear()} Bantayan Island Travel Guide. All rights reserved.
            </p>

            {/* Developer Credit */}
            <div className="text-center">
              <p className="text-xs text-gray-600">Developed by</p>
              <p className="text-sm font-semibold text-gray-300">Vernie Esgana</p>
              <p className="text-xs text-primary-500 font-medium">BSIT 3 NORTH</p>
            </div>

            <p className="text-xs text-gray-700 text-center md:text-right">
              Bantayan Island, Cebu, Philippines
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

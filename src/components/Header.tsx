"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/lib/site-config";
import { Phone, Mail, Menu, X, MessageSquare } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-monex-border sticky top-0 z-50 text-monex-black">
      {/* Top Utility Bar */}
      <div className="bg-monex-black text-slate-300 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-medium text-[11px] sm:text-xs">
            Monex — Stone Care Chemicals, Power Tools & Made in India Equipment
          </span>
          <div className="flex items-center gap-6 text-[11px] sm:text-xs">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-monex-green" />
              <span>+91 82878 01030</span>
            </a>
            <a
              href={`mailto:${siteConfig.email.address}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 hidden sm:flex"
            >
              <Mail className="w-3 h-3 text-monex-green" />
              <span>monexpowertool@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Monex Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-10 sm:h-12 w-32 sm:w-40 relative">
            <Image
              src="/brand/monex-logo.png"
              alt="Monex Logo"
              width={160}
              height={48}
              className="object-contain h-full w-full"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-monex-black">
          <Link href="/" className="hover:text-monex-green transition-colors py-2">
            Home
          </Link>
          <Link href="/products" className="hover:text-monex-green transition-colors py-2">
            Products
          </Link>
          <Link href="/products/stone-care-chemicals" className="hover:text-monex-green transition-colors py-2">
            Stone Chemicals
          </Link>
          <Link href="/products/power-tools" className="hover:text-monex-green transition-colors py-2">
            Power Tools
          </Link>
          <Link href="/products/diamond-tools" className="hover:text-monex-green transition-colors py-2">
            Diamond Tools
          </Link>

          <Link href="/about" className="hover:text-monex-green transition-colors py-2">
            About
          </Link>
          <Link href="/contact" className="hover:text-monex-green transition-colors py-2">
            Contact
          </Link>
        </nav>

        {/* Far Right Action CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href={getWhatsAppEnquiryUrl("Price Enquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-monex-green hover:bg-monex-darkGreen text-white px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-monex-black hover:text-monex-green focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-monex-border px-4 pt-3 pb-6 space-y-3 text-sm">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-monex-black hover:text-monex-green"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-monex-black hover:text-monex-green"
          >
            All Products Catalogue
          </Link>
          <Link
            href="/products/stone-care-chemicals"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 pl-4 text-xs font-medium text-slate-700 hover:text-monex-green"
          >
            • Stone Care Chemicals
          </Link>
          <Link
            href="/products/power-tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 pl-4 text-xs font-medium text-slate-700 hover:text-monex-green"
          >
            • Power Tools (Pro & Classic)
          </Link>
          <Link
            href="/products/diamond-tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 pl-4 text-xs font-medium text-slate-700 hover:text-monex-green"
          >
            • Diamond Tools & Accessories
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-monex-black hover:text-monex-green"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-semibold text-monex-black hover:text-monex-green"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-monex-border">
            <a
              href={getWhatsAppEnquiryUrl("Price Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-monex-green hover:bg-monex-darkGreen text-white py-3 rounded-sm text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About Price (WhatsApp)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

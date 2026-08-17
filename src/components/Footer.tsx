import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-monex-black text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Address Column */}
          <div className="space-y-3">
            <div className="w-36">
              <Image
                src="/brand/monex-logo.svg"
                alt="Monex Logo"
                width={140}
                height={46}
                className="object-contain"
              />
            </div>
            <div className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
              <MapPin className="w-4 h-4 text-monex-green shrink-0 mt-0.5" />
              <span>Khasra No. 884, Rithala Industrial Area, Delhi - 110085.</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 border-b border-slate-800 pb-1.5">
              Product Categories
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/products/stone-care-chemicals" className="hover:text-monex-green transition-colors">
                  Stone Care Chemicals
                </Link>
              </li>
              <li>
                <Link href="/products/power-tools/pro-series" className="hover:text-monex-green transition-colors">
                  Pro Series Power Tools
                </Link>
              </li>
              <li>
                <Link href="/products/power-tools/made-in-india" className="hover:text-monex-green transition-colors">
                  Made in India Power Tools
                </Link>
              </li>
              <li>
                <Link href="/products/power-tools/classic-series" className="hover:text-monex-green transition-colors">
                  Classic Series Power Tools
                </Link>
              </li>
              <li>
                <Link href="/products/carman" className="hover:text-monex-green transition-colors font-bold text-slate-200">
                  CARMAN Division
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 border-b border-slate-800 pb-1.5">
              Company & Enquiries
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-monex-green transition-colors">
                  About Monex
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-monex-green transition-colors">
                  Contact & B2B Sales
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-monex-green transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-monex-green" />
                  <span>WhatsApp Price Enquiry</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 border-b border-slate-800 pb-1.5">
              Official Contact
            </h4>
            <div className="space-y-2 text-slate-400">
              <a
                href="tel:+918287801030"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-monex-green shrink-0" />
                <span className="text-slate-200">+91 82878 01030</span>
              </a>
              <a
                href="mailto:monexpowertool@gmail.com"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-monex-green shrink-0" />
                <span className="text-slate-200">monexpowertool@gmail.com</span>
              </a>
              
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-monex-green text-xs font-semibold"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-monex-green text-xs font-semibold"
                >
                  Instagram
                </a>
                <span>•</span>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-monex-green text-xs font-semibold"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Monex. All rights reserved.</p>
          <p>Official Monex Company Product Catalogue</p>
        </div>
      </div>
    </footer>
  );
}

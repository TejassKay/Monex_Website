import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppEnquiryUrl } from "@/lib/site-config";
import { MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Monex | Official Company Profile",
  description: "Learn about Monex, a trusted importer and manufacturer of stone care chemicals and high-durability power equipment.",
};

export default function AboutPage() {
  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Editorial Header */}
        <div className="bg-white border border-monex-border p-8 rounded-sm space-y-3">
          <span className="text-xs font-mono font-bold text-monex-green uppercase tracking-wider block">
            Official Profile
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-monex-black uppercase tracking-tight">
            About Monex
          </h1>
          <p className="text-slate-700 text-base font-semibold">
            A Stone Care Expert & Tools That Don't Quit.
          </p>
        </div>

        {/* Corporate Factual Overview */}
        <div className="bg-white border border-monex-border rounded-sm p-8 space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-lg font-bold text-monex-black uppercase tracking-wide border-b border-monex-border pb-3">
            Company Overview
          </h2>
          
          <p>
            Monex is a trusted importer and manufacturer of premium stone care chemicals and specialized power machinery, providing complete technical solutions for marble, tiles, granite, and natural stones.
          </p>

          <p>
            We believe stone surfaces are long-term investments that deserve proper care and maintenance. From protection and restoration to enhancement and repair, Monex delivers reliable solutions to preserve the beauty, strength, and life of valuable architectural surfaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-monex-border">
            <div className="bg-monex-offWhite border border-monex-border p-5 rounded-sm space-y-3">
              <div className="aspect-[4/3] relative bg-white border border-monex-border p-2 rounded-sm flex items-center justify-center overflow-hidden">
                <Image
                  src="/products/chemicals/IMG_5615.JPG.jpeg"
                  alt="Stone Care Chemicals"
                  width={200}
                  height={150}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h3 className="font-bold text-monex-black text-sm uppercase">Stone Care Chemicals Division</h3>
              <p className="text-xs text-slate-600">
                Formulating marble shiners, 2-part epoxy pastes, polyester resin joint fillers, nano densifiers, and solvent-based water-repellent sealers.
              </p>
            </div>

            <div className="bg-monex-offWhite border border-monex-border p-5 rounded-sm space-y-3">
              <div className="aspect-[4/3] relative bg-white border border-monex-border p-2 rounded-sm flex items-center justify-center overflow-hidden">
                <Image
                  src="/products/power-tools/pro-series/IMG_4656.JPG.jpeg"
                  alt="Power Tools Division"
                  width={200}
                  height={150}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h3 className="font-bold text-monex-black text-sm uppercase">Power Tools & Machinery Division</h3>
              <p className="text-xs text-slate-600">
                Supplying air compressors, rotary hammers, marble cutters, angle grinders, floor polishers, and zero-chip diamond cutting blades.
              </p>
            </div>
          </div>
        </div>

        {/* B2B Contact CTA */}
        <div className="bg-white border border-monex-border rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-monex-black uppercase">Looking for Commercial B2B Supply?</h3>
            <p className="text-xs text-slate-600">Contact our sales desk directly on WhatsApp for regional dealer pricing.</p>
          </div>
          <a
            href={getWhatsAppEnquiryUrl("About Page Enquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-monex-green hover:bg-monex-darkGreen text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

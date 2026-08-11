"use client";

import React from "react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/lib/site-config";
import { MessageSquare, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white border border-monex-border p-8 rounded-sm space-y-2">
          <h1 className="text-3xl font-extrabold text-monex-black uppercase tracking-tight">
            Contact Monex
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm">
            Commercial and B2B price enquiries for Retailers, Wholesalers, and Regional Distributors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Action Card: WhatsApp */}
            <div className="bg-white border border-monex-border rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-sm bg-emerald-100 border border-emerald-300 text-monex-green">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-monex-black text-base uppercase">WhatsApp Sales Desk</h3>
                  <p className="text-xs text-slate-500">Fastest price quotes & technical specs</p>
                </div>
              </div>
              <a
                href={getWhatsAppEnquiryUrl("General B2B Enquiry")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-monex-green hover:bg-monex-darkGreen text-white py-3.5 px-4 rounded-sm font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 82878 01030)</span>
              </a>
            </div>

            {/* Direct Phone & Email */}
            <div className="bg-white border border-monex-border rounded-sm p-6 space-y-4 text-xs">
              <h3 className="font-bold text-monex-black text-sm border-b border-monex-border pb-2 uppercase">Direct Support</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-monex-green shrink-0" />
                  <div>
                    <span className="block text-slate-500 text-[11px]">Phone Support:</span>
                    <a href={`tel:${siteConfig.phone}`} className="text-monex-black font-semibold hover:text-monex-green">
                      +91 82878 01030
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-monex-green shrink-0" />
                  <div>
                    <span className="block text-slate-500 text-[11px]">Email Address:</span>
                    <a href={`mailto:${siteConfig.email.address}`} className="text-monex-black font-semibold hover:text-monex-green">
                      monexpowertool@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Links */}
            <div className="bg-white border border-monex-border rounded-sm p-6 space-y-3 text-xs">
              <h3 className="font-bold text-monex-black text-sm uppercase">Official Social Profiles</h3>
              <div className="space-y-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-sm bg-monex-offWhite border border-monex-border text-slate-800 font-semibold hover:text-monex-green transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <span className="text-xs text-monex-green">→</span>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-sm bg-monex-offWhite border border-monex-border text-slate-800 font-semibold hover:text-monex-green transition-colors"
                >
                  <span>Instagram Profile</span>
                  <span className="text-xs text-monex-green">→</span>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-sm bg-monex-offWhite border border-monex-border text-slate-800 font-semibold hover:text-monex-green transition-colors"
                >
                  <span>Facebook Profile</span>
                  <span className="text-xs text-monex-green">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mail Draft Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-monex-border rounded-sm p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-bold text-monex-black border-b border-monex-border pb-3 uppercase">
                Send an Email Enquiry
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.target as HTMLFormElement;
                  const name = (target.elements.namedItem("fullName") as HTMLInputElement)?.value || "";
                  const phone = (target.elements.namedItem("phoneNum") as HTMLInputElement)?.value || "";
                  const btype = (target.elements.namedItem("businessType") as HTMLSelectElement)?.value || "";
                  const msg = (target.elements.namedItem("messageBody") as HTMLTextAreaElement)?.value || "";
                  
                  const subject = `B2B Price Enquiry from ${name} (${btype})`;
                  const body = `Hello Monex Sales Team,\n\nName: ${name}\nPhone/WhatsApp: ${phone}\nBusiness Type: ${btype}\n\nEnquiry Message:\n${msg}\n\nRegards,`;
                  
                  window.location.href = `mailto:${siteConfig.email.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold">Your Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-monex-offWhite border border-monex-border rounded-sm p-2.5 text-monex-black placeholder-slate-400 focus:outline-none focus:border-monex-green"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phoneNum"
                      required
                      placeholder="Enter phone number"
                      className="w-full bg-monex-offWhite border border-monex-border rounded-sm p-2.5 text-monex-black placeholder-slate-400 focus:outline-none focus:border-monex-green"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold">Business Type</label>
                  <select name="businessType" className="w-full bg-monex-offWhite border border-monex-border rounded-sm p-2.5 text-monex-black focus:outline-none focus:border-monex-green">
                    <option>Retail Customer</option>
                    <option>Wholesaler / Dealer</option>
                    <option>Commercial Distributor</option>
                    <option>Stone Restoration Contractor</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold">Products of Interest / Message *</label>
                  <textarea
                    rows={4}
                    name="messageBody"
                    required
                    placeholder="Specify product models (e.g. MX-62L, M555 Shiner) and required quantities..."
                    className="w-full bg-monex-offWhite border border-monex-border rounded-sm p-2.5 text-monex-black placeholder-slate-400 focus:outline-none focus:border-monex-green"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-monex-black hover:bg-slate-800 text-white py-3 rounded-sm font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Submit Price Enquiry (via Mail Draft)
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

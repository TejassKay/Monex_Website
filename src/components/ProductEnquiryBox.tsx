"use client";

import React, { useState } from "react";
import { Product } from "@/types/catalogue";
import { getWhatsAppEnquiryUrl, getEmailEnquiryUrl } from "@/lib/site-config";
import { MessageSquare, Mail, CheckCircle2, Layers, Ruler } from "lucide-react";

interface ProductEnquiryBoxProps {
  product: Product;
}

export default function ProductEnquiryBox({ product }: ProductEnquiryBoxProps) {
  const initialProfile = product.variants?.grooveProfiles?.[0] || null;
  const initialSize = product.variants?.sizes?.[0] || null;

  const [selectedProfile, setSelectedProfile] = useState<string | null>(initialProfile);
  const [selectedSize, setSelectedSize] = useState<string | null>(initialSize);

  // Compute variant summary string
  const variantParts: string[] = [];
  if (selectedProfile) variantParts.push(`Profile: ${selectedProfile}`);
  if (selectedSize) variantParts.push(`Size: ${selectedSize}`);
  const variantDetailsStr = variantParts.length > 0 ? variantParts.join(", ") : null;

  const whatsappUrl = getWhatsAppEnquiryUrl(product.name, product.model, variantDetailsStr);
  const emailUrl = getEmailEnquiryUrl(product.name, product.model, variantDetailsStr);

  return (
    <div className="space-y-6">
      {/* Variant Selector Box if variants exist */}
      {product.variants && (
        <div className="bg-white border border-monex-border rounded-sm p-4 space-y-4">
          <h3 className="text-xs font-extrabold text-monex-black uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-monex-green" /> Select Product Options & Custom Specifications
          </h3>

          {/* Groove Profile Option */}
          {product.variants.grooveProfiles && product.variants.grooveProfiles.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block">
                1. Groove Shape Profile:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.variants.grooveProfiles.map((profile) => (
                  <button
                    key={profile}
                    type="button"
                    onClick={() => setSelectedProfile(profile)}
                    className={`px-3.5 py-1.5 rounded-sm text-xs font-bold border transition-colors ${
                      selectedProfile === profile
                        ? "bg-monex-green text-white border-monex-green shadow-sm"
                        : "bg-monex-offWhite text-slate-800 border-monex-border hover:bg-slate-200"
                    }`}
                  >
                    {profile}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Option */}
          {product.variants.sizes && product.variants.sizes.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 text-slate-500" /> {product.variants.grooveProfiles ? "2. Blade Size:" : "1. Blade Size:"}
              </span>
              <div className="flex flex-wrap gap-2">
                {product.variants.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3.5 py-1.5 rounded-sm text-xs font-bold border transition-colors ${
                      selectedSize === sz
                        ? "bg-monex-green text-white border-monex-green shadow-sm"
                        : "bg-monex-offWhite text-slate-800 border-monex-border hover:bg-slate-200"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Selection Summary Pill */}
          {variantDetailsStr && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs px-3 py-2 rounded-sm font-semibold">
              Selected Configuration: <span className="font-bold">{variantDetailsStr}</span>
            </div>
          )}
        </div>
      )}

      {/* Price Enquiry Action Box */}
      <div className="bg-monex-offWhite border border-monex-border rounded-sm p-5 space-y-4">
        <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
          <CheckCircle2 className="w-4 h-4 text-monex-green shrink-0" />
          <span>Commercial B2B pricing available for Retailers, Wholesalers & Distributors</span>
        </div>

        {/* Primary WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-monex-green hover:bg-monex-darkGreen text-white py-3.5 px-4 rounded-sm font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Enquire About Price (WhatsApp)</span>
        </a>

        {/* Secondary Email Option */}
        <a
          href={emailUrl}
          className="w-full bg-white hover:bg-slate-100 text-slate-800 border border-monex-border py-2.5 px-4 rounded-sm font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
        >
          <Mail className="w-4 h-4 text-slate-600" />
          <span>Send Email Enquiry</span>
        </a>
      </div>
    </div>
  );
}

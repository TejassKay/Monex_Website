"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/catalogue";
import { getWhatsAppEnquiryUrl, getProductCanonicalUrl } from "@/lib/site-config";
import { MessageSquare, ImageOff } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const canonicalUrl = getProductCanonicalUrl(product.category, product.slug);
  const whatsappUrl = getWhatsAppEnquiryUrl(product.name, product.model);

  // Combine primary and gallery images into an array for auto-sliding
  const allImages = [
    ...(product.images.primary ? [product.images.primary] : []),
    ...product.images.gallery,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  // Determine tag label & custom styling based on product series or category
  const renderTag = () => {
    const s = String(product.series || "");
    const cat = product.category;

    if (s === "Pro Series") {
      return (
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border border-red-900 shadow-sm"
          style={{ backgroundColor: "#c70809", color: "#eb9005" }}
        >
          Pro Series
        </span>
      );
    }

    if (s === "Made in India") {
      return (
        <span
          className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-sm text-black shadow-sm border border-amber-300"
          style={{
            background: "linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
          }}
        >
          Made in India
        </span>
      );
    }

    if (s === "Classic Series" || s.includes("Classic")) {
      return (
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm text-white shadow-sm"
          style={{ backgroundColor: "#01a9a4" }}
        >
          Monex Classic
        </span>
      );
    }

    if (cat === "diamond-tools" || s === "Diamond Accessories") {
      return (
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm text-black border border-cyan-300 shadow-sm"
          style={{ backgroundColor: "#B9F2FF" }}
        >
          Diamond Tools
        </span>
      );
    }

    // Default Chemicals tag
    return (
      <span className="bg-slate-100 text-slate-700 border border-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded-sm">
        {s || "Monex Chemical"}
      </span>
    );
  };

  return (
    <div className="bg-white border border-monex-border rounded-sm overflow-hidden flex flex-col justify-between hover:border-monex-green transition-colors duration-150">
      <div>
        {/* Product Image Stage */}
        <div className="relative aspect-[4/3] bg-monex-offWhite border-b border-monex-border p-4 flex items-center justify-center">
          {product.catalogueStatus && (
            <div className="absolute top-2 left-2 z-10">
              <span className="bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                {product.catalogueStatus}
              </span>
            </div>
          )}

          {/* Top Right Customized Tag */}
          <div className="absolute top-2 right-2 z-10">
            {renderTag()}
          </div>

          <Link href={canonicalUrl} className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {allImages.length > 0 ? (
              <Image
                key={allImages[currentImageIndex]}
                src={allImages[currentImageIndex]}
                alt={product.name}
                width={280}
                height={210}
                className="object-contain max-h-full max-w-full transition-opacity duration-500 ease-in-out"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                <ImageOff className="w-8 h-8 mb-1 stroke-1 text-slate-400" />
                <span className="text-[11px] font-medium text-slate-500">Image Coming Soon</span>
              </div>
            )}
          </Link>

          {/* Slide Indicator Dots if multiple images */}
          {allImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {allImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "w-3 bg-monex-green" : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Meta */}
        <div className="p-4 space-y-1.5">
          {product.subcategory && (
            <span className="text-[10px] font-semibold text-monex-green uppercase tracking-wider block">
              {product.subcategory}
            </span>
          )}

          <Link href={canonicalUrl} className="block group">
            <h3 className="text-sm sm:text-base font-bold text-monex-black group-hover:text-monex-green transition-colors line-clamp-1">
              {product.name}
            </h3>
            {product.model && product.model !== product.name && (
              <span className="text-xs font-mono text-slate-500 block">
                Model: {product.model}
              </span>
            )}
          </Link>

          {product.tagline && (
            <p className="text-xs text-slate-600 line-clamp-2 leading-snug">
              {product.tagline}
            </p>
          )}

          {product.specifications.length > 0 && (
            <div className="pt-2 border-t border-monex-border text-[11px] text-slate-600 space-y-0.5">
              {product.specifications.slice(0, 2).map((spec, idx) => (
                <div key={idx} className="truncate">
                  <span className="font-semibold text-slate-800">{spec.key}:</span> {spec.value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-4 pt-0 space-y-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-monex-green hover:bg-monex-darkGreen text-white py-2 px-3 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enquire About Price</span>
        </a>

        <Link
          href={canonicalUrl}
          className="w-full bg-monex-offWhite hover:bg-slate-200 text-slate-800 border border-monex-border py-1.5 px-3 rounded-sm text-xs font-semibold text-center block transition-colors"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

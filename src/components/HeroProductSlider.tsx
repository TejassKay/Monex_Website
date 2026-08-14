"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/catalogue";
import { getProductCanonicalUrl } from "@/lib/site-config";
import { ImageOff } from "lucide-react";

interface HeroProductSliderProps {
  products: Product[];
}

export default function HeroProductSlider({ products }: HeroProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [products.length]);

  if (!products || products.length === 0) return null;

  const currentProduct = products[currentIndex];
  const canonicalUrl = getProductCanonicalUrl(currentProduct.category, currentProduct.slug);
  const imageSrc = currentProduct.images.primary;

  return (
    <div className="bg-monex-offWhite border border-monex-border rounded-sm p-4 w-full max-w-md shadow-sm relative">
      <Link href={canonicalUrl} className="block group">
        <div className="bg-white border border-monex-border p-3 rounded-sm aspect-[4/3] flex items-center justify-center overflow-hidden relative">
          {imageSrc ? (
            <Image
              key={currentProduct.id}
              src={imageSrc}
              alt={currentProduct.name}
              width={340}
              height={255}
              className="object-contain max-h-full max-w-full transition-opacity duration-500 ease-in-out"
              priority
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center">
              <ImageOff className="w-8 h-8 mb-1 stroke-1 text-slate-400" />
              <span className="text-xs font-medium text-slate-500">Image Coming Soon</span>
            </div>
          )}

          {/* Subcategory / Division Pill */}
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-monex-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
              {currentProduct.category.replace(/-/g, " ")}
            </span>
          </div>
        </div>

        <div className="pt-3 text-center space-y-1">
          <span className="text-xs font-bold text-monex-black group-hover:text-monex-green transition-colors block uppercase tracking-wider line-clamp-1">
            {currentProduct.name}
          </span>
          <span className="text-[11px] text-slate-500 block truncate">
            {currentProduct.model ? `Model: ${currentProduct.model}` : "Supplying Retailers & Wholesalers"}
          </span>
        </div>
      </Link>

      {/* Progress Dots */}
      <div className="flex justify-center gap-1.5 pt-2">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-4 bg-monex-green" : "w-1.5 bg-slate-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

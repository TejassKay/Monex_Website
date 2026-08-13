"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/catalogue";
import { ImageOff, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const images = [
    ...(product.images.primary ? [product.images.primary] : []),
    ...product.images.gallery,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Display Stage with Manual Control Buttons */}
      <div className="relative aspect-[4/3] bg-monex-offWhite border border-monex-border rounded-sm p-6 flex items-center justify-center overflow-hidden group">
        {product.catalogueStatus && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
              {product.catalogueStatus}
            </span>
          </div>
        )}

        {product.series && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-white text-slate-800 border border-slate-300 text-xs font-semibold px-2.5 py-1 rounded-sm">
              {product.series}
            </span>
          </div>
        )}

        {images.length > 0 ? (
          <Image
            key={images[selectedIndex]}
            src={images[selectedIndex]}
            alt={`${product.name} - view ${selectedIndex + 1}`}
            width={500}
            height={375}
            className="object-contain max-h-full max-w-full transition-opacity duration-300"
            priority
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 p-8 text-center">
            <ImageOff className="w-12 h-12 mb-2 stroke-1 text-slate-400" />
            <span className="text-sm font-semibold text-slate-600">Product Image Coming Soon</span>
          </div>
        )}

        {/* Manual Prev / Next Slider Arrows on Product Detail Page */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-slate-300 text-slate-800 p-2 rounded-full shadow-sm transition-transform hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-slate-300 text-slate-800 p-2 rounded-full shadow-sm transition-transform hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Manual Thumbnail Navigation Bar */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`w-20 aspect-square bg-white border-2 rounded-sm p-1 transition-all ${
                idx === selectedIndex ? "border-monex-green shadow-sm" : "border-monex-border opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${product.name} thumbnail ${idx + 1}`}
                width={80}
                height={80}
                className="object-contain h-full w-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

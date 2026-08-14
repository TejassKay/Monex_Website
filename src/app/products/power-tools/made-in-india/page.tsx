import React from "react";
import ProductCard from "@/components/ProductCard";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Made in India Series Power Tools | Monex Official Catalogue",
  description: "Monex Made in India series power tools engineered locally including MB blowers, MHG heat guns, MSP drills, HSD polishers, and MC cutter machines.",
};

export default function MadeInIndiaPage() {
  const products = (catalogueData.products as Product[]).filter(
    (p) => p.category === "power-tools" && p.series === "Made in India"
  );

  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Category Header */}
        <div className="bg-white border border-monex-border p-6 rounded-sm space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-monex-green uppercase tracking-wider block">
              Domestic Manufacturing
            </span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border border-emerald-300">
              Made in India
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-monex-black uppercase tracking-tight">
            Made in India Series
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            High-performance power equipment proudly manufactured in India. Includes blowers, heat guns, impact drills, high speed polishers, CM4 cutters, and heavy 10mm/13mm drill machines.
          </p>
        </div>

        {/* Product Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-slate-600">
            Showing all {products.length} Made in India products
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

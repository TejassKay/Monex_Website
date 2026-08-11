import React from "react";
import ProductCard from "@/components/ProductCard";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Series Power Tools | Monex Official Catalogue",
  description: "Monex Pro Series heavy-duty power tools including 62L air compressors, CM5 Pro cutters, 26mm rotary hammers, and demolition breakers.",
};

export default function ProSeriesPage() {
  const products = (catalogueData.products as Product[]).filter(
    (p) => p.category === "power-tools" && p.series === "Pro Series"
  );

  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Category Header */}
        <div className="bg-white border border-monex-border p-6 rounded-sm space-y-2">
          <span className="text-xs font-mono font-bold text-monex-green uppercase tracking-wider block">
            Subcategory Line
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-monex-black uppercase tracking-tight">
            Pro Series Power Tools
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Monex Pro Series power tools represent our flagship line of heavy-duty air compressors, rotary hammers, breakers, and high-performance cutters.
          </p>
        </div>

        {/* Product Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-slate-600">
            Showing all {products.length} Pro Series products
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

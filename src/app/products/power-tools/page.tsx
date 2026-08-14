"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";

export default function PowerToolsOverviewPage() {
  const [selectedSeries, setSelectedSeries] = useState<string>("all");

  const products = (catalogueData.products as Product[]).filter(
    (p) => p.category === "power-tools"
  );

  const proSeriesProducts = products.filter((p) => p.series === "Pro Series");
  const madeInIndiaProducts = products.filter((p) => p.series === "Made in India");
  const classicSeriesProducts = products.filter((p) => p.series === "Classic Series");

  const filteredProducts = products.filter((p) => {
    if (selectedSeries === "all") return true;
    if (selectedSeries === "pro-series") return p.series === "Pro Series";
    if (selectedSeries === "made-in-india") return p.series === "Made in India";
    if (selectedSeries === "classic-series") return p.series === "Classic Series";
    return true;
  });

  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Category Header */}
        <div className="bg-white border border-monex-border p-6 rounded-sm space-y-4">
          <div>
            <span className="text-xs font-mono font-bold text-monex-green uppercase tracking-wider block">
              Power Equipment Division
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-monex-black uppercase tracking-tight">
              Monex Power Tools
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Tools that don't quit. High-durability power equipment engineered for continuous stone processing, tile cutting, drilling, and heavy demolition.
            </p>
          </div>

          {/* Persistent Series Filter Bar (All 4 buttons always visible) */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-monex-border text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setSelectedSeries("all")}
              className={`px-4 py-2 rounded-sm border transition-colors ${
                selectedSeries === "all"
                  ? "bg-monex-green text-white border-monex-green"
                  : "bg-white text-slate-700 border-monex-border hover:bg-monex-offWhite"
              }`}
            >
              All Power Tools ({products.length})
            </button>
            <button
              onClick={() => setSelectedSeries("pro-series")}
              className={`px-4 py-2 rounded-sm border transition-colors ${
                selectedSeries === "pro-series"
                  ? "bg-monex-green text-white border-monex-green"
                  : "bg-white text-slate-700 border-monex-border hover:bg-monex-offWhite"
              }`}
            >
              Pro Series ({proSeriesProducts.length})
            </button>
            <button
              onClick={() => setSelectedSeries("made-in-india")}
              className={`px-4 py-2 rounded-sm border transition-colors ${
                selectedSeries === "made-in-india"
                  ? "bg-monex-green text-white border-monex-green"
                  : "bg-white text-emerald-800 border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50"
              }`}
            >
              Made in India ({madeInIndiaProducts.length})
            </button>
            <button
              onClick={() => setSelectedSeries("classic-series")}
              className={`px-4 py-2 rounded-sm border transition-colors ${
                selectedSeries === "classic-series"
                  ? "bg-monex-green text-white border-monex-green"
                  : "bg-white text-slate-700 border-monex-border hover:bg-monex-offWhite"
              }`}
            >
              Monex Classic ({classicSeriesProducts.length})
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-slate-600">
            Showing {filteredProducts.length} power tool products
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

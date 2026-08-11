import React from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Tools Catalogue | Monex",
  description: "Browse Monex heavy-duty power tools including Pro Series air compressors, rotary hammers, marble cutters, angle grinders, and floor polishers.",
};

export default function PowerToolsOverviewPage() {
  const products = (catalogueData.products as Product[]).filter(
    (p) => p.category === "power-tools"
  );

  const proSeriesProducts = products.filter((p) => p.series === "Pro Series");
  const classicSeriesProducts = products.filter((p) => p.series === "Classic Series");

  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Category Header */}
        <div className="bg-white border border-monex-border p-6 rounded-sm space-y-3">
          <span className="text-xs font-mono font-bold text-monex-green uppercase tracking-wider block">
            Power Equipment Division
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-monex-black uppercase tracking-tight">
            Monex Power Tools
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Tools that don't quit. High-durability power equipment engineered for continuous stone processing, tile cutting, drilling, and heavy demolition.
          </p>

          {/* Series Tabs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/products/power-tools/pro-series"
              className="bg-monex-offWhite border border-monex-border hover:border-monex-green text-monex-black px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Pro Series ({proSeriesProducts.length} Products) →
            </Link>
            <Link
              href="/products/power-tools/classic-series"
              className="bg-monex-offWhite border border-monex-border hover:border-monex-green text-monex-black px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Classic Series ({classicSeriesProducts.length} Products) →
            </Link>
          </div>
        </div>

        {/* Pro Series Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-monex-border pb-2">
            <h2 className="text-lg font-bold text-monex-black uppercase tracking-wide">Pro Series Heavy Tools</h2>
            <Link
              href="/products/power-tools/pro-series"
              className="text-xs font-bold text-monex-green hover:underline uppercase tracking-wider"
            >
              View Pro Series Subcategory →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {proSeriesProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Classic Series Section */}
        <div className="space-y-4 pt-4">
          <div className="flex justify-between items-center border-b border-monex-border pb-2">
            <h2 className="text-lg font-bold text-monex-black uppercase tracking-wide">Classic Series Tools</h2>
            <Link
              href="/products/power-tools/classic-series"
              className="text-xs font-bold text-monex-green hover:underline uppercase tracking-wider"
            >
              View Classic Series Subcategory →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {classicSeriesProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

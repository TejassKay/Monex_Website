import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CARMAN Diamond Tools & Accessories | Monex",
  description: "Official CARMAN division catalogue featuring high-precision diamond saw blades, zero-chip cutters, grooving blades, and specialized stone accessories.",
};

export default function CarmanOverviewPage() {
  const products = (catalogueData.products as Product[]).filter(
    (p) => p.category === "carman" || p.category === "diamond-tools"
  );

  const sawBlades = products.filter((p) => p.subcategory === "DIAMOND SAW BLADES");
  const accessories = products.filter((p) => p.subcategory === "ACCESSORIES");

  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Category Header with Carman Branding */}
        <div className="bg-white border border-monex-border p-6 rounded-sm space-y-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-monex-green uppercase tracking-wider block">
                Official Division
              </span>
              <span className="bg-cyan-100 text-cyan-900 border border-cyan-300 text-[10px] font-extrabold px-2 py-0.5 rounded-sm uppercase">
                CARMAN
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-monex-black uppercase tracking-tight">
              CARMAN Diamond Tools & Accessories
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Industrial grade diamond saw blades, zero-chip cutters, electroplated grooving blades, and specialized stone cutting accessories.
            </p>
          </div>

          <div className="bg-monex-offWhite border border-monex-border p-3 rounded-sm shrink-0 flex items-center justify-center">
            <Image
              src="/brand/carman-logo.png"
              alt="Carman Logo"
              width={140}
              height={45}
              className="object-contain max-h-12"
            />
          </div>
        </div>

        {/* Subcategory Navigation Tabs */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/products/carman/diamond-saw-blades"
            className="bg-white border border-monex-border hover:border-monex-green text-monex-black px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            Diamond Saw Blades ({sawBlades.length} Products) →
          </Link>
          <Link
            href="/products/carman/accessories"
            className="bg-white border border-monex-border hover:border-monex-green text-monex-black px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            Accessories ({accessories.length} Products) →
          </Link>
        </div>

        {/* Diamond Saw Blades Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-monex-border pb-2">
            <h2 className="text-lg font-bold text-monex-black uppercase tracking-wide">
              Diamond Saw Blades ({sawBlades.length})
            </h2>
            <Link
              href="/products/carman/diamond-saw-blades"
              className="text-xs font-bold text-monex-green hover:underline uppercase tracking-wider"
            >
              View All Blades →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sawBlades.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Accessories Section */}
        <div className="space-y-4 pt-4">
          <div className="flex justify-between items-center border-b border-monex-border pb-2">
            <h2 className="text-lg font-bold text-monex-black uppercase tracking-wide">
              Accessories ({accessories.length})
            </h2>
            <Link
              href="/products/carman/accessories"
              className="text-xs font-bold text-monex-green hover:underline uppercase tracking-wider"
            >
              View All Accessories →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accessories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Tools & Carman Cutting Accessories | Monex",
  description: "Monex & Carman high-precision diamond saw blades, ultra-thin zero-chip cutters, wood blades, electroplated blades, and specialized grooving cutters.",
};

export default function DiamondToolsPage() {
  const products = (catalogueData.products as Product[]).filter(
    (p) => p.category === "diamond-tools"
  );

  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Category Header with Carman Branding */}
        <div className="bg-white border border-monex-border p-6 rounded-sm space-y-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-monex-green uppercase tracking-wider block">
                Cutting Accessories
              </span>
              <span className="bg-slate-100 text-slate-700 border border-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                Powered by Carman
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-monex-black uppercase tracking-tight">
              Diamond Tools & Cutting Accessories
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              High-precision diamond saw blades, ultra-thin zero-chip cutters, wood saw blades, and specialized V/C/U grooving cutters from Carman.
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

        {/* Product Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-slate-600">
            Showing all {products.length} Diamond Tools & Accessories
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

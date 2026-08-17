"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import { Search } from "lucide-react";

export default function ProductsHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products = catalogueData.products as Product[];

  const chemicalCount = products.filter((p) => p.category === "stone-care-chemicals").length;
  const powerToolCount = products.filter((p) => p.category === "power-tools").length;
  const carmanCount = products.filter((p) => p.category === "carman" || p.category === "diamond-tools").length;

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.model && p.model.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || 
      p.category === selectedCategory || 
      (selectedCategory === "carman" && (p.category === "carman" || p.category === "diamond-tools"));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white border border-monex-border p-6 rounded-sm space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-monex-black uppercase tracking-tight">
            Monex & Carman Product Catalogue
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm">
            Browse our complete inventory of {products.length} professional stone care chemical formulas, high-durability power tools, and CARMAN precision diamond cutting accessories.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-sm border border-monex-border">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search model or product e.g. MX-62L..."
              className="w-full bg-monex-offWhite border border-monex-border rounded-sm pl-9 pr-3 py-2 text-xs text-monex-black placeholder-slate-500 focus:outline-none focus:border-monex-green"
            />
          </div>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto text-xs font-semibold">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-2 rounded-sm border transition-colors ${
                selectedCategory === "all"
                  ? "bg-monex-green text-white border-monex-green"
                  : "bg-white text-slate-700 border-monex-border hover:bg-monex-offWhite"
              }`}
            >
              All ({products.length})
            </button>
            <button
              onClick={() => setSelectedCategory("stone-care-chemicals")}
              className={`px-3 py-2 rounded-sm border transition-colors ${
                selectedCategory === "stone-care-chemicals"
                  ? "bg-monex-green text-white border-monex-green"
                  : "bg-white text-slate-700 border-monex-border hover:bg-monex-offWhite"
              }`}
            >
              Stone Chemicals ({chemicalCount})
            </button>
            <button
              onClick={() => setSelectedCategory("power-tools")}
              className={`px-3 py-2 rounded-sm border transition-colors ${
                selectedCategory === "power-tools"
                  ? "bg-monex-green text-white border-monex-green"
                  : "bg-white text-slate-700 border-monex-border hover:bg-monex-offWhite"
              }`}
            >
              Power Tools ({powerToolCount})
            </button>
            <button
              onClick={() => setSelectedCategory("carman")}
              className={`px-3 py-2 rounded-sm border transition-colors ${
                selectedCategory === "carman"
                  ? "bg-monex-green text-white border-monex-green"
                  : "bg-white text-cyan-900 border-cyan-300 bg-cyan-50 hover:bg-cyan-100 font-bold"
              }`}
            >
              CARMAN ({carmanCount})
            </button>
          </div>
        </div>

        {/* Results Counter & Product Grid */}
        <div className="space-y-4">
          <div className="text-xs text-slate-600 font-mono">
            Showing {filteredProducts.length} items
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-monex-border rounded-sm p-12 text-center space-y-3">
              <p className="text-slate-600 text-sm">No products found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-xs text-monex-green hover:underline font-bold"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

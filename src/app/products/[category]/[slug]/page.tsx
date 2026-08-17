import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import ProductGallery from "@/components/ProductGallery";
import ProductEnquiryBox from "@/components/ProductEnquiryBox";
import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = catalogueData.products as Product[];
  return products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = (catalogueData.products as Product[]).find(
    (p) => (p.category === category || (category === "carman" && p.category === "diamond-tools")) && p.slug === slug
  );

  if (!product) {
    return { title: "Product Not Found | Monex" };
  }

  const modelLabel = product.model ? `${product.model} - ` : "";
  return {
    title: `${modelLabel}${product.name} | Monex & Carman Catalogue`,
    description: product.description || `Technical specifications and price enquiry for ${product.name}.`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const products = catalogueData.products as Product[];
  const product = products.find(
    (p) => (p.category === category || (category === "carman" && p.category === "diamond-tools")) && p.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white text-monex-black min-h-screen py-8 lg:py-12 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-monex-green transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-monex-green transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/products/${product.category}`} className="hover:text-monex-green transition-colors uppercase font-semibold">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">{product.name}</span>
        </nav>

        {/* Clean Unboxed Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          {/* Left Column: Product Gallery with Manual Controls */}
          <div className="lg:col-span-6">
            <ProductGallery product={product} />
          </div>

          {/* Right Column: Product Metadata, Specs & Enquiries */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold text-monex-green uppercase tracking-wider block">
                {product.subcategory || product.category.replace(/-/g, " ")}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-monex-black">
                {product.name}
              </h1>
              {product.model && product.model !== product.name && (
                <span className="text-xs font-mono text-slate-600 block">
                  Official Model / Code: {product.model}
                </span>
              )}
            </div>

            {product.tagline && (
              <p className="text-slate-700 text-sm font-medium border-l-2 border-monex-green pl-3 py-0.5">
                {product.tagline}
              </p>
            )}

            {product.description && (
              <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-1.5 pt-2 border-t border-monex-border">
                <h3 className="text-xs font-bold text-monex-black uppercase tracking-wider">Product Description</h3>
                <p>{product.description}</p>
              </div>
            )}

            {/* Available Packaging Sizes if packSizes present */}
            {product.packSizes && product.packSizes.length > 0 && (
              <div className="pt-2 border-t border-monex-border space-y-2">
                <h3 className="text-xs font-bold text-monex-black uppercase tracking-wider">Available Packaging Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.packSizes.map((size, idx) => (
                    <span key={idx} className="bg-monex-offWhite border border-monex-border text-slate-800 text-xs px-3 py-1 rounded-sm font-medium">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications Table */}
            {product.specifications.length > 0 && (
              <div className="pt-2 border-t border-monex-border space-y-2">
                <h3 className="text-xs font-bold text-monex-black uppercase tracking-wider">Technical Specifications</h3>
                <div className="border border-monex-border rounded-sm overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <tbody>
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-monex-offWhite" : "bg-white"}>
                          <td className="py-2.5 px-3.5 text-slate-600 font-semibold border-b border-monex-border w-1/3">{spec.key}</td>
                          <td className="py-2.5 px-3.5 text-monex-black border-b border-monex-border">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Interactive Price Enquiry Action Box */}
            <ProductEnquiryBox product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

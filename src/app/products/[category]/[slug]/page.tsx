import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import { getWhatsAppEnquiryUrl, getEmailEnquiryUrl } from "@/lib/site-config";
import { MessageSquare, Mail, CheckCircle2 } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
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
    (p) => p.category === category && p.slug === slug
  );

  if (!product) {
    return { title: "Product Not Found | Monex" };
  }

  const modelLabel = product.model ? `${product.model} - ` : "";
  return {
    title: `${modelLabel}${product.name} | Monex Official Catalogue`,
    description: product.description || `Technical specifications and price enquiry for Monex ${product.name}.`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const products = catalogueData.products as Product[];
  const product = products.find((p) => p.category === category && p.slug === slug);

  if (!product) {
    notFound();
  }

  const whatsappUrl = getWhatsAppEnquiryUrl(product.name, product.model);
  const emailUrl = getEmailEnquiryUrl(product.name, product.model);

  return (
    <div className="bg-white text-monex-black min-h-screen py-8 lg:py-12 px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-monex-green transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-monex-green transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/products/${product.category}`} className="hover:text-monex-green transition-colors capitalize">
            {product.category.replace(/-/g, " ")}
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
                  Official Model Number: {product.model}
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

            {/* Available Packaging Sizes */}
            {product.packSizes.length > 0 && (
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

            {/* Price Enquiry Action Box */}
            <div className="bg-monex-offWhite border border-monex-border rounded-sm p-5 space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-monex-green shrink-0" />
                <span>Commercial B2B pricing available for Retailers, Wholesalers & Distributors</span>
              </div>

              {/* Primary WhatsApp Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-monex-green hover:bg-monex-darkGreen text-white py-3.5 px-4 rounded-sm font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enquire About Price (WhatsApp)</span>
              </a>

              {/* Secondary Email Option */}
              <a
                href={emailUrl}
                className="w-full bg-white hover:bg-slate-100 text-slate-800 border border-monex-border py-2.5 px-4 rounded-sm font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Send Email Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import HeroProductSlider from "@/components/HeroProductSlider";
import catalogueData from "@/data/product-catalogue.json";
import { Product } from "@/types/catalogue";
import { getWhatsAppEnquiryUrl } from "@/lib/site-config";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";

export default function HomePage() {
  const products = catalogueData.products as Product[];

  // Select 9 products (3 Stone Care Chemicals, 3 Power Tools, 3 Diamond Tools) for Hero Showcase Slider
  const chemicalHero = products.filter((p) => p.category === "stone-care-chemicals" && p.images.primary).slice(0, 3);
  const toolHero = products.filter((p) => p.category === "power-tools" && p.images.primary).slice(0, 3);
  const diamondHero = products.filter((p) => p.category === "diamond-tools" && p.images.primary).slice(0, 3);
  const heroProducts = [...chemicalHero, ...toolHero, ...diamondHero];

  // Curated 6 representative real products for Featured Products grid
  const featuredIds = [
    "m555-shiner",
    "mx-62l",
    "hipo-glue",
    "l-special-polygel",
    "mx-cm5-pro",
    "blade-9t-pro"
  ];
  
  const featuredProducts = products.filter((p) => featuredIds.includes(p.id));

  return (
    <div className="bg-monex-offWhite text-monex-black min-h-screen space-y-12 sm:space-y-16 pb-16">
      {/* Industrial Hero Section - White / Off-White Background */}
      <section className="bg-white border-b border-monex-border py-10 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column with Enlarged 35% Opacity Background Watermark Logo */}
          <div className="lg:col-span-7 space-y-5 relative">
            
            {/* Background Watermark Logo (35% Opacity, enlarged behind main heading) */}
            <div className="absolute -top-12 -left-12 w-[130%] h-[160%] opacity-35 pointer-events-none -z-10 flex items-center justify-start select-none">
              <Image
                src="/brand/monex-logo.png"
                alt=""
                width={800}
                height={260}
                className="object-contain max-w-none w-full h-full"
                priority
              />
            </div>

            <div className="inline-block bg-monex-offWhite border border-monex-border text-monex-green text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
              Official Monex Company Website
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-monex-black uppercase tracking-tight leading-tight">
              A Stone Care Expert & <br />
              <span className="text-monex-green">Tools That Don't Quit</span>
            </h1>

            <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
              Monex is a trusted importer and manufacturer of premium stone care chemicals, high-durability power tools, and precision diamond cutting accessories for marble, granite, tiles, and natural stones.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="bg-monex-green hover:bg-monex-darkGreen text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppEnquiryUrl("Monex Homepage Enquiry")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-monex-black hover:bg-slate-800 text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: 9-Product Sliding Hero Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroProductSlider products={heroProducts} />
          </div>
        </div>
      </section>

      {/* Product Divisions Section - Real Product Photography & Brand Logos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-monex-border pb-3">
          <h2 className="text-2xl font-bold text-monex-black uppercase tracking-wide">Product Divisions</h2>
          <p className="text-slate-600 text-xs">Explore structured technical solutions for stone care and power machinery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Division 1: Stone Care Chemicals (CHEMICALS_BUNDLE image) */}
          <div className="bg-white border border-monex-border rounded-sm p-5 space-y-4 flex flex-col justify-between hover:border-monex-green transition-colors">
            <div className="space-y-3">
              <div className="bg-monex-offWhite border border-monex-border aspect-[4/3] rounded-sm p-3 flex items-center justify-center overflow-hidden">
                <Image
                  src="/products/chemicals/CHEMICALS_BUNDLE.png"
                  alt="Monex Stone Care Chemicals Bundle"
                  width={240}
                  height={180}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h3 className="text-lg font-bold text-monex-black uppercase">Stone Care Chemicals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Marble enhancers, mastic joint fillers, 2-part epoxy paste, nano densifiers, and solvent-based water-repellent sealers.
              </p>
            </div>
            <Link
              href="/products/stone-care-chemicals"
              className="text-xs font-bold text-monex-green hover:underline flex items-center gap-1 uppercase tracking-wider pt-2"
            >
              <span>Explore 11 Products →</span>
            </Link>
          </div>

          {/* Division 2: Power Tools (POWER_TOOLS_HOME image) */}
          <div className="bg-white border border-monex-border rounded-sm p-5 space-y-4 flex flex-col justify-between hover:border-monex-green transition-colors">
            <div className="space-y-3">
              <div className="bg-monex-offWhite border border-monex-border aspect-[4/3] rounded-sm p-3 flex items-center justify-center overflow-hidden">
                <Image
                  src="/products/POWER_TOOLS_HOME.png"
                  alt="Monex Power Tools Line"
                  width={240}
                  height={180}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h3 className="text-lg font-bold text-monex-black uppercase">Power Tools</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pro Series air compressors, rotary hammers, marble cutters, angle grinders, heat guns, blowers, and floor polishers.
              </p>
            </div>
            <Link
              href="/products/power-tools"
              className="text-xs font-bold text-monex-green hover:underline flex items-center gap-1 uppercase tracking-wider pt-2"
            >
              <span>Explore 35 Power Tools →</span>
            </Link>
          </div>

          {/* Division 3: Diamond Tools (New clean Carman Logo) */}
          <div className="bg-white border border-monex-border rounded-sm p-5 space-y-4 flex flex-col justify-between hover:border-monex-green transition-colors">
            <div className="space-y-3">
              <div className="bg-monex-offWhite border border-monex-border aspect-[4/3] rounded-sm p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/brand/carman-logo.png"
                  alt="Carman Diamond Tools & Accessories"
                  width={240}
                  height={180}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h3 className="text-lg font-bold text-monex-black uppercase">Diamond Tools</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero-chip diamond blades, ultra-thin turbo cutters, wood saw blades, and specialized V/C/U grooving cutters.
              </p>
            </div>
            <Link
              href="/products/diamond-tools"
              className="text-xs font-bold text-monex-green hover:underline flex items-center gap-1 uppercase tracking-wider pt-2"
            >
              <span>Explore 25 Cutting Accessories →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Real Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex justify-between items-end border-b border-monex-border pb-3">
          <div>
            <h2 className="text-2xl font-bold text-monex-black uppercase tracking-wide">Featured Products</h2>
            <p className="text-slate-600 text-xs">Selected representative items from our complete catalogue.</p>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold text-monex-green hover:underline flex items-center gap-1 uppercase tracking-wider"
          >
            <span>View All 71 Products →</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* B2B Commercial Enquiry Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-monex-border rounded-sm p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <h2 className="text-xl font-bold text-monex-black uppercase tracking-wide">Commercial B2B & Wholesale Enquiries</h2>
            <p className="text-slate-600 text-xs max-w-xl">
              We supply retail dealers, regional wholesalers, and commercial stone restoration contractors. Contact our sales desk on WhatsApp for tier-specific pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={getWhatsAppEnquiryUrl("Bulk Commercial Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-monex-green hover:bg-monex-darkGreen text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Sales Desk</span>
            </a>
            <Link
              href="/contact"
              className="bg-monex-black hover:bg-slate-800 text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Contact Page</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

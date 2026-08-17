import { Product, Category, SiteConfig } from "@/types/catalogue";
import catalogueData from "@/data/product-catalogue.json";

export const siteConfig: SiteConfig = catalogueData.siteConfig as SiteConfig;
export const categories: Category[] = catalogueData.categories as Category[];
export const products: Product[] = catalogueData.products as Product[];

/**
 * Generates a standard wa.me WhatsApp URL for a given product enquiry with optional variant details.
 */
export function getWhatsAppEnquiryUrl(
  productName: string, 
  modelNumber?: string | null, 
  variantDetails?: string | null
): string {
  const phone = siteConfig.whatsapp.phoneNumber;
  let label = modelNumber && modelNumber.trim() !== "" && modelNumber !== productName 
    ? `${modelNumber} — ${productName}` 
    : productName;
  
  if (variantDetails && variantDetails.trim() !== "") {
    label += ` [Selected Options: ${variantDetails}]`;
  }
  
  const text = siteConfig.whatsapp.defaultMessageTemplate.replace("{productName}", label);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a mailto URL for general or product-specific email enquiries with optional variant details.
 */
export function getEmailEnquiryUrl(
  productName?: string, 
  modelNumber?: string | null, 
  variantDetails?: string | null
): string {
  const email = siteConfig.email.address;
  if (!productName) {
    return `mailto:${email}?subject=${encodeURIComponent(siteConfig.email.defaultSubject)}`;
  }
  
  let label = modelNumber && modelNumber.trim() !== "" && modelNumber !== productName 
    ? `${modelNumber} — ${productName}` 
    : productName;
    
  if (variantDetails && variantDetails.trim() !== "") {
    label += ` [Selected Options: ${variantDetails}]`;
  }
    
  const subject = `Price Enquiry - ${label}`;
  const body = `Hello,\n\nI would like to know the price and product details for ${label}.\n\nRegards,`;
  
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Helper to get canonical public product URL: /products/[category]/[slug]
 */
export function getProductCanonicalUrl(category: string, slug: string): string {
  return `/products/${category}/${slug}`;
}

export type ImageStatus = "supplied_photo" | "catalogue_reference" | "missing";

export interface ProductImage {
  primary: string | null;
  gallery: string[];
  status: ImageStatus;
}

export interface SpecificationItem {
  key: string;
  value: string;
}

export type ProductCatalogueStatus = "Coming Soon" | "Arriving Soon" | "Price on Order" | "Order Now" | null;

export interface Product {
  id: string;
  slug: string;
  name: string;
  model: string | null;
  category: "stone-care-chemicals" | "power-tools" | "diamond-tools";
  subcategory: string | null;
  series: "Pro Series" | "Made in India" | "Classic Series" | "Monex Chemical" | "Diamond Accessories" | null;
  tagline: string | null;
  description: string | null;
  packSizes: string[];
  specifications: SpecificationItem[];
  catalogueStatus: ProductCatalogueStatus;
  images: ProductImage;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  subcategories: string[];
}

export interface SiteConfig {
  companyName: string;
  taglines: string[];
  whatsapp: {
    phoneNumber: string;
    defaultMessageTemplate: string;
  };
  email: {
    address: string;
    defaultSubject: string;
  };
  phone: string;
  social: {
    linkedin: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
  location: {
    address: string;
    googleMapsUrl: string;
  };
}

export interface ProductCatalogueData {
  version: string;
  siteConfig: SiteConfig;
  categories: Category[];
  products: Product[];
}

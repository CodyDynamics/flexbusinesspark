export interface IndustrialProject {
  id: string;
  name: string;
  location: string;
  sizeSqFt: number;
  type: string;
  image: string;
  description: string;
  features: string[];
  span?: "default" | "wide";
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface WarehouseType {
  id: string;
  name: string;
  description: string;
  typicalUse: string;
  typicalSize: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  person: string;
  role: string;
  company: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Market {
  id: string;
  name: string;
  region: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

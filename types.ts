import type { ReactNode } from 'react';

export interface NavLink {
  name: string;
  href: string;
  children?: NavLink[];
}

export interface PricingPlan {
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  features: string[];
  isBulk?: boolean;
}

export interface BulkPlan {
  title: string;
  placements: number;
  pricePerPlacement: number;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
  isCeo?: boolean;
}

export interface PremiumSite {
  id: number;
  domain: string;
  image: string;
  price: number;
  originalPrice?: number;
  isSale?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  message?: string;
  isCeo?: boolean;
}
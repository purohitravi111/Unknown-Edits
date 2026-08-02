import { LucideIcon } from 'lucide-react';

export interface AgencyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  businessHours: string;
  foundedYear: number;
  logo: string;
  primaryCTA: CTA;
  secondaryCTA: CTA;
}

export interface CTA {
  label: string;
  url: string;
  primary?: boolean;
}

export interface NavigationItem {
  label: string;
  url: string;
}

export interface HeroSection {
  badge: string;
  headline: string;
  highlightedWords: string;
  description: string;
  buttons: CTA[];
  video: string;
  thumbnail: string;
  backgroundImage: string;
  stats: Stat[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  video: string;
  cta: CTA;
  displayOrder: number;
  featured: boolean;
}

export interface PortfolioProject {
  projectName: string;
  category: string;
  industry: string;
  description: string;
  thumbnail: string;
  previewVideo: string;
  fullVideo: string;
  projectUrl: string;
  clientName: string;
  softwareUsed: string[];
  duration: string;
  tags: string[];
  featured: boolean;
  platform: string;
  caseStudy: boolean;
  format: string;
  displayOrder: number;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    behance?: string;
    instagram?: string;
    youtube?: string;
  };
  skills: string[];
}

export interface Testimonial {
  clientName: string;
  company: string;
  photo: string;
  rating: number;
  review: string;
  videoTestimonial: string;
}

export interface ClientLogo {
  logo: string;
  website: string;
  featured: boolean;
  name: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  bulletPoints: string[];
  icon: LucideIcon;
}

export interface PricingPackage {
  packageName: string;
  price: string;
  features: string[];
  cta: CTA;
  featured: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  googleMapsUrl: string;
  businessHours: string;
}

export interface SocialMedia {
  instagram: string;
  youtube: string;
  linkedin: string;
  twitter: string;
  tiktok: string;
  behance: string;
  dribbble: string;
  facebook: string;
  threads: string;
}

export interface FooterGroup {
  title: string;
  items: NavigationItem[];
}

export interface FooterInfo {
  links: FooterGroup[];
  copyright: string;
  newsletter: {
    heading: string;
    description: string;
  };
}

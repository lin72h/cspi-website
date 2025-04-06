export interface ServiceBenefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcessStep {
  id: number;
  title: string;
  description: string;
  image?: string;
  imageDark?: string;
}

export interface ServiceFAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ServicePageData {
  // Basic info
  id: string;
  title: string;
  subtitle: string;
  
  // Hero section
  heroDescription: string;
  heroImage: string;
  heroImageDark: string;
  
  // Benefits section
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: ServiceBenefit[];
  
  // Process section
  processTitle: string;
  processDescription: string;
  processSteps: ServiceProcessStep[];
  
  // FAQ section
  faqTitle: string;
  faqDescription: string;
  faqs: ServiceFAQ[];
  
  // CTA section
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonUrl: string;
} 
export interface ServiceBenefit {
  id: number;
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
  icon: string;
}

export interface ServiceProcessStep {
  id: number;
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
  image?: string;
  imageDark?: string;
}

export interface ServiceFAQ {
  id: number;
  question: string;
  questionZh?: string;
  answer: string;
  answerZh?: string;
}

export interface ServicePageData {
  // Basic info
  id: string;
  title: string;
  titleZh?: string;
  subtitle: string;
  subtitleZh?: string;
  
  // Hero section
  heroDescription: string;
  heroDescriptionZh?: string;
  heroImage: string;
  heroImageDark: string;
  
  // Benefits section
  benefitsTitle: string;
  benefitsTitleZh?: string;
  benefitsDescription: string;
  benefitsDescriptionZh?: string;
  benefits: ServiceBenefit[];
  
  // Process section
  processTitle: string;
  processTitleZh?: string;
  processDescription: string;
  processDescriptionZh?: string;
  processSteps: ServiceProcessStep[];
  
  // FAQ section
  faqTitle: string;
  faqTitleZh?: string;
  faqDescription: string;
  faqDescriptionZh?: string;
  faqs: ServiceFAQ[];
  
  // CTA section
  ctaTitle: string;
  ctaTitleZh?: string;
  ctaDescription: string;
  ctaDescriptionZh?: string;
  ctaButtonText: string;
  ctaButtonTextZh?: string;
  ctaButtonUrl: string;
} 
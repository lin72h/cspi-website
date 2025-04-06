import { ServicePageData } from "@/types/servicePageData";

const taxAndComplianceData: ServicePageData = {
  // Basic info
  id: "tax-and-compliance",
  title: "Tax and Compliance",
  subtitle: "Navigating New Zealand Tax Regulations",
  
  // Hero section
  heroDescription: "New Zealand tax law can be daunting for business owners. Our dedicated tax and compliance services ensure you meet all regulatory requirements while minimizing your tax burden. We handle GST, Fringe Benefit Tax, Payroll, Income Tax, and more so you can focus on running your business.",
  heroImage: "/images/about/about-light-02.svg",
  heroImageDark: "/images/about/about-dark-02.svg",
  
  // Benefits section
  benefitsTitle: "How Our Tax and Compliance Services Help You",
  benefitsDescription: "We offer comprehensive tax and compliance services to ensure your business meets all regulatory requirements while maximizing legitimate tax advantages.",
  benefits: [
    {
      id: 1,
      title: "Tax Return Preparation",
      description: "Accurate and timely preparation of all required tax returns including income tax, GST, and FBT, ensuring full compliance with IRD requirements.",
      icon: "/images/icon/icon-01.svg"
    },
    {
      id: 2,
      title: "GST Management",
      description: "Complete Goods and Services Tax management including registration, filing returns, handling special transactions, and ensuring accurate reporting.",
      icon: "/images/icon/icon-02.svg"
    },
    {
      id: 3,
      title: "Fringe Benefit Tax Compliance",
      description: "Management of Fringe Benefit Tax obligations related to employee benefits, with strategies to minimize FBT exposure while maintaining employee satisfaction.",
      icon: "/images/icon/icon-03.svg"
    },
    {
      id: 4,
      title: "Payroll Administration",
      description: "Comprehensive payroll services including PAYE, KiwiSaver, ACC levies, and leave management, ensuring compliance with employment tax regulations.",
      icon: "/images/icon/icon-04.svg"
    },
    {
      id: 5,
      title: "Tax Planning Strategies",
      description: "Proactive tax planning to legally minimize your tax obligations through structure optimization, timing strategies, and available incentives.",
      icon: "/images/icon/icon-05.svg"
    },
    {
      id: 6,
      title: "IRD Audit Support",
      description: "Expert representation and support during IRD audits or inquiries, managing the process to minimize stress and potential liability.",
      icon: "/images/icon/icon-06.svg"
    }
  ],
  
  // Process section
  processTitle: "Our Tax and Compliance Process",
  processDescription: "We follow a methodical approach to manage your tax and compliance needs, ensuring accuracy, timeliness, and tax efficiency.",
  processSteps: [
    {
      id: 1,
      title: "Assessment and Planning",
      description: "We begin with a comprehensive assessment of your tax situation and compliance needs. This includes reviewing your business structure, activities, and existing tax strategies to identify areas for improvement and potential risks.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 2,
      title: "Compliance Calendar Development",
      description: "We create a customized compliance calendar outlining all your tax filing deadlines and requirements. This ensures nothing falls through the cracks and helps you plan for tax payments throughout the year.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 3,
      title: "Regular Tax Filings and Payments",
      description: "Our team handles the preparation and submission of all required tax returns including income tax, GST, PAYE, and FBT. We ensure accurate calculations, timely submissions, and proper documentation to support all filings.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 4,
      title: "Strategic Reviews and Adjustments",
      description: "We conduct regular reviews of your tax position to identify opportunities for legitimate tax minimization. This includes assessing changing tax laws, business circumstances, and planning for major transactions with tax implications.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    }
  ],
  
  // FAQ section
  faqTitle: "Common Questions About Tax and Compliance",
  faqDescription: "Get answers to frequently asked questions about our tax and compliance services.",
  faqs: [
    {
      id: 1,
      question: "How often should my business review its tax strategy?",
      answer: "We recommend quarterly tax strategy reviews for most businesses, with additional reviews when significant changes occur in your business or in tax legislation. Regular reviews allow us to make timely adjustments to your tax planning, identify emerging opportunities for tax savings, and ensure ongoing compliance as your business evolves."
    },
    {
      id: 2,
      question: "What are the common GST pitfalls for New Zealand businesses?",
      answer: "Common GST issues include incorrect treatment of mixed-use assets, errors in claiming GST on entertainment expenses, mishandling of international transactions, timing issues with GST claims, and inadequate record-keeping. Our comprehensive GST management services help you navigate these complexities and avoid costly mistakes."
    },
    {
      id: 3,
      question: "How do I know if I'm paying too much tax?",
      answer: "Signs you may be paying too much tax include: consistently large tax bills without corresponding business growth, not utilizing available deductions and credits, operating under a sub-optimal business structure for your circumstances, or lacking a proactive tax planning strategy. Our assessment can identify specific areas where you may be able to legally reduce your tax burden."
    },
    {
      id: 4,
      question: "What happens if I make a mistake on my tax returns?",
      answer: "If you discover errors in previously filed returns, it's important to address them promptly. We can help you with voluntary disclosures to the IRD, which may reduce potential penalties. Our approach focuses on resolving issues efficiently while maintaining a positive relationship with tax authorities. The key is addressing errors proactively rather than waiting for an IRD audit."
    },
    {
      id: 5,
      question: "How do you stay current with changing tax regulations?",
      answer: "Our team maintains up-to-date knowledge through ongoing professional development, subscriptions to tax authority updates, membership in professional accounting bodies, and regular tax law seminars. We continuously monitor legislative changes, IRD interpretations, and case law to ensure our advice reflects the current tax environment in New Zealand."
    }
  ],
  
  // CTA section
  ctaTitle: "Need Help with Tax Compliance?",
  ctaDescription: "Contact us today to discuss how we can help your business navigate New Zealand's tax regulations, ensure compliance, and minimize your tax burden legally.",
  ctaButtonText: "Get Tax Assistance",
  ctaButtonUrl: "/support"
};

export default taxAndComplianceData; 
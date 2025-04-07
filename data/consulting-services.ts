import { ServicePageData } from "@/types/servicePageData";

const consultingServicesData: ServicePageData = {
  // Basic info
  id: "consulting-services",
  title: "Consulting Services",
  subtitle: "Strategic Business Guidance",
  
  // Hero section
  heroDescription: "We provide business advice and accountancy services for the self-employed, partnerships, estates, trusts and private companies including bookkeeping, annual and periodic financial statements - profit and loss accounts, balance sheets and operating projections - preparation of wages, PAYE, FBT, GST returns and business plans.",
  heroImage: "/images/about/about-light-01.png",
  heroImageDark: "/images/about/about-dark-01.png",
  
  // Benefits section
  benefitsTitle: "How Our Consulting Services Benefit You",
  benefitsDescription: "Our comprehensive consulting services are designed to optimize your business operations, improve financial performance, and position you for sustainable growth.",
  benefits: [
    {
      id: 1,
      title: "Business Structure Optimization",
      description: "We help you determine the most efficient business structure (sole trader, partnership, company, or trust) that minimizes tax obligations and protects your assets.",
      icon: "/images/icon/icon-01.svg"
    },
    {
      id: 2,
      title: "Strategic Growth Planning",
      description: "Develop comprehensive roadmaps for sustainable growth with actionable strategies tailored to your industry and business goals.",
      icon: "/images/icon/icon-02.svg"
    },
    {
      id: 3,
      title: "Financial Systems Review",
      description: "Thorough assessment of your current financial systems and processes with recommendations for improving efficiency and accuracy.",
      icon: "/images/icon/icon-03.svg"
    },
    {
      id: 4,
      title: "Business Performance Analysis",
      description: "In-depth analysis of your business's financial performance with insights on areas for improvement and optimization.",
      icon: "/images/icon/icon-04.svg"
    },
    {
      id: 5,
      title: "Risk Management Strategies",
      description: "Identification of potential financial and operational risks with proactive strategies to mitigate and manage them effectively.",
      icon: "/images/icon/icon-05.svg"
    },
    {
      id: 6,
      title: "Succession Planning",
      description: "Develop comprehensive succession plans for business continuity, ensuring smooth transitions and preserving business value.",
      icon: "/images/icon/icon-06.svg"
    }
  ],
  
  // Process section
  processTitle: "Our Consulting Approach",
  processDescription: "We follow a systematic, client-centered approach to deliver consulting services that address your unique business challenges and opportunities.",
  processSteps: [
    {
      id: 1,
      title: "Initial Business Assessment",
      description: "We begin with a thorough assessment of your current business structure, operations, financial systems, and growth objectives. This helps us understand your unique challenges and identify key opportunities for improvement.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 2,
      title: "Strategic Recommendations",
      description: "Based on our assessment, we develop tailored recommendations for optimizing your business structure, improving operational efficiency, and enhancing financial performance. These recommendations are practical and aligned with your specific business goals.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 3,
      title: "Implementation Support",
      description: "We provide hands-on assistance with implementing our recommendations, ensuring a smooth transition and minimal disruption to your business operations. Our team works closely with yours throughout the process.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 4,
      title: "Ongoing Performance Monitoring",
      description: "We continue to monitor your business performance after implementation, providing regular reviews and adjustments as needed to ensure optimal results and sustained improvement over time.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    }
  ],
  
  // FAQ section
  faqTitle: "Common Questions About Our Consulting Services",
  faqDescription: "Get answers to frequently asked questions about our consulting services and how they can benefit your business.",
  faqs: [
    {
      id: 1,
      question: "How do I know if my current business structure is optimal?",
      answer: "Many businesses operate under structures that were established at startup without considering long-term implications. Signs that your structure may not be optimal include paying more tax than necessary, inadequate asset protection, limited flexibility for growth, or complications with bringing in new owners/investors. Our assessment can identify if your current structure is serving your business well or if restructuring would be beneficial."
    },
    {
      id: 2,
      question: "How long does the consulting process typically take?",
      answer: "The timeline varies depending on the complexity of your business and the scope of services needed. Initial assessments typically take 2-3 weeks, while full implementation of recommendations may span several months. We work closely with you to establish realistic timelines and milestone-based approaches to ensure minimal disruption to your operations."
    },
    {
      id: 3,
      question: "Can you help with specific industry challenges?",
      answer: "Absolutely. Our team has experience across diverse industries including retail, professional services, property development, hospitality, and technology. We understand the unique regulatory, financial, and operational challenges of different sectors and tailor our consulting approach accordingly."
    },
    {
      id: 4,
      question: "What ROI can I expect from your consulting services?",
      answer: "While specific returns vary by business, our clients typically see benefits in several areas: tax savings through optimized structures, improved cash flow from streamlined operations, reduced compliance risks, and enhanced decision-making through better financial insights. We establish clear metrics at the beginning of our engagement to track and measure the impact of our services."
    },
    {
      id: 5,
      question: "How do you differentiate from other business consultants?",
      answer: "As chartered accountants with deep financial expertise, we bring a unique perspective that integrates tax optimization, financial management, and business strategy. Our recommendations consider both operational improvement and financial impact, ensuring a holistic approach that many general business consultants cannot provide."
    }
  ],
  
  // CTA section
  ctaTitle: "Ready to Optimize Your Business Structure?",
  ctaDescription: "Book a free initial consultation to discuss how our consulting services can help you organize your operations more effectively and set your business up for long-term success.",
  ctaButtonText: "Schedule a Consultation",
  ctaButtonUrl: "/support"
};

export default consultingServicesData; 
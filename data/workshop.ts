import { ServicePageData } from "@/types/servicePageData";

const workshopData: ServicePageData = {
  // Basic info
  id: "workshop",
  title: "Financial Workshops",
  subtitle: "Professional Financial Training",
  
  // Hero section
  heroDescription: "We offer specialized financial training courses designed for business owners, managers, and their teams. Our workshops cover essential financial knowledge and professional skills that empower you to make better business decisions and improve your financial outcomes.",
  heroImage: "/images/features/features-light-01.png",
  heroImageDark: "/images/features/features-dark-01.svg",
  
  // Benefits section
  benefitsTitle: "How Our Workshops Benefit Your Business",
  benefitsDescription: "Our professional financial training workshops provide practical knowledge and skills that translate directly to improved business performance and financial outcomes.",
  benefits: [
    {
      id: 1,
      title: "Financial Literacy Development",
      description: "Build essential financial knowledge among your team members, enabling better decision-making and more effective communication about financial matters.",
      icon: "/images/icon/icon-01.svg"
    },
    {
      id: 2,
      title: "Customized Training Solutions",
      description: "Workshops tailored to your industry, business size, and specific financial challenges, ensuring relevant and immediately applicable learning.",
      icon: "/images/icon/icon-02.svg"
    },
    {
      id: 3,
      title: "Practical Skills Application",
      description: "Hands-on exercises and real-world case studies that develop practical financial skills your team can apply immediately to your business.",
      icon: "/images/icon/icon-03.svg"
    },
    {
      id: 4,
      title: "Performance Improvement",
      description: "Training focused on improving specific business outcomes, from cash flow management to profitability enhancement and financial decision-making.",
      icon: "/images/icon/icon-04.svg"
    },
    {
      id: 5,
      title: "Team Capability Building",
      description: "Develop your team's financial capabilities, reducing dependence on external advisors for day-to-day financial management and analysis.",
      icon: "/images/icon/icon-05.svg"
    },
    {
      id: 6,
      title: "Knowledge Retention Tools",
      description: "Comprehensive materials, checklists, and follow-up support to ensure workshop learnings are implemented and retained over time.",
      icon: "/images/icon/icon-06.svg"
    }
  ],
  
  // Process section
  processTitle: "Our Workshop Approach",
  processDescription: "We follow a systematic approach to design and deliver financial workshops that provide maximum value and practical application for your business.",
  processSteps: [
    {
      id: 1,
      title: "Needs Assessment",
      description: "We begin by understanding your specific training needs, knowledge gaps, and business goals. This involves discussions with key stakeholders, reviewing existing financial processes, and identifying areas where improved financial knowledge would benefit your team.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 2,
      title: "Custom Curriculum Development",
      description: "Based on our assessment, we develop a tailored workshop curriculum that addresses your specific needs. This includes customized case studies, examples relevant to your industry, and practical exercises using your actual business scenarios where appropriate.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 3,
      title: "Interactive Workshop Delivery",
      description: "Our workshops are delivered by experienced financial professionals with strong teaching skills. We use a variety of interactive methods including small group activities, simulations, guided discussions, and hands-on exercises to ensure engagement and knowledge retention.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 4,
      title: "Implementation Support and Follow-up",
      description: "Learning doesn't end when the workshop concludes. We provide implementation tools, follow-up sessions, and ongoing support to help your team apply the new knowledge and skills in their daily work, ensuring lasting value from the training investment.",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    }
  ],
  
  // FAQ section
  faqTitle: "Common Questions About Our Workshops",
  faqDescription: "Get answers to frequently asked questions about our financial training workshops.",
  faqs: [
    {
      id: 1,
      question: "Who should attend your financial workshops?",
      answer: "Our workshops are designed for various audience levels including business owners, managers, finance team members, and non-financial staff who make or influence financial decisions. We tailor the content complexity to match participants' existing knowledge levels. For maximum effectiveness, we recommend including both decision-makers and those who implement financial processes in the same workshop to ensure alignment and comprehensive understanding."
    },
    {
      id: 2,
      question: "How long are your workshop sessions?",
      answer: "Our workshop formats range from half-day intensive sessions (3-4 hours) to comprehensive multi-day programs. Most clients find that full-day workshops with follow-up implementation sessions provide the best balance of depth and practical application. For complex topics or comprehensive financial training, we often recommend a series of shorter sessions spaced over several weeks to allow for implementation and reinforcement of concepts between sessions."
    },
    {
      id: 3,
      question: "What topics do your financial workshops cover?",
      answer: "Our most popular workshop topics include: Financial Statement Understanding (interpreting balance sheets, income statements, and cash flow statements), Budgeting and Forecasting, Cash Flow Management, Financial KPI Development and Monitoring, Tax Planning for Business Owners, Business Valuation Fundamentals, and Financial Strategy for Growth. We can also develop custom workshops addressing specific financial challenges or opportunities in your business."
    },
    {
      id: 4,
      question: "How do you measure workshop effectiveness?",
      answer: "We assess workshop effectiveness through multiple methods: pre and post-workshop knowledge assessments, participant feedback surveys, 30/60/90-day follow-up evaluations, and most importantly, tracking specific financial metrics that should improve as a result of the training. Before each workshop, we establish clear objectives and success measures with clients, then track progress against these benchmarks to ensure the training delivers tangible business benefits."
    },
    {
      id: 5,
      question: "Can workshops be conducted virtually or must they be in-person?",
      answer: "We offer both in-person and virtual workshop formats. While in-person sessions typically provide better engagement for highly interactive exercises, our virtual workshops use advanced collaborative tools and structured facilitation techniques to create a highly effective learning environment. Many clients opt for a hybrid approach with core sessions delivered in-person and follow-up or specialized topics handled virtually for maximum flexibility."
    }
  ],
  
  // CTA section
  ctaTitle: "Ready to Enhance Your Team's Financial Capabilities?",
  ctaDescription: "Contact us today to discuss how our customized financial workshops can build critical financial skills within your organization and drive better business results.",
  ctaButtonText: "Inquire About Workshops",
  ctaButtonUrl: "/support"
};

export default workshopData; 
import { ServicePageData } from "@/types/servicePageData";

const budgetingCashflowsData: ServicePageData = {
  // Basic info
  id: "budgeting-cashflows",
  title: "Budgeting & Cashflows",
  titleZh: "预算与现金流",
  subtitle: "Financial Planning for Business Success",
  subtitleZh: "业务成功的财务规划",
  
  // Hero section
  heroDescription: "Our goal is to help your business achieve optimal financial health through strategic budgeting and cashflow management. Proper financial planning is essential for reaching your business goals and navigating economic challenges with confidence.",
  heroDescriptionZh: "我们的目标是通过战略性预算和现金流管理帮助您的企业实现最佳财务健康。适当的财务规划对于实现您的业务目标和自信地应对经济挑战至关重要。",
  heroImage: "/images/features/features-light-01.png",
  heroImageDark: "/images/features/features-dark-01.svg",
  
  // Benefits section
  benefitsTitle: "How Budgeting and Cashflow Services Improve Your Business",
  benefitsTitleZh: "预算和现金流服务如何改善您的业务",
  benefitsDescription: "Our comprehensive budgeting and cashflow services help you gain control over your finances, make data-driven decisions, and position your business for sustainable growth.",
  benefitsDescriptionZh: "我们全面的预算和现金流服务帮助您控制财务、做出数据驱动的决策，并为您的业务可持续增长奠定基础。",
  benefits: [
    {
      id: 1,
      title: "Cash Flow Forecasting",
      titleZh: "现金流预测",
      description: "Detailed projections of future cash movements to identify potential shortfalls and surpluses, allowing proactive management of your business's liquidity.",
      descriptionZh: "现金流预测：基于企业的预算、业务活动以及资金流动规律，预测未来一段时间内的现金流入和现金流出情况。",
      icon: "/images/icon/icon-01.svg"
    },
    {
      id: 2,
      title: "Budget Development",
      titleZh: "预算编制",
      description: "Creation of comprehensive, realistic budgets aligned with your business goals, providing a financial roadmap and benchmarks for performance evaluation.",
      descriptionZh: "预算编制与规划\n协助制定预算目标：我们会与企业管理层合作，根据企业的战略目标、市场趋势、确定合理的预算目标，如销售额增长目标、成本控制目标等。\n编制各类预算：包括销售预算、生产预算、采购预算、人工预算、费用预算等。",
      icon: "/images/icon/icon-02.svg"
    },
    {
      id: 3,
      title: "Variance Analysis",
      titleZh: "差异分析",
      description: "Regular comparison of actual financial performance against budgeted figures, with insights on the causes of variances and recommendations for course correction.",
      descriptionZh: "定期监控：定期对企业的预算执行情况和现金流实际发生情况进行监控，将实际数据与预算和预测数据进行对比，及时发现偏差和异常情况。",
      icon: "/images/icon/icon-03.svg"
    },
    {
      id: 4,
      title: "Working Capital Optimization",
      titleZh: "营运资金优化",
      description: "Strategies to improve the efficiency of inventory management, accounts receivable, and accounts payable to enhance cash flow and reduce financing needs.",
      descriptionZh: "现金流分析：对企业的现金流状况进行深入分析，评估现金流动的稳定性、充足性以及资金缺口情况。",
      icon: "/images/icon/icon-04.svg"
    },
    {
      id: 5,
      title: "Financial KPI Development",
      titleZh: "财务KPI开发",
      description: "Establishment of key performance indicators tailored to your industry and business goals, providing clear metrics to track financial health and progress.",
      descriptionZh: "建立适合您所在行业和业务目标的关键绩效指标，提供明确的指标来跟踪财务健康状况和进展。",
      icon: "/images/icon/icon-05.svg"
    },
    {
      id: 6,
      title: "Scenario Planning",
      titleZh: "情景规划",
      description: "Development of financial projections under various business scenarios, helping you prepare for different market conditions and make informed strategic decisions.",
      descriptionZh: "决策支持：根据预算和现金流的分析结果，为企业的经营决策提供支持，如是否进行新的投资项目、是否调整产品价格、是否优化业务流程等，帮助企业实现资源的合理配置和经济效益的最大化。",
      icon: "/images/icon/icon-06.svg"
    }
  ],
  
  // Process section
  processTitle: "Our Budgeting and Cashflow Management Approach",
  processTitleZh: "我们的预算和现金流管理方法",
  processDescription: "We follow a systematic process to develop and implement effective budgeting and cashflow management systems for your business.",
  processDescriptionZh: "我们遵循系统的流程来为您的企业开发和实施有效的预算和现金流管理系统。",
  processSteps: [
    {
      id: 1,
      title: "Financial Assessment",
      titleZh: "财务评估",
      description: "We begin with a thorough analysis of your current financial situation, including historical performance, existing budgets (if any), cash flow patterns, and financial goals. This provides the foundation for developing tailored budgeting and cashflow management strategies.",
      descriptionZh: "我们首先对您当前的财务状况进行全面分析，包括历史表现、现有预算（如有）、现金流模式和财务目标。这为制定量身定制的预算和现金流管理策略提供了基础。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 2,
      title: "Budget and Forecast Development",
      titleZh: "预算和预测开发",
      description: "Based on our assessment, we develop detailed budgets and cashflow forecasts that align with your business objectives. These include revenue projections, expense budgets, capital expenditure plans, and comprehensive cash flow models that account for seasonal fluctuations and growth plans.",
      descriptionZh: "根据我们的评估，我们制定详细的预算和现金流预测，以符合您的业务目标。这些包括收入预测、费用预算、资本支出计划以及考虑季节性波动和增长计划的综合现金流模型。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 3,
      title: "Implementation and Integration",
      titleZh: "实施和集成",
      description: "We help implement your budgeting and cashflow systems, integrating them with your existing accounting software and financial processes. This includes setting up reporting frameworks, training your team on budget management, and establishing monitoring mechanisms.",
      descriptionZh: "我们帮助实施您的预算和现金流系统，将其与您现有的会计软件和财务流程集成。这包括建立报告框架，培训您的团队进行预算管理，以及建立监控机制。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 4,
      title: "Ongoing Monitoring and Refinement",
      titleZh: "持续监控和完善",
      description: "We provide regular review meetings to assess performance against budgets, analyze cashflow patterns, and identify areas for improvement. As your business evolves, we refine your budgeting and cashflow management approaches to maintain their relevance and effectiveness.",
      descriptionZh: "我们提供定期审查会议，评估预算执行情况，分析现金流模式，并确定需要改进的领域。随着您的业务发展，我们完善您的预算和现金流管理方法，以保持其相关性和有效性。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    }
  ],
  
  // FAQ section
  faqTitle: "Common Questions About Budgeting and Cashflows",
  faqTitleZh: "关于预算和现金流的常见问题",
  faqDescription: "Get answers to frequently asked questions about our budgeting and cashflow management services.",
  faqDescriptionZh: "获取有关我们预算和现金流管理服务的常见问题解答。",
  faqs: [
    {
      id: 1,
      question: "How detailed should our company budget be?",
      questionZh: "我们公司的预算应该有多详细？",
      answer: "The ideal level of budget detail depends on your business size, complexity, and goals. Generally, we recommend breaking down revenue by product/service lines and major customer segments, while expenses should be categorized by department and key expense types. For small businesses, we typically develop budgets with 20-30 line items, while larger operations may require 50+ categories. The key is finding the right balance between sufficient detail for meaningful analysis without creating an overly cumbersome process.",
      answerZh: "预算的理想详细程度取决于您的业务规模、复杂性和目标。通常，我们建议按产品/服务线和主要客户细分来细分收入，而费用应按部门和关键费用类型分类。对于小型企业，我们通常制定包含20-30个项目的预算，而较大的业务可能需要50多个类别。关键是在有足够详细信息进行有意义分析和避免创建过于繁琐的流程之间找到合适的平衡。"
    },
    {
      id: 2,
      question: "How far in advance should we forecast cash flows?",
      questionZh: "我们应该提前多久预测现金流？",
      answer: "We typically recommend a tiered approach to cash flow forecasting: detailed weekly forecasts for the next 1-3 months, monthly forecasts for the remainder of the year, and quarterly forecasts for the following year. This provides the immediate visibility needed for day-to-day management while supporting longer-term planning. For businesses with high seasonality or significant growth plans, we may adjust this timeframe to ensure adequate planning horizons.",
      answerZh: "我们通常建议采用分层方法进行现金流预测：未来1-3个月的详细每周预测，当年剩余时间的每月预测，以及来年的季度预测。这提供了日常管理所需的即时可见性，同时支持长期规划。对于季节性强或有重大增长计划的企业，我们可能会调整这一时间框架，以确保充分的规划范围。"
    },
    {
      id: 3,
      question: "What are the warning signs of potential cash flow problems?",
      questionZh: "潜在现金流问题的警示信号有哪些？",
      answer: "Key warning signs include: consistently decreasing cash reserves, regularly paying bills late, heavy reliance on overdrafts or credit lines, extending payment terms to customers, shrinking profit margins, rapid growth without corresponding cash increases, and increasing inventory levels without sales growth. Our cashflow management services help identify these issues early and implement corrective measures before they become critical problems.",
      answerZh: "主要警示信号包括：现金储备持续减少、经常延迟支付账单、过度依赖透支或信贷额度、延长客户付款期限、利润率缩小、快速增长但现金没有相应增加、库存水平增加但销售没有增长。我们的现金流管理服务有助于及早发现这些问题，并在它们成为严重问题之前实施纠正措施。"
    },
    {
      id: 4,
      question: "How often should budgets be reviewed and updated?",
      questionZh: "预算应该多久审查和更新一次？",
      answer: "We recommend monthly budget reviews for most businesses, with a more comprehensive quarterly reassessment. This allows for timely identification of variances while providing sufficient time for corrective actions. The annual budget should be developed 1-2 months before your fiscal year begins, with formal mid-year adjustments if significant changes in business conditions occur. This balanced approach maintains accountability while allowing for necessary flexibility.",
      answerZh: "我们建议大多数企业每月进行预算审查，并每季度进行更全面的重新评估。这允许及时识别差异，同时为纠正措施提供足够的时间。年度预算应在您的财政年度开始前1-2个月制定，如果业务条件发生重大变化，则进行正式的年中调整。这种平衡的方法既保持问责制，又允许必要的灵活性。"
    },
    {
      id: 5,
      question: "Can you help with raising capital or securing financing?",
      questionZh: "您能帮助筹集资金或获取融资吗？",
      answer: "Yes, our budgeting and cashflow services directly support capital raising and financing efforts. We develop professional-quality financial projections, cashflow forecasts, and financial statements that meet lender and investor requirements. We can help identify optimal financing structures, determine appropriate funding amounts, and prepare compelling financial presentations that demonstrate your business's viability and growth potential.",
      answerZh: "是的，我们的预算和现金流服务直接支持资本筹集和融资工作。我们开发符合贷款机构和投资者要求的专业质量财务预测、现金流预测和财务报表。我们可以帮助确定最佳融资结构，确定适当的资金金额，并准备有说服力的财务演示，以展示您企业的可行性和增长潜力。"
    }
  ],
  
  // CTA section
  ctaTitle: "Ready to Improve Your Financial Planning?",
  ctaTitleZh: "准备改善您的财务规划？",
  ctaDescription: "Contact us today to discuss how our budgeting and cashflow management services can help your business achieve greater financial health and reach your growth goals.",
  ctaDescriptionZh: "立即联系我们，讨论我们的预算和现金流管理服务如何帮助您的企业实现更好的财务健康状况并达成您的增长目标。",
  ctaButtonText: "Start Financial Planning",
  ctaButtonTextZh: "开始财务规划",
  ctaButtonUrl: "/support"
};

export default budgetingCashflowsData; 
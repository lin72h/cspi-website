import { ServicePageData } from "@/types/servicePageData";

const workshopData: ServicePageData = {
  // Basic info
  id: "workshop",
  title: "Financial Workshops",
  titleZh: "培训课程",
  subtitle: "Professional Financial Training",
  subtitleZh: "专业财务培训",
  
  // Hero section
  heroDescription: "We offer specialized financial training courses designed for business owners, managers, and their teams. Our workshops cover essential financial knowledge and professional skills that empower you to make better business decisions and improve your financial outcomes.",
  heroDescriptionZh: "我们提供专为企业主、管理者及其团队设计的专业财务培训课程。我们的培训课程涵盖基本财务知识和专业技能，使您能够做出更好的业务决策并改善财务成果。",
  heroImage: "/images/features/features-light-01.png",
  heroImageDark: "/images/features/features-dark-01.svg",
  
  // Benefits section
  benefitsTitle: "How Our Workshops Benefit Your Business",
  benefitsTitleZh: "我们的培训课程如何使您的企业受益",
  benefitsDescription: "Our professional financial training workshops provide practical knowledge and skills that translate directly to improved business performance and financial outcomes.",
  benefitsDescriptionZh: "我们的专业财务培训课程提供实用的知识和技能，直接转化为改善的业务表现和财务成果。",
  benefits: [
    {
      id: 1,
      title: "Financial Literacy Development",
      titleZh: "基础财务知识",
      description: "Build essential financial knowledge among your team members, enabling better decision-making and more effective communication about financial matters.",
      descriptionZh: "财务会计基础：包括财务报表的编制（如资产负债表、利润表、现金流量表）、会计准则的应用（新西兰遵循国际财务报告准则IFRS）。\n税务知识：新西兰的税务体系，包括企业所得税、个人所得税、增值税（GST）等。\n商业法与公司法：涉及公司注册、财务报告和审计要求等内容。",
      icon: "/images/icon/icon-01.svg"
    },
    {
      id: 2,
      title: "Customized Training Solutions",
      titleZh: "专业技能培训",
      description: "Workshops tailored to your industry, business size, and specific financial challenges, ensuring relevant and immediately applicable learning.",
      descriptionZh: "财务分析：学习如何通过比率分析、趋势分析等工具评估企业的财务状况。\n审计与鉴证：涵盖审计流程、内部控制评估以及审计报告的编制。\n管理会计：包括成本控制、预算编制、绩效评估等内容。",
      icon: "/images/icon/icon-02.svg"
    },
    {
      id: 3,
      title: "Practical Skills Application",
      titleZh: "高级课程",
      description: "Hands-on exercises and real-world case studies that develop practical financial skills your team can apply immediately to your business.",
      descriptionZh: "财务报告与披露：深入研究财务报告准则，包括复杂交易的会计处理。\n风险管理与数据分析：学习如何运用数据分析工具进行风险评估和决策支持。\n战略财务管理：将战略思维应用于企业财务管理，提升决策能力。",
      icon: "/images/icon/icon-03.svg"
    },
    {
      id: 4,
      title: "Performance Improvement",
      titleZh: "实践与认证",
      description: "Training focused on improving specific business outcomes, from cash flow management to profitability enhancement and financial decision-making.",
      descriptionZh: "会计软件应用：提供会计软件（如Xero、MYOB）的实践培训，并颁发相关证书。\n专业认证准备：如新西兰注册会计师（CA）认证，需要完成特定课程（如GradDipCA）和实践经验。\n实习与工作经验：部分课程包含实习环节，帮助学员积累实际工作经验。",
      icon: "/images/icon/icon-04.svg"
    },
    {
      id: 5,
      title: "Team Capability Building",
      titleZh: "特定课程",
      description: "Develop your team's financial capabilities, reducing dependence on external advisors for day-to-day financial management and analysis.",
      descriptionZh: "Bookkeeper课程：适合初学者或希望提升实操技能的人群，内容包括日常账务处理和会计基础。\n税务课程：专注于税务管理能力的培养，包括税务筹划和税务纠纷处理。",
      icon: "/images/icon/icon-05.svg"
    },
    {
      id: 6,
      title: "Knowledge Retention Tools",
      titleZh: "学习方式",
      description: "Comprehensive materials, checklists, and follow-up support to ensure workshop learnings are implemented and retained over time.",
      descriptionZh: "线上线下结合：许多课程提供线上线下同步授课，方便学员灵活学习。\n小班教学：注重个性化指导，帮助学员更好地掌握专业知识。",
      icon: "/images/icon/icon-06.svg"
    }
  ],
  
  // Process section
  processTitle: "Our Workshop Approach",
  processTitleZh: "我们的培训方法",
  processDescription: "We follow a systematic approach to design and deliver financial workshops that provide maximum value and practical application for your business.",
  processDescriptionZh: "我们遵循系统的方法设计和提供财务培训课程，为您的业务提供最大价值和实际应用。",
  processSteps: [
    {
      id: 1,
      title: "Needs Assessment",
      titleZh: "需求评估",
      description: "We begin by understanding your specific training needs, knowledge gaps, and business goals. This involves discussions with key stakeholders, reviewing existing financial processes, and identifying areas where improved financial knowledge would benefit your team.",
      descriptionZh: "我们首先了解您的特定培训需求、知识差距和业务目标。这涉及与关键利益相关者的讨论，审查现有的财务流程，并确定改进财务知识将使您的团队受益的领域。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 2,
      title: "Custom Curriculum Development",
      titleZh: "定制课程开发",
      description: "Based on our assessment, we develop a tailored workshop curriculum that addresses your specific needs. This includes customized case studies, examples relevant to your industry, and practical exercises using your actual business scenarios where appropriate.",
      descriptionZh: "根据我们的评估，我们开发针对您特定需求的培训课程。这包括定制的案例研究、与您所在行业相关的例子，以及在适当情况下使用您实际业务场景的实践练习。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 3,
      title: "Interactive Workshop Delivery",
      titleZh: "互动式培训提供",
      description: "Our workshops are delivered by experienced financial professionals with strong teaching skills. We use a variety of interactive methods including small group activities, simulations, guided discussions, and hands-on exercises to ensure engagement and knowledge retention.",
      descriptionZh: "我们的培训课程由具有强大教学技能的经验丰富的财务专业人士提供。我们使用各种互动方法，包括小组活动、模拟、引导式讨论和实践练习，以确保参与和知识保留。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 4,
      title: "Implementation Support and Follow-up",
      titleZh: "实施支持和后续跟进",
      description: "Learning doesn't end when the workshop concludes. We provide implementation tools, follow-up sessions, and ongoing support to help your team apply the new knowledge and skills in their daily work, ensuring lasting value from the training investment.",
      descriptionZh: "学习不会在培训结束时终止。我们提供实施工具、后续跟进会议和持续支持，帮助您的团队在日常工作中应用新知识和技能，确保培训投资的持久价值。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    }
  ],
  
  // FAQ section
  faqTitle: "Common Questions About Our Workshops",
  faqTitleZh: "关于我们培训课程的常见问题",
  faqDescription: "Get answers to frequently asked questions about our financial training workshops.",
  faqDescriptionZh: "获取有关我们财务培训课程的常见问题解答。",
  faqs: [
    {
      id: 1,
      question: "Who should attend your financial workshops?",
      questionZh: "谁应该参加您的财务培训课程？",
      answer: "Our workshops are designed for various audience levels including business owners, managers, finance team members, and non-financial staff who make or influence financial decisions. We tailor the content complexity to match participants' existing knowledge levels. For maximum effectiveness, we recommend including both decision-makers and those who implement financial processes in the same workshop to ensure alignment and comprehensive understanding.",
      answerZh: "我们的培训课程适合各种受众级别，包括企业主、管理者、财务团队成员以及做出或影响财务决策的非财务人员。我们根据参与者现有的知识水平调整内容复杂性。为了获得最大效果，我们建议决策者和实施财务流程的人员同时参加培训，以确保一致性和全面理解。"
    },
    {
      id: 2,
      question: "How long are your workshop sessions?",
      questionZh: "您的培训课程时长是多少？",
      answer: "Our workshop formats range from half-day intensive sessions (3-4 hours) to comprehensive multi-day programs. Most clients find that full-day workshops with follow-up implementation sessions provide the best balance of depth and practical application. For complex topics or comprehensive financial training, we often recommend a series of shorter sessions spaced over several weeks to allow for implementation and reinforcement of concepts between sessions.",
      answerZh: "我们的培训形式从半天密集课程（3-4小时）到全面的多日课程不等。大多数客户发现全天培训加上后续实施会议提供了深度和实际应用的最佳平衡。对于复杂主题或全面财务培训，我们通常建议在几周内安排一系列较短的课程，以便在课程之间实施和强化概念。"
    },
    {
      id: 3,
      question: "What topics do your financial workshops cover?",
      questionZh: "您的财务培训课程涵盖哪些主题？",
      answer: "Our most popular workshop topics include: Financial Statement Understanding (interpreting balance sheets, income statements, and cash flow statements), Budgeting and Forecasting, Cash Flow Management, Financial KPI Development and Monitoring, Tax Planning for Business Owners, Business Valuation Fundamentals, and Financial Strategy for Growth. We can also develop custom workshops addressing specific financial challenges or opportunities in your business.",
      answerZh: "我们最受欢迎的培训主题包括：财务报表理解（解读资产负债表、利润表和现金流量表）、预算和预测、现金流管理、财务KPI开发和监控、企业主税务规划、企业估值基础和增长财务战略。我们还可以开发解决您企业特定财务挑战或机会的定制培训。"
    },
    {
      id: 4,
      question: "How do you measure workshop effectiveness?",
      questionZh: "您如何衡量培训效果？",
      answer: "We assess workshop effectiveness through multiple methods: pre and post-workshop knowledge assessments, participant feedback surveys, 30/60/90-day follow-up evaluations, and most importantly, tracking specific financial metrics that should improve as a result of the training. Before each workshop, we establish clear objectives and success measures with clients, then track progress against these benchmarks to ensure the training delivers tangible business benefits.",
      answerZh: "我们通过多种方法评估培训效果：培训前后知识评估、参与者反馈调查、30/60/90天后续评估，最重要的是，跟踪应该因培训而改善的特定财务指标。在每次培训之前，我们与客户建立明确的目标和成功衡量标准，然后跟踪这些基准的进展，以确保培训提供切实的业务效益。"
    },
    {
      id: 5,
      question: "Can workshops be conducted virtually or must they be in-person?",
      questionZh: "培训可以虚拟进行还是必须面对面进行？",
      answer: "We offer both in-person and virtual workshop formats. While in-person sessions typically provide better engagement for highly interactive exercises, our virtual workshops use advanced collaborative tools and structured facilitation techniques to create a highly effective learning environment. Many clients opt for a hybrid approach with core sessions delivered in-person and follow-up or specialized topics handled virtually for maximum flexibility.",
      answerZh: "我们提供面对面和虚拟培训形式。虽然面对面课程通常为高度互动的练习提供更好的参与度，但我们的虚拟培训使用先进的协作工具和结构化引导技术，创造高效的学习环境。许多客户选择混合方式，核心课程面对面进行，后续或专业主题则通过虚拟方式处理，以获得最大的灵活性。"
    }
  ],
  
  // CTA section
  ctaTitle: "Ready to Enhance Your Team's Financial Capabilities?",
  ctaTitleZh: "准备提升您团队的财务能力？",
  ctaDescription: "Contact us today to discuss how our customized financial workshops can build critical financial skills within your organization and drive better business results.",
  ctaDescriptionZh: "立即联系我们，讨论我们的定制财务培训如何在您的组织内建立关键财务技能并带来更好的业务成果。",
  ctaButtonText: "Inquire About Workshops",
  ctaButtonTextZh: "咨询培训课程",
  ctaButtonUrl: "/support"
};

export default workshopData; 
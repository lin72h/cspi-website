import { ServicePageData } from "@/types/servicePageData";

const taxAndComplianceData: ServicePageData = {
  // Basic info
  id: "tax-and-compliance",
  title: "Tax and Compliance",
  titleZh: "税务与合规",
  subtitle: "Navigating New Zealand Tax Regulations",
  subtitleZh: "引导新西兰税务法规",
  
  // Hero section
  heroDescription: "New Zealand tax law can be daunting for business owners. Our dedicated tax and compliance services ensure you meet all regulatory requirements while minimizing your tax burden. We handle GST, Fringe Benefit Tax, Payroll, Income Tax, and more so you can focus on running your business.",
  heroDescriptionZh: "新西兰税法对企业主来说可能令人生畏。我们专业的税务和合规服务确保您满足所有监管要求，同时最大限度地减少您的税务负担。我们处理GST、附加福利税、工资、所得税等事务，使您能够专注于经营您的业务。",
  heroImage: "/images/about/about-light-02.svg",
  heroImageDark: "/images/about/about-dark-02.svg",
  
  // Benefits section
  benefitsTitle: "How Our Tax and Compliance Services Help You",
  benefitsTitleZh: "我们的税务与合规服务如何帮助您",
  benefitsDescription: "We offer comprehensive tax and compliance services to ensure your business meets all regulatory requirements while maximizing legitimate tax advantages.",
  benefitsDescriptionZh: "我们提供全面的税务和合规服务，确保您的企业满足所有监管要求，同时最大化合法税务优势。",
  benefits: [
    {
      id: 1,
      title: "Tax Return Preparation",
      titleZh: "税务申报",
      description: "Accurate and timely preparation of all required tax returns including income tax, GST, and FBT, ensuring full compliance with IRD requirements.",
      descriptionZh: "税务申报：\nGST 申报：商品及服务税（GST）是新西兰重要的税种之一，我们会帮助企业或个人准确计算应缴纳的 GST，填写相关申报表格，并在规定时间内提交给税务局。\nPAYE 申报：即工资税申报，我们会协助雇主计算员工工资中应扣除的税款，向税务局申报并缴纳，确保雇主履行代扣代缴义务。\n所得税申报：包括个人所得税（IR3）、公司所得税（IR4）、信托所得税（IR6）等不同类型的所得税申报。我们会根据客户的收入、扣除项目、税收优惠等情况，准确计算应纳税额，完成申报工作。",
      icon: "/images/icon/icon-01.svg"
    },
    {
      id: 2,
      title: "IRD Audit Support",
      titleZh: "IRD审计支持",
      description: "Expert representation and support during IRD audits or inquiries. When clients face tax audits, we communicate with tax authorities on their behalf, provide relevant financial materials and explanations, assist clients in responding to audits, ensure smooth audit processes, and protect clients' legitimate rights while managing the process to minimize stress and potential liability.",
      descriptionZh: "税务审计协助：当客户面临税务局的税务审计时，我们会代表客户与税务局沟通，提供相关的财务资料和解释，协助客户应对审计，确保审计过程顺利进行，维护客户的合法权益。我们提供专业代表和支持，管理流程以最大限度地减少压力和潜在责任。",
      icon: "/images/icon/icon-06.svg"
    },
    {
      id: 3,
      title: "GST Management",
      titleZh: "GST管理",
      description: "Complete Goods and Services Tax management including registration, filing returns, handling special transactions, and ensuring accurate reporting.",
      descriptionZh: "完整的商品和服务税管理，包括注册、申报纳税、处理特殊交易以及确保准确报告。",
      icon: "/images/icon/icon-02.svg"
    },
    {
      id: 4,
      title: "Fringe Benefit Tax Compliance",
      titleZh: "附加福利税合规",
      description: "Management of Fringe Benefit Tax obligations related to employee benefits, with strategies to minimize FBT exposure while maintaining employee satisfaction.",
      descriptionZh: "管理与员工福利相关的附加福利税义务，并制定策略，在保持员工满意度的同时最大限度地减少FBT风险。",
      icon: "/images/icon/icon-03.svg"
    },
    {
      id: 5,
      title: "Payroll Administration",
      titleZh: "工资管理",
      description: "Comprehensive payroll services including PAYE, KiwiSaver, ACC levies, and leave management, ensuring compliance with employment tax regulations.",
      descriptionZh: "全面的工资服务，包括PAYE、KiwiSaver、ACC税费和休假管理，确保符合就业税收法规。",
      icon: "/images/icon/icon-04.svg"
    },
    {
      id: 6,
      title: "Tax Planning Strategies",
      titleZh: "税务规划策略",
      description: "Proactive tax planning to legally minimize your tax obligations through structure optimization, timing strategies, and available incentives. We develop reasonable tax planning solutions based on your financial situation and business objectives to help you legally reduce your tax burden.",
      descriptionZh: "税务筹划：根据客户的财务状况和经营目标，为客户制定合理的税务筹划方案，帮助客户合法降低税负。我们通过结构优化、时机策略和可用激励措施，积极进行税务规划，合法最小化您的税务义务。",
      icon: "/images/icon/icon-05.svg"
    },
    {
      id: 7,
      title: "Tax Debt Relief",
      titleZh: "税务债务减免",
      description: "Assistance with tax debt issues, including negotiation with IRD for potential penalty and interest reductions. If clients have tax debt problems, we negotiate with tax authorities based on the client's specific circumstances, such as financial difficulties or force majeure factors, to seek relief from part or all of the penalties and interest, and even negotiate debt repayment methods and terms.",
      descriptionZh: "税债减免：如果客户存在税务债务问题，我们会与税务局进行谈判，根据客户的具体情况，如财务困难、不可抗力因素等，争取减免部分或全部的罚款和利息，甚至协商债务的偿还方式和期限。",
      icon: "/images/icon/icon-07.svg"
    },
    {
      id: 8,
      title: "Policy Interpretation",
      titleZh: "政策解读",
      description: "Interpretation of changing tax regulations and how they impact your business. New Zealand tax regulations frequently change, and we stay current with regulatory developments to interpret new policies for clients, explain their impact on your business, and provide coping strategies.",
      descriptionZh: "政策解读：新西兰的税务法规经常变化，我们会及时关注法规动态，为客户解读新政策对其业务的影响，并提供应对建议。",
      icon: "/images/icon/icon-08.svg"
    }
  ],
  
  // Process section
  processTitle: "Our Tax and Compliance Process",
  processTitleZh: "我们的税务与合规流程",
  processDescription: "We follow a methodical approach to manage your tax and compliance needs, ensuring accuracy, timeliness, and tax efficiency.",
  processDescriptionZh: "我们遵循系统的方法来管理您的税务和合规需求，确保准确性、及时性和税务效率。",
  processSteps: [
    {
      id: 1,
      title: "Assessment and Planning",
      titleZh: "评估与规划",
      description: "We begin with a comprehensive assessment of your tax situation and compliance needs. This includes reviewing your business structure, activities, and existing tax strategies to identify areas for improvement and potential risks.",
      descriptionZh: "我们从全面评估您的税务状况和合规需求开始。这包括审查您的业务结构、活动和现有税务策略，以确定改进领域和潜在风险。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 2,
      title: "Compliance Calendar Development",
      titleZh: "合规日历制定",
      description: "We create a customized compliance calendar outlining all your tax filing deadlines and requirements. This ensures nothing falls through the cracks and helps you plan for tax payments throughout the year.",
      descriptionZh: "我们创建一个定制的合规日历，概述您所有的税务申报截止日期和要求。这确保不会遗漏任何事项，并帮助您全年规划税款缴纳。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 3,
      title: "Regular Tax Filings and Payments",
      titleZh: "定期税务申报和缴纳",
      description: "Our team handles the preparation and submission of all required tax returns including income tax, GST, PAYE, and FBT. We ensure accurate calculations, timely submissions, and proper documentation to support all filings.",
      descriptionZh: "我们的团队负责准备和提交所有必需的税务申报表，包括所得税、GST、PAYE和FBT。我们确保计算准确、及时提交，并提供适当的文档支持所有申报。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 4,
      title: "Strategic Reviews and Adjustments",
      titleZh: "战略审查和调整",
      description: "We conduct regular reviews of your tax position to identify opportunities for legitimate tax minimization. This includes assessing changing tax laws, business circumstances, and planning for major transactions with tax implications.",
      descriptionZh: "我们定期审查您的税务状况，以确定合法最小化税务的机会。这包括评估不断变化的税法、商业环境，以及规划具有税务影响的重大交易。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 5,
      title: "Financial Statement Preparation",
      titleZh: "财务报表编制",
      description: "We prepare accurate financial statements that serve as the foundation for tax reporting. Although not strictly a tax service, accurate financial statements are the basis for tax reporting. We prepare quarterly, semi-annual, and year-end financial statements based on your financial data to provide a basis for tax calculations and filing.",
      descriptionZh: "财务报表编制：虽然不属于严格意义上的税务服务，但准确的财务报表是税务申报的基础。我们会根据客户的财务数据，编制季度/半年度/年终财务报表，为税务计算和申报提供依据。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    },
    {
      id: 6,
      title: "Accounting Software Training",
      titleZh: "会计软件培训",
      description: "We help clients master accounting software to better record financial data and improve financial management efficiency. This training enables you to better maintain your financial records and accurately perform tax-related operations.",
      descriptionZh: "会计软件培训：帮助客户掌握会计软件的使用方法，以便客户能够更好地记录财务数据，提高财务管理效率，同时也有助于准确进行税务相关的操作。",
      image: "/images/features/features-light-01.png",
      imageDark: "/images/features/features-dark-01.svg"
    }
  ],
  
  // FAQ section
  faqTitle: "Common Questions About Tax and Compliance",
  faqTitleZh: "关于税务与合规的常见问题",
  faqDescription: "Get answers to frequently asked questions about our tax and compliance services.",
  faqDescriptionZh: "获取有关我们税务和合规服务的常见问题解答。",
  faqs: [
    {
      id: 1,
      question: "How often should my business review its tax strategy?",
      questionZh: "我的企业应该多久审查一次税务策略？",
      answer: "We recommend quarterly tax strategy reviews for most businesses, with additional reviews when significant changes occur in your business or in tax legislation. Regular reviews allow us to make timely adjustments to your tax planning, identify emerging opportunities for tax savings, and ensure ongoing compliance as your business evolves.",
      answerZh: "我们建议大多数企业每季度进行一次税务策略审查，当您的业务或税法发生重大变化时进行额外审查。定期审查使我们能够及时调整您的税务规划，发现新的节税机会，并确保随着业务的发展持续合规。"
    },
    {
      id: 2,
      question: "What are the common GST pitfalls for New Zealand businesses?",
      questionZh: "新西兰企业在GST方面常见的陷阱有哪些？",
      answer: "Common GST issues include incorrect treatment of mixed-use assets, errors in claiming GST on entertainment expenses, mishandling of international transactions, timing issues with GST claims, and inadequate record-keeping. Our comprehensive GST management services help you navigate these complexities and avoid costly mistakes.",
      answerZh: "常见的GST问题包括混合使用资产的不正确处理、申报娱乐支出GST的错误、国际交易的处理不当、GST申报的时间问题以及记录保存不充分。我们全面的GST管理服务帮助您解决这些复杂问题并避免代价高昂的错误。"
    },
    {
      id: 3,
      question: "How do I know if I'm paying too much tax?",
      questionZh: "我如何知道是否缴纳了过多的税款？",
      answer: "Signs you may be paying too much tax include: consistently large tax bills without corresponding business growth, not utilizing available deductions and credits, operating under a sub-optimal business structure for your circumstances, or lacking a proactive tax planning strategy. Our assessment can identify specific areas where you may be able to legally reduce your tax burden.",
      answerZh: "您可能缴纳过多税款的迹象包括：持续的大额税单但没有相应的业务增长、未充分利用可用的扣除和抵免、在次优的业务结构下运营、缺乏积极的税务规划策略。我们的评估可以确定您可能能够合法减轻税务负担的具体领域。"
    },
    {
      id: 4,
      question: "What happens if I make a mistake on my tax returns?",
      questionZh: "如果我在税务申报上出错了会怎样？",
      answer: "If you discover errors in previously filed returns, it's important to address them promptly. We can help you with voluntary disclosures to the IRD, which may reduce potential penalties. Our approach focuses on resolving issues efficiently while maintaining a positive relationship with tax authorities. The key is addressing errors proactively rather than waiting for an IRD audit.",
      answerZh: "如果您发现之前提交的申报表中有错误，重要的是及时处理。我们可以帮助您向IRD进行自愿披露，这可能会减少潜在的罚款。我们的方法注重在保持与税务机关良好关系的同时有效解决问题。关键是主动解决错误，而不是等待IRD审计。"
    },
    {
      id: 5,
      question: "How do you stay current with changing tax regulations?",
      questionZh: "您如何保持对不断变化的税收法规的了解？",
      answer: "Our team maintains up-to-date knowledge through ongoing professional development, subscriptions to tax authority updates, membership in professional accounting bodies, and regular tax law seminars. We continuously monitor legislative changes, IRD interpretations, and case law to ensure our advice reflects the current tax environment in New Zealand.",
      answerZh: "我们的团队通过持续的专业发展、订阅税务机关更新、加入专业会计机构以及定期参加税法研讨会来保持最新知识。我们不断监控立法变化、IRD解释和判例法，以确保我们的建议反映新西兰当前的税务环境。"
    }
  ],
  
  // CTA section
  ctaTitle: "Need Help with Tax Compliance?",
  ctaTitleZh: "需要税务合规方面的帮助？",
  ctaDescription: "Contact us today to discuss how we can help your business navigate New Zealand's tax regulations, ensure compliance, and minimize your tax burden legally.",
  ctaDescriptionZh: "立即联系我们，讨论我们如何帮助您的企业应对新西兰的税务法规，确保合规，并合法最小化您的税务负担。",
  ctaButtonText: "Get Tax Assistance",
  ctaButtonTextZh: "获取税务帮助",
  ctaButtonUrl: "/support"
};

export default taxAndComplianceData; 
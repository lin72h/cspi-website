import { StaticImageData } from "next/image";

export interface IndustrySector {
  id: string;
  icon: string;
  titleKey: string;
}

const getIndustrySectorsData = (t: (key: string, ns?: string) => string): IndustrySector[] => [
  {
    id: "agribusiness",
    icon: "/images/industries/agribusiness.svg",
    titleKey: "agribusiness"
  },
  {
    id: "construction",
    icon: "/images/industries/construction.svg",
    titleKey: "construction"
  },
  {
    id: "financialServices",
    icon: "/images/industries/financial.svg",
    titleKey: "financialServices"
  },
  {
    id: "transportation",
    icon: "/images/industries/transportation.svg", 
    titleKey: "transportation"
  },
  {
    id: "foodAndRetail",
    icon: "/images/industries/retail.svg",
    titleKey: "foodAndRetail"
  },
  {
    id: "infrastructure",
    icon: "/images/industries/infrastructure.svg",
    titleKey: "infrastructure"
  },
  {
    id: "consultingAndTraining",
    icon: "/images/industries/consulting.svg",
    titleKey: "consultingAndTraining"
  },
  {
    id: "internationalTrade",
    icon: "/images/industries/trade.svg",
    titleKey: "internationalTrade"
  },
];

export default getIndustrySectorsData; 
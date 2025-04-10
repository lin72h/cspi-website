import { FeatureTab } from "@/types/featureTab";

const getFeatureTabData = (t: (key: string, ns?: string) => string): FeatureTab[] => [
  {
    id: "tabOne",
    title: t("initialConsultationFull", "features"),
    desc1: t("initialConsultationDesc1", "features"),
    desc2: t("initialConsultationDesc2", "features"),
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: t("strategyDevelopmentFull", "features"),
    desc1: t("strategyDevelopmentDesc1", "features"),
    desc2: t("strategyDevelopmentDesc2", "features"),
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: t("ongoingSupportFull", "features"),
    desc1: t("ongoingSupportDesc1", "features"),
    desc2: t("ongoingSupportDesc2", "features"),
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default getFeatureTabData;

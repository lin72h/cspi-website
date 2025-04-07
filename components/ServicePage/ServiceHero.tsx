"use client";
import Image from "next/image";
import { MotionDiv } from "@/app/libs/framer-utls";
import { useLanguage } from "@/app/context/LanguageContext";

interface ServiceHeroProps {
  title: string;
  titleZh?: string;
  subtitle: string;
  subtitleZh?: string;
  description: string;
  heroDescriptionZh?: string;
  image: string;
  imageDark: string;
}

const ServiceHero = ({ 
  title, 
  titleZh, 
  subtitle, 
  subtitleZh, 
  description, 
  heroDescriptionZh, 
  image, 
  imageDark 
}: ServiceHeroProps) => {
  const { language } = useLanguage();
  
  // Chinese description for consulting services
  const descriptionZh = "我们为自雇人士、合伙企业、房地产、信托和私人公司提供商业咨询和会计服务，包括簿记、年度和定期财务报表-损益表、资产负债表和经营预测-编制工资、PAYE、FBT、GST回报和商业计划";
  
  // Display content based on current language
  const displayTitle = language === "zh" && titleZh ? titleZh : title;
  const displaySubtitle = language === "zh" && subtitleZh ? subtitleZh : subtitle;
  const displayDescription = language === "zh" && heroDescriptionZh ? heroDescriptionZh : description;
  
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          <MotionDiv
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-1/2"
          >
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              {displaySubtitle}
            </h4>
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
              {displayTitle}
            </h1>
            <p className="mb-10 text-base leading-relaxed">
              {displayDescription}
            </p>
            
            <div className="flex">
              <a
                href="/support"
                className="inline-flex items-center gap-2.5 rounded-full bg-cspi px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-cspiHover dark:border-cspi dark:bg-cspi dark:hover:bg-cspiHover"
              >
                Book a Consultation
                <span className="pl-2.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4766 6.16664L6.00664 1.69664L7.18498 0.518311L13.6666 6.99998L7.18498 13.4816L6.00664 12.3033L10.4766 7.83331H0.333313V6.16664H10.4766Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right relative mx-auto hidden md:block md:w-1/2"
          >
            <div className="relative z-1 text-center">
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="dark:hidden"
              />
              <Image
                src={imageDark}
                alt={title}
                width={500}
                height={500}
                className="hidden dark:block"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero; 
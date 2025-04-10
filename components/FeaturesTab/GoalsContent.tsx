import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { MotionDiv } from "@/app/libs/framer-utls";

const GoalsContent = () => {
  const { t } = useLanguage();

  const bullets = t("strategyDevelopmentBullets", "features");
  const bulletPoints = Array.isArray(bullets) ? bullets : [];

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-19">
      <div className="w-full md:w-3/4">
        <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          {t("strategyDevelopmentFull", "features")}
        </h2>
        
        <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
          {t("strategyDevelopmentSubheading", "features")}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bulletPoints.map((bullet, index) => (
            <MotionDiv
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="mr-3 flex h-[30px] w-[30px] min-w-[30px] items-center justify-center rounded-full bg-primary text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00033 9.41667L11.0003 6.41667L12.177 7.59333L8.00033 11.77L3.82366 7.59333L5.00033 6.41667L8.00033 9.41667Z" fill="white" />
                </svg>
              </div>
              <div>
                <p className="mb-0 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  {bullet}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsContent; 
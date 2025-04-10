import React from "react";
import Image from "next/image";
import { IndustrySector } from "./industrySectorsData";
import { MotionDiv } from "@/app/libs/framer-utls";
import { useLanguage } from "@/app/context/LanguageContext";

const IndustrySectorsGrid = ({ 
  sectors 
}: { 
  sectors: IndustrySector[] 
}) => {
  const { t, getBilingualText, language } = useLanguage();

  return (
    <div className="mb-12 mt-12">
      <h2 className="mb-16 text-center text-3xl font-bold text-black dark:text-white">
        {t('industrySectorsHeader', 'features')}
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sectors.map((sector, index) => {
          const { current, other } = getBilingualText(sector.titleKey, 'features');
          
          return (
            <MotionDiv
              key={sector.id}
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animate_top flex flex-col items-center"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center">
                <Image
                  src={sector.icon}
                  alt={current}
                  width={64}
                  height={64}
                />
              </div>
              
              <div className="text-center">
                <p className="text-lg font-bold text-black dark:text-white">
                  {current}
                </p>
                <p className="text-sm text-body-color">
                  {other}
                </p>
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
};

export default IndustrySectorsGrid; 
"use client";
import { ServiceProcessStep } from "@/types/servicePageData";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { MotionDiv } from "@/app/libs/framer-utls";
import { useLanguage } from "@/app/context/LanguageContext";

interface ServiceProcessProps {
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
  steps: ServiceProcessStep[];
}

const ServiceProcess = ({ title, titleZh, description, descriptionZh, steps }: ServiceProcessProps) => {
  const { language } = useLanguage();
  
  // Display content based on current language
  const displayTitle = language === "zh" && titleZh ? titleZh : title;
  const displayDescription = language === "zh" && descriptionZh ? descriptionZh : description;
  
  return (
    <section className="relative pb-20 pt-18.5 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        {/* Section Title Start */}
        <SectionHeader
          headerInfo={{
            title: "PROCESS",
            subtitle: displayTitle,
            description: displayDescription,
          }}
        />
        {/* Section Title End */}
        
        <div className="mt-15 xl:mt-20">
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.id} 
              step={step} 
              index={index} 
              total={steps.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ 
  step, 
  index, 
  total 
}: { 
  step: ServiceProcessStep;
  index: number;
  total: number;
}) => {
  const isEven = index % 2 === 0;
  const isLast = index === total - 1;
  const { language } = useLanguage();
  
  // Display content based on current language
  const displayTitle = language === "zh" && step.titleZh ? step.titleZh : step.title;
  const displayDescription = language === "zh" && step.descriptionZh ? step.descriptionZh : step.description;

  return (
    <div className={`flex items-center gap-8 ${isLast ? '' : 'mb-20'} flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <MotionDiv
        variants={{
          hidden: {
            opacity: 0,
            x: isEven ? -20 : 20,
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
        className="animate_top md:w-1/2"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
            <p className="text-metatitle2 font-semibold text-black dark:text-white">
              {index + 1}
            </p>
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white">
            {displayTitle}
          </h3>
        </div>
        <p className="w-full lg:max-w-[470px]">{displayDescription}</p>
      </MotionDiv>

      {step.image && (
        <MotionDiv
          variants={{
            hidden: {
              opacity: 0,
              x: isEven ? 20 : -20,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="animate_top relative mx-auto md:w-1/2"
        >
          <div className="relative mx-auto aspect-[588/526.5] max-w-[500px]">
            <Image
              src={step.image}
              alt={displayTitle}
              className="dark:hidden"
              fill
            />
            {step.imageDark && (
              <Image
                src={step.imageDark}
                alt={displayTitle}
                className="hidden dark:block"
                fill
              />
            )}
          </div>
        </MotionDiv>
      )}
    </div>
  );
};

export default ServiceProcess; 
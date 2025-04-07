"use client";
import { ServiceFAQ as ServiceFAQType } from "@/types/servicePageData";
import SectionHeader from "../Common/SectionHeader";
import { useState } from "react";
import { MotionDiv } from "@/app/libs/framer-utls";
import { useLanguage } from "@/app/context/LanguageContext";

interface ServiceFAQProps {
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
  faqs: ServiceFAQType[];
}

const ServiceFAQ = ({ title, titleZh, description, descriptionZh, faqs }: ServiceFAQProps) => {
  const { language } = useLanguage();
  
  // Display content based on current language
  const displayTitle = language === "zh" && titleZh ? titleZh : title;
  const displayDescription = language === "zh" && descriptionZh ? descriptionZh : description;
  
  return (
    <section className="overflow-hidden py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        {/* Section Title Start */}
        <SectionHeader
          headerInfo={{
            title: "FAQ",
            subtitle: displayTitle,
            description: displayDescription,
          }}
        />
        {/* Section Title End */}
        
        <div className="mt-15 xl:mt-20">
          {faqs.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SingleFAQ = ({ faq }: { faq: ServiceFAQType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  
  // Display content based on current language
  const displayQuestion = language === "zh" && faq.questionZh ? faq.questionZh : faq.question;
  const displayAnswer = language === "zh" && faq.answerZh ? faq.answerZh : faq.answer;

  return (
    <MotionDiv
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
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top mb-6 overflow-hidden rounded-lg border border-stroke bg-white last:mb-0 dark:border-strokedark dark:bg-blacksection"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left text-base font-medium text-black dark:text-white lg:px-6 lg:py-5"
      >
        <span>{displayQuestion}</span>
        <svg
          className={`fill-current ${isOpen ? "rotate-180" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00039 11.4L2.80039 6.2C2.30039 5.7 2.30039 4.9 2.80039 4.4C3.30039 3.9 4.10039 3.9 4.60039 4.4L8.00039 7.8L11.4004 4.4C11.9004 3.9 12.7004 3.9 13.2004 4.4C13.7004 4.9 13.7004 5.7 13.2004 6.2L8.00039 11.4C7.70039 11.7 7.30039 11.9 7.00039 11.9C6.70039 11.9 6.30039 11.7 6.00039 11.4Z"
            fill=""
          />
        </svg>
      </button>

      <div
        className={`duration-100 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="border-t border-stroke p-4 dark:border-strokedark lg:px-6 lg:py-5">
          <p className="text-base">{displayAnswer}</p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ServiceFAQ; 
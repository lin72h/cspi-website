"use client";
import { ServiceBenefit } from "@/types/servicePageData";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { MotionDiv } from "@/app/libs/framer-utls";

interface ServiceBenefitsProps {
  title: string;
  description: string;
  benefits: ServiceBenefit[];
}

const ServiceBenefits = ({ title, description, benefits }: ServiceBenefitsProps) => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title Start */}
        <SectionHeader
          headerInfo={{
            title: "BENEFITS",
            subtitle: title,
            description: description,
          }}
        />
        {/* Section Title End */}

        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {benefits.map((benefit, key) => (
            <SingleBenefit benefit={benefit} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SingleBenefit = ({ benefit }: { benefit: ServiceBenefit }) => {
  const { icon, title, description } = benefit;

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
      className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
        <Image src={icon} width={36} height={36} alt={title} />
      </div>
      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
        {title}
      </h3>
      <p>{description}</p>
    </MotionDiv>
  );
};

export default ServiceBenefits; 
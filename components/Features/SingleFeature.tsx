import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/app/libs/framer-utls";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  // Determine the link based on the feature title
  const getFeatureLink = (title: string): string => {
    switch (title) {
      case "Consulting Services":
        return "/consulting-services";
      case "Tax and Compliance":
        return "/tax-and-compliance";
      case "Budgeting and Cashflows":
        return "/budgeting-cashflows";
      case "Workshop":
        return "/workshop";
      default:
        return "/";
    }
  };

  return (
    <>
      <Link href={getFeatureLink(title)} className="block h-full">
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
          className="animate_top z-40 rounded-lg border border-white bg-white p-6 shadow-solid-3 transition-all hover:shadow-solid-4 hover:border-cspi dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-8 h-full flex flex-col cursor-pointer"
        >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary mb-5">
            <Image src={icon} width={36} height={36} alt={title} />
          </div>
          <h3 className="mb-3 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            {title}
          </h3>
          <p className="text-base">{description}</p>
        </MotionDiv>
      </Link>
    </>
  );
};

export default SingleFeature;

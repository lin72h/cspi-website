import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { MotionDiv } from "@/app/libs/framer-utls";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
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
        className="animate_top z-40 rounded-lg border border-white bg-white p-8 shadow-solid-3 transition-all hover:shadow-solid-4 hover:border-cspi dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-10 h-full flex flex-col"
      >
        <div className="relative flex h-18 w-18 items-center justify-center rounded-[4px] bg-primary mb-6">
          <Image src={icon} width={40} height={40} alt={title} />
        </div>
        <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-base">{description}</p>
      </MotionDiv>
    </>
  );
};

export default SingleFeature;

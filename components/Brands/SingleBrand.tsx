import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { MotionA } from "@/app/libs/framer-utls";

interface SingleBrandProps {
  brand: Brand;
  className?: string;
}

const SingleBrand = ({ brand, className = "" }: SingleBrandProps) => {
  const { image, href, name, id } = brand;

  return (
    <>
      <MotionA
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className={`animate_top mx-auto block h-24 w-[220px] relative p-2 ${className}`}
      >
        <Image
          className="transition-all duration-300"
          src={image}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
          unoptimized
        />
      </MotionA>
    </>
  );
};

export default SingleBrand;

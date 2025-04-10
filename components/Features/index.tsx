"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { useLanguage } from "@/app/context/LanguageContext";

const Feature = () => {
  const { language } = useLanguage();
  
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-12 lg:py-16 xl:py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: language === "zh" ? "服务" : "SERVICES",
              subtitle: language === "zh" ? "服务项目" : "Services Offering",
              description: language === "zh" 
                ? "我们全面的会计和财务服务旨在支持您的业务需求并推动您的成功。" 
                : "Our comprehensive range of accounting and financial services designed to support your business needs and drive your success.",
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 xl:mt-12 xl:gap-8 max-w-4xl mx-auto">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;

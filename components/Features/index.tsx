"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-12 lg:py-16 xl:py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "SERVICES",
              subtitle: "Services Offering",
              description: `Our comprehensive range of accounting and financial services designed to support your business needs and drive your success.`,
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

import React from "react";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Packages - CSPI Consultants",
  description: "Explore our flexible accounting service packages tailored to meet your business needs",
  // other metadata
};

const PricingPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Pricing />
    </div>
  );
};

export default PricingPage; 
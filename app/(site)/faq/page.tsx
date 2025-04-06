import React from "react";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - CSPI Consultants",
  description: "Answers to common questions about our accounting and financial services",
  // other metadata
};

const FAQPage = () => {
  return (
    <div className="pt-40 pb-20">
      <FAQ />
    </div>
  );
};

export default FAQPage; 
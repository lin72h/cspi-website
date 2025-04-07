"use client";
import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import taxAndComplianceData from "@/data/tax-and-compliance";

const TaxAndCompliancePage = () => {
  return (
    <div className="pt-40 pb-20">
      <ServicePageTemplate serviceData={taxAndComplianceData} />
    </div>
  );
};

export default TaxAndCompliancePage; 
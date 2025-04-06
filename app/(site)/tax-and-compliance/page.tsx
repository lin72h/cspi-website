import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import taxAndComplianceData from "@/data/tax-and-compliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax and Compliance Services - CSPI Consultants",
  description: "Expert tax and compliance services including GST, Fringe Benefit Tax, Payroll, and Income Tax management for New Zealand businesses.",
  // other metadata
};

const TaxAndCompliancePage = () => {
  return (
    <div className="pt-40 pb-20">
      <ServicePageTemplate serviceData={taxAndComplianceData} />
    </div>
  );
};

export default TaxAndCompliancePage; 
import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import workshopData from "@/data/workshop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Workshops - CSPI Consultants",
  description: "Professional financial training workshops covering essential knowledge and skills to help your team make better business decisions.",
  // other metadata
};

const WorkshopPage = () => {
  return (
    <div className="pt-40 pb-20">
      <ServicePageTemplate serviceData={workshopData} />
    </div>
  );
};

export default WorkshopPage; 
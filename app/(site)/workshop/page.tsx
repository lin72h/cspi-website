"use client";
import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import workshopData from "@/data/workshop";

const WorkshopPage = () => {
  return (
    <div className="pt-40 pb-20">
      <ServicePageTemplate serviceData={workshopData} />
    </div>
  );
};

export default WorkshopPage; 
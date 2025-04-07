"use client";
import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import consultingServicesData from "@/data/consulting-services";

const ConsultingServicesPage = () => {
  return (
    <div className="pt-40 pb-20">
      <ServicePageTemplate serviceData={consultingServicesData} />
    </div>
  );
};

export default ConsultingServicesPage; 
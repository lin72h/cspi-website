import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import consultingServicesData from "@/data/consulting-services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services - CSPI Consultants",
  description: "Expert consulting services to help organize your business operations through optimal structures. Strategic guidance from experienced chartered accountants.",
  // other metadata
};

const ConsultingServicesPage = () => {
  return (
    <div className="pt-40 pb-20">
      <ServicePageTemplate serviceData={consultingServicesData} />
    </div>
  );
};

export default ConsultingServicesPage; 
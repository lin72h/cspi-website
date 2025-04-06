"use client";
import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceBenefits from "./ServiceBenefits";
import ServiceProcess from "./ServiceProcess";
import ServiceFAQ from "./ServiceFAQ";
import ServiceCTA from "./ServiceCTA";
import { ServicePageData } from "@/types/servicePageData";

const ServicePageTemplate = ({ serviceData }: { serviceData: ServicePageData }) => {
  return (
    <div className="overflow-hidden">
      <ServiceHero 
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        description={serviceData.heroDescription}
        image={serviceData.heroImage}
        imageDark={serviceData.heroImageDark}
      />
      
      <ServiceBenefits 
        title={serviceData.benefitsTitle}
        description={serviceData.benefitsDescription}
        benefits={serviceData.benefits}
      />
      
      <ServiceProcess 
        title={serviceData.processTitle}
        description={serviceData.processDescription}
        steps={serviceData.processSteps}
      />
      
      <ServiceFAQ 
        title={serviceData.faqTitle}
        description={serviceData.faqDescription}
        faqs={serviceData.faqs}
      />
      
      <ServiceCTA 
        title={serviceData.ctaTitle}
        description={serviceData.ctaDescription}
        buttonText={serviceData.ctaButtonText}
        buttonUrl={serviceData.ctaButtonUrl}
      />
    </div>
  );
};

export default ServicePageTemplate; 
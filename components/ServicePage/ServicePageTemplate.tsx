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
        titleZh={serviceData.titleZh}
        subtitle={serviceData.subtitle}
        subtitleZh={serviceData.subtitleZh}
        description={serviceData.heroDescription}
        heroDescriptionZh={serviceData.heroDescriptionZh}
        image={serviceData.heroImage}
        imageDark={serviceData.heroImageDark}
      />
      
      <ServiceBenefits 
        title={serviceData.benefitsTitle}
        titleZh={serviceData.benefitsTitleZh}
        description={serviceData.benefitsDescription}
        descriptionZh={serviceData.benefitsDescriptionZh}
        benefits={serviceData.benefits}
      />
      
      <ServiceProcess 
        title={serviceData.processTitle}
        titleZh={serviceData.processTitleZh}
        description={serviceData.processDescription}
        descriptionZh={serviceData.processDescriptionZh}
        steps={serviceData.processSteps}
      />
      
      <ServiceFAQ 
        title={serviceData.faqTitle}
        titleZh={serviceData.faqTitleZh}
        description={serviceData.faqDescription}
        descriptionZh={serviceData.faqDescriptionZh}
        faqs={serviceData.faqs}
      />
      
      <ServiceCTA 
        title={serviceData.ctaTitle}
        titleZh={serviceData.ctaTitleZh}
        description={serviceData.ctaDescription}
        descriptionZh={serviceData.ctaDescriptionZh}
        buttonText={serviceData.ctaButtonText}
        buttonTextZh={serviceData.ctaButtonTextZh}
        buttonUrl={serviceData.ctaButtonUrl}
      />
    </div>
  );
};

export default ServicePageTemplate; 
import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import budgetingCashflowsData from "@/data/budgeting-cashflows";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budgeting & Cashflows Services - CSPI Consultants",
  description: "Strategic budgeting and cashflow management services to improve your business financial health and help you achieve your growth goals.",
  // other metadata
};

const BudgetingCashflowsPage = () => {
  return (
    <div className="pt-40 pb-20">
      <ServicePageTemplate serviceData={budgetingCashflowsData} />
    </div>
  );
};

export default BudgetingCashflowsPage; 
"use client";
import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import budgetingCashflowsData from "@/data/budgeting-cashflows";

const BudgetingCashflowsPage = () => {
  return (
    <div className="pt-40 pb-20">
      <ServicePageTemplate serviceData={budgetingCashflowsData} />
    </div>
  );
};

export default BudgetingCashflowsPage; 
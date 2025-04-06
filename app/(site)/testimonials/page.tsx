import React from "react";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials - CSPI Consultants",
  description: "See what our clients say about our accounting and financial services",
  // other metadata
};

const TestimonialsPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Testimonial />
    </div>
  );
};

export default TestimonialsPage; 
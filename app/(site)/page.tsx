"use client";

import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Brands />
      <About />
      <FeaturesTab />
      <FunFact />
      <CTA />
    </main>
  );
}

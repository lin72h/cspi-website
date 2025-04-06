"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { MotionDiv } from "@/app/libs/framer-utls";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `INDUSTRIES`,
              subtitle: `Specialized Expertise Across Business Sectors`,
              description: `Our team brings deep industry knowledge to each client relationship. We understand the specific challenges and opportunities in various business sectors across New Zealand.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Retail & E-commerce</h3>
                <p>We help retail businesses with inventory management, cash flow optimization, and GST compliance, whether you operate physical stores or online platforms.</p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Professional Services</h3>
                <p>For consultants, lawyers, architects and other service providers, we focus on efficient business structures, partnership arrangements, and sustainable growth strategies.</p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Property & Real Estate</h3>
                <p>We provide specialized tax advice for property developers, investors, and managers, navigating complex depreciation rules and maximizing legitimate deductions.</p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Hospitality & Tourism</h3>
                <p>Our experience with cafes, restaurants, and accommodations includes revenue management, seasonal planning, and clear financial reporting systems.</p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Construction & Trades</h3>
                <p>We support contractors and construction businesses with job costing, project accounting, and cash flow management designed for project-based work.</p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Startups & Technology</h3>
                <p>For innovative businesses and startups, we provide guidance on capital raising, R&D incentives, and scalable financial structures to support growth phases.</p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;

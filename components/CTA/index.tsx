"use client";
import { MotionDiv } from "@/app/libs/framer-utls";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                Schedule Your Free Initial Consultation Today
              </h2>
              <p className="mb-4">
                Take the first step toward financial clarity and business success. Our team of experienced accountants is ready to understand your unique needs and develop a tailored strategy for your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/testimonials" className="text-cspi hover:underline">View Client Testimonials</Link>
                <span className="px-2">•</span>
                <Link href="/pricing" className="text-cspi hover:underline">Explore Service Packages</Link>
                <span className="px-2">•</span>
                <Link href="/faq" className="text-cspi hover:underline">Common Questions</Link>
              </div>
            </MotionDiv>
            <MotionDiv
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2.5 rounded-full bg-cspi px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-cspi dark:text-white"
                >
                  Book a Consultation
                  <span className="pl-2.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4766 6.16664L6.00664 1.69664L7.18498 0.518311L13.6666 6.99998L7.18498 13.4816L6.00664 12.3033L10.4766 7.83331H0.333313V6.16664H10.4766Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;

"use client";

import Image from "next/image";
import { MotionDiv } from "@/app/libs/framer-utls";
import { useLanguage } from "@/app/context/LanguageContext";

const About = () => {
  const { language, t } = useLanguage();

  const renderDescription = () => {
    if (language === "zh") {
      const items = t("commitmentDescription", "about").split("\n");
      return (
        <>
          {items.map((item, index) => (
            <p key={index} className={index > 0 ? "mt-3" : ""}>
              {item}
            </p>
          ))}
        </>
      );
    }
    
    return (
      <p>
        {t("commitmentDescription", "about")}
      </p>
    );
  };

  return (
    <>
      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                {t("commitmentTitle", "about")}
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {language === "en" ? (
                  <>
                    Building Financial
                    <span className="relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                      Clarity
                    </span>
                  </>
                ) : (
                  t("commitmentSubtitle", "about")
                )}
              </h2>
              <div className="mb-6">
                {renderDescription()}
              </div>
              <div>
                <a
                  href="/support"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    {language === "en" ? "Contact Us" : "联系我们"}
                  </span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About CSPI Services"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About CSPI Services"
                className="hidden dark:block"
                fill
              />
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;

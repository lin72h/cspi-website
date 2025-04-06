import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-12 pt-25 md:pt-30 xl:pb-16 xl:pt-36">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 xl:gap-12">
            <div className="md:w-1/2 lg:w-2/5">
              <h4 className="mb-3 text-lg font-medium text-black dark:text-white">
                ✓ Professional Chartered Accountants
              </h4>
              <h1 className="mb-4 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Empowering Your
                <span className="relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Financial Success
                </span>
              </h1>
              <p className="mb-3">
                CSPI Consultants is a boutique firm of Chartered Accountants with over three decades of New Zealand based experience.
              </p>
              <p>
                We help small to medium businesses minimize tax burdens, ensure compliance, and develop strategic financial plans for sustainable growth. Experience personalized service from our convenient central Auckland location.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href={"/support"}
                  aria-label="contact us button"
                  className="inline-block rounded-full bg-cspi px-7 py-2.5 text-white duration-300 ease-in-out hover:bg-cspiHover dark:bg-cspi dark:hover:bg-cspiHover"
                >
                  Contact Us
                </Link>
                <Link
                  href={"/pricing"}
                  aria-label="services button"
                  className="inline-block rounded-full border border-cspi px-7 py-2.5 text-cspi duration-300 ease-in-out hover:bg-cspi hover:text-white dark:border-cspi dark:text-white dark:hover:bg-cspi"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="hidden md:w-1/2 lg:block lg:w-3/5">
              <div className="relative 2xl:-mr-5">
                <div className="relative w-full h-[380px]">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.jpeg"
                    alt="Hero"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    priority
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

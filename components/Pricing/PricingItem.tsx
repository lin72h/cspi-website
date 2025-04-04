"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { integrations, messages } from "@/integration.config";
import { toast } from "react-hot-toast";
import { MotionDiv } from "@/app/libs/framer-utls";

export const PricingItem = ({ price }: { price: any }) => {
  // POST request
  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    if (integrations?.isStripeEnabled) {
      const { data } = await axios.post(
        "/api/payment",
        {
          priceId: price.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      window.location.assign(data);
    } else {
      toast.error(messages.stripe);
    }
  };

  return (
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
      className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5"
    >
      {price.nickname === "Medium" && (
        <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
          popular
        </div>
      )}

      <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
        ${" "}
        {(price.unit_amount / 100).toLocaleString("en-US", {
          currency: "USD",
        })}
        <span className="text-regular text-waterloo dark:text-manatee">
          /month
        </span>
        {/* {price.id} */}
      </h3>
      <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
        {price.nickname} Pack
      </h4>
      <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

      <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
        {price.nickname === "Small" && (
          <ul>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee">
              300 GB Storage
            </li>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee">
              Unlimited Photos and Videos
            </li>
            <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
              Exclusive Support
            </li>
            <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
              Custom Branding Strategy
            </li>
          </ul>
        )}
        {price.nickname === "Medium" && (
          <ul>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee">
              300 GB Storage
            </li>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee">
              Unlimited Photos and Videos
            </li>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee">
              Exclusive Support
            </li>
            <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
              Custom Branding Strategy
            </li>
          </ul>
        )}
        {price.nickname === "Large" && (
          <ul>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee">
              300 GB Storage
            </li>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee">
              Unlimited Photos and Videos
            </li>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee ">
              Exclusive Support
            </li>
            <li className="mb-4 text-black last:mb-0 dark:text-manatee ">
              Custom Branding Strategy
            </li>
          </ul>
        )}
      </div>

      <button
        aria-label="purchase this plan"
        onClick={handleSubscription}
        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
      >
        <span className="duration-300 group-hover/btn:pr-2"> Get the Plan</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </MotionDiv>
  );
};

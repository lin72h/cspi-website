"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-gray-400 py-16 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-3 lg:gap-20">
            {brandData.map((brand, key) => (
              <SingleBrand 
                brand={brand} 
                key={key} 
                className={key === 0 ? "h-32 w-[300px]" : ""}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;

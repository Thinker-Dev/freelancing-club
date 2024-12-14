"use client";

import React from "react";
import BreadCrumb from "../bread-crumb";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { events } from "@/lib/constants";
import { Separator } from "../ui/separator";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 140,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselC = () => {
  return (
    <section className="pt-10 space-y-10">
      <div className="px-10">
        <BreadCrumb title="Recent events" subtitle="ASDFGHJKL" />
      </div>
      <Carousel responsive={responsive} partialVisible={true}>
        {events.map((item, index) => (
          <div
            key={index}
            className={`mr-10 space-y-5 ${index === 0 && "pl-10"}`}
          >
            <div className="border p-4 rounded-xl h-64"></div>
            <div className="flex items-center space-x-3 pl-3">
              <Separator className="bg-white w-7" />
              <span className="font-normal text-lg uppercase">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselC;

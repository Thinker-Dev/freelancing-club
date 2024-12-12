"use client";

import React from "react";
import BreadCrumb from "../common/bread-crumb";
import "react-multi-carousel/lib/styles.css";
import { events } from "@/lib/constants";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

const RecentEvents = () => {
  return (
    <section className="py-10 px-16 max-sm:px-10 max-md:mt-10">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <BreadCrumb title="" subtitle="Recent events" />
        <div className="space-y-12">
          {events.map((item, index) => (
            <div
              key={index}
              className={`md:space-x-10 md:flex ${
                index === 1 && "md:flex-row-reverse md:space-x-reverse"
              }`}
            >
              <div
                className="border p-4 rounded-xl h-64 w-[40%] max-md-xs:w-[50%] max-md:w-full"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: " top",
                    }}
                  />
                )}
              </div>
              <div className="w-[60%] max-md:w-full pt-7 space-y-3">
                <div className="flex items-center space-x-3 pl-3 ">
                  <Separator className="bg-white w-7" />
                  <span className="font-normal text-lg uppercase">
                    {item.title}
                  </span>
                </div>
                <div className="font-light">{item.paragraph}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RecentEvents;

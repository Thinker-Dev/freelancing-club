"use client";

import React from "react";
import "react-multi-carousel/lib/styles.css";
import { events } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import Tag from "@/components/tag";

const RecentEvents = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute bg-section-200 right-0 top-0 w-full h-[500px] -skew-y-6"></div>
      <div className="pb-20 mt-36  px-28 container bg-section-200">
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
          className="relative"
        >
          <div className="space-y-5 mb-20 flex items-center justify-center">
            <h1 className="text-5xl font-extrabold">Recent Events</h1>
          </div>
          <div
            className="space-y-32
          "
          >
            {events.map((item, index) => (
              <div
                key={index}
                className={`md:space-x-24 md:flex ${
                  index === 1 && "md:flex-row-reverse md:space-x-reverse"
                }`}
              >
                <div className="w-[55%] max-md-xs:w-[50%] max-md:w-full bg-section-300 rounded-2xl">
                  <div
                    className="rounded-2xl h-72 translate-x-[20px] translate-y-[-20px]"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {item.img && (
                      <Image
                        src={item.img}
                        alt={item.title}
                        className="rounded-2xl "
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: " top",
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="w-[45%] max-md:w-full space-y-3">
                  <div className="flex items-center space-x-3">
                    <h1 className="font-semibold text-xl">{item.title}</h1>
                  </div>
                  <div className="text-white/50">{item.paragraph}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentEvents;

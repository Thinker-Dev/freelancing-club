"use client";

import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import upcoming_event from "./../../lib/img/upcoming events/flames2.png";
import Tag from "../tag";

const UpcomingEvents = () => {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="flex pt-28 pb-20 lg:px-28 lg-md:justify-between max-lg-md:space-x-16 max-md:space-x-0 max-md:space-y-16 w-full max-md:flex-col container sm:items-center md:items-start"
        initial={{ filter: "blur(10px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <div className="sm:bg-section-200 rounded-2xl sm:w-[400px] sm:h-[500px]">
          <div
            className="w-[400px] max-sm:w-full h-[500px] md:translate-x-[20px] md:translate-y-[-20px]"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {upcoming_event && (
              <Image
                src={upcoming_event}
                alt={"flames"}
                fill
                className="rounded-2xl"
                style={{
                  objectFit: "cover",
                  objectPosition: " top",
                }}
              />
            )}
          </div>
        </div>

        <div className="w-[50%] max-md:w-full space-y-7 max-md:flex-col max-md:items-center max-md:text-center">
          <div className="space-y-5 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
            <Tag
              name="Upcoming Events"
              className="bg-gradient-to-r from-[#333139] to-section-200"
            />
            <h1 className="text-5xl font-extrabold max-md:text-4xl">
              Flames 2.0
            </h1>
          </div>
          <p className="text-white/50">
            The Flames 2.0 is an upcoming event being organized by the Data
            Science Club. It will be led by two distinguished speakers. Mr Akash
            Raj, founder of CloudyML, who will discuss the career paths and
            roadmap in the Data Science industry. The second session will be led
            by Major Sushant Singh, an army veteran and ex- special forces, who
            will give his insights about the importance of Data Science in the
            national security and defense field. Through these interactive
            sessions, participants will deepen their understanding in these
            fields and will explore more in the vast world of Data Science.
          </p>
          <div className="max-md:justify-center flex">
            <Link href={"https://forms.gle/1VbTdek8s5hQLE8T6"} target="_blank">
              <Button>Register now</Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="absolute bg-section-200 bottom-0 w-full h-[100px] -skew-y-6 translate-y-[100px]"></div>
    </section>
  );
};

export default UpcomingEvents;

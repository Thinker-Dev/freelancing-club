"use client";

import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import upcoming_event from "./../../lib/img/upcoming events/flames2.png";

const UpcomingEvents = () => {
  return (
    <section className="flex mt-10 md:h-screen items-center">
      <motion.div
        className="flex px-16 max-sm:px-10 lg-md:justify-between max-lg-md:space-x-16 max-md:space-x-0 max-md:space-y-5  w-full max-md:flex-col"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <div
          className="w-[35%] max-md:w-full max-lg-md:w-[40%]  md:h-[70vh] h-[400px] "
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
              className="rounded-xl"
              style={{
                objectFit: "cover",
                objectPosition: " top",
              }}
            />
          )}
        </div>
        <div className="w-[50%] max-md:w-full space-y-4">
          <div className="flex items-center space-x-3 max-md:hidden">
            <Separator className="bg-white w-7" />
            <span className="font-normal text-2xl max-lg:text-xl ">
              Upcoming Events
            </span>
          </div>
          <h1 className="text-7xl max-lg:text-5xl font-medium bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent max-md:text-center">
            Flames 2.0
          </h1>
          <p className="max-xs:text-justify font-light">
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
          {/* <p className="max-xs:text-justify font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p> */}
          <div className="max-md:justify-center flex">
            <Link href={"https://forms.gle/1VbTdek8s5hQLE8T6"} target="_blank">
              <Button asChild>
                <div className="space-x-2">
                  <span>Register now</span>
                  <div className="w-2 h-2 rounded-full bg-[#5D00F4]" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UpcomingEvents;

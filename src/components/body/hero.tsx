import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Tag from "../common/tag";

export default function Hero() {
  return (
    <div className="h-screen pt-24">
      <motion.section
        // initial={{ filter: "blur(10px)" }}
        // animate={{ filter: "blur(0px)" }}
        // transition={{
        //   ease: "easeInOut",
        //   duration: 0.3,
        // }}
        className="container pt-7 mb-20"
      >
        <div className="bg-section-100 w-full md:min-h-[500px] rounded-3xl relative items-center justify-center flex max-px-lg px-20 max-lg:px-8 max-md:flex-col overflow-hidden shadow-lg max-md:py-8">
          <div className="absolute bg-section-200 right-0 top-0 w-[55%] h-full -skew-x-[30deg] translate-x-[200px]"></div>
          <div className="relative md:w-1/2 space-y-7 flex flex-col md:pr-10 max-md:text-center max-md:items-center max-md:pb-16">
            <Tag name="Welcome" />
            <h1 className="text-5xl max-md:text-4xl font-extrabold">
              Let&apos;s make your product a success
            </h1>
            <p className="text-white/50">
              We are a team of experienced product designers and developers who
              are passionate about creating beautiful and functional products.
            </p>
          </div>

          <div className="relative md:w-1/2">
            <img
              src={"/hero-home.webp"}
              alt="hero"
              className="rounded-2xl w-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

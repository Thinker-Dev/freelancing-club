"use client";

import { socials } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      id="footer"
      className="p-10 space-y-7 max-sm-xs:space-y-3 max-sm-xs:p-5"
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {/* <div className="footer p-10 max-sm-xs:p-5 rounded-3xl mx-6 flex justify-between relative max-sm-xs:flex-col ">
        <div className="font-bold absolute left-4 text-[#ffffff0a] -top-[22px] right-0 text-[220px] leading-none max-xl:hidden ">
          DSC CLUB
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent w-52">
          Let&apos;s create something great together.
        </h1>
        <div className="flex sm-xs:justify-center sm-xs:items-center flex-col space-y-2 max-sm-xs:mt-10">
          <div className="uppercase text-lg font-medium">send us an email</div>
          <Separator className="bg-white w-52" />
          <div className="text-lg font-medium">dsc.vitb@vitbhopal.ac.in</div>
        </div>
      </div> */}
      <div className="sm:hidden space-x-3 flex justify-center">
        {socials.map((social, index) => (
          <Link href={social.path} key={index}>
            <span className="font-semibold text-lg max-sm:text-sm">
              {social.title}
            </span>
          </Link>
        ))}
      </div>
      <div className="justify-between items-center flex">
        <Link href={"/"} className="max-sm:w-[90px]">
          <Image alt="logo" src={"/logo.png"} width={170} height={170} />
        </Link>
        <div className="space-x-3 max-sm:hidden">
          {socials.map((social, index) => (
            <Link href={social.path} key={index} target="_blank">
              <span className="font-semibold text-lg">{social.title}</span>
            </Link>
          ))}
        </div>
        <div className="font-normal text-sm max-sm:text-xs text-center">
          <div>Created by Web Team</div>
          <div>© 2025 Freelancing Club - VIT Bhopal</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;

"use client";

import { socials } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../components/ui/separator";
import { useRouter } from "next/navigation";
import AnimatedBackground from "../components/animatedBackground";
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();
  return (
    <motion.footer
      id="footer"
      className="p-10 pb-16 space-y-20 max-sm-xs:space-y-3 max-sm-xs:p-5 container"
      initial={{ filter: "blur(10px)", opacity: 0 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <div className="p-14 max-sm-xs:p-5 rounded-3xl flex justify-between relative max-sm-xs:flex-col bg-section-100 overflow-hidden shadow-lg">
        <div className="absolute bg-section-200 right-0 top-0 w-[50%] h-full -skew-x-[55deg] translate-x-[150px]"></div>
        <h1 className="text-4xl font-extrabold">
          Let&apos;s create something <br /> great together.
        </h1>
        <div className="flex sm-xs:justify-center sm-xs:items-center flex-col space-y-2 max-sm-xs:mt-10 relative">
          <div className="uppercase text-lg font-medium">send us an email</div>
          <Separator className="bg-white w-52" />
          <div className="text-lg font-medium">dsc.vitb@vitbhopal.ac.in</div>
        </div>
      </div>
      <div className="sm-xs:hidden space-x-3 flex justify-center">
        {socials.map((social, index) => (
          <Link href={social.path} key={index}>
            <span className="font-medium text-lg max-sm-xs:text-sm">
              {social.title}
            </span>
          </Link>
        ))}
      </div>
      <div className="justify-between items-center flex">
        <Link href={"/"} className="max-sm-xs:w-[90px]">
          <Image alt="logo" src={"/logo.webp"} width={170} height={170} />
        </Link>
        <nav className="flex space-x-2 px-6 py-3">
          <AnimatedBackground
            defaultValue={socials[0].title}
            className="rounded-full bg-zinc-100 dark:bg-section-100	"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {socials.map((tab, index) => (
              <button
                key={index}
                data-id={tab}
                onClick={() => router.push(tab.path)}
                type="button"
                className="px-3 py-1.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                <span className="font-normal">{tab.title}</span>
              </button>
            ))}
          </AnimatedBackground>
        </nav>
        <div className="font-normal text-sm max-sm-xs:text-xs text-center">
          <div>Created by Web Team | DSC VITB</div>
          <div>© 2024 DSC Club - VIT Bhopal</div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

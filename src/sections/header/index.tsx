"use client";

import { nav } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Menu from "./menu";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animatedBackground";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
  const router = useRouter();
  return (
    <motion.header
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-10 max-md:px-6 max-sm-xs:px-5 justify-between flex items-center h-[80px] text-sm font-medium">
        <Link href={"/"}>
          <img alt="logo" src={"/logo.webp"} width={170} height={170} />
        </Link>
        <nav className="flex space-x-5 px-6 py-3 max-lg:hidden">
          <AnimatedBackground
            defaultValue={nav[0].title}
            className="rounded-full bg-zinc-100 dark:bg-section-100	"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {nav.map((tab, index) => (
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
        <div className="max-lg:hidden ">
          <Link href={"#"}>
            <Button>Register now</Button>
          </Link>
        </div>
        <Menu />
      </div>
    </motion.header>
  );
};

export default Header;

"use client";

import { nav } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Menu from "./menu";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="sticky z-50 left-0 right-0 top-0"
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.4,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-10 max-md:px-6 max-sm-xs:px-5 justify-between flex items-center h-[80px] text-sm font-medium">
        <Link href={"/"}>
          <Image alt="logo" src={"/logo.webp"} width={170} height={170} />
        </Link>
        <nav className="flex space-x-5 border px-6 py-3 rounded-full backdrop-blur max-lg:hidden">
          {nav.map((item, index) => (
            <Link href={item.path} key={index} className="flex items-center">
              <span className="font-normal">{item.title}</span>
            </Link>
          ))}
        </nav>
        <div className="max-lg:hidden lg:w-52">
          {/* <Link href={"#"}>
            <Button variant={"ghost"}>Log in</Button>
          </Link>
          <Link href={"#"}>
            <Button>Sign up</Button>
          </Link>
          </Link> */}
        </div>
        <Menu />
      </div>
    </motion.header>
  );
};

export default Header;

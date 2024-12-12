"use client";

import { nav } from "@/lib/constants";
import { Layers, X } from "lucide-react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const Menu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="lg:hidden">
      <div>
        <Layers className="cursor-pointer" onClick={navbarToggleHandler} />
      </div>
      <nav
        id="navbarCollapse"
        className={`absolute flex justify-center left-0 right-0 h-[100vh] -mt-[80px] z-30 w-full backdrop-blur py-4 duration-300  lg:w-auto lg:opacity-0  ${
          navbarOpen
            ? "visibility top-full opacity-100"
            : "invisible top-[120%] opacity-0"
        }`}
      >
        <div className="space-y-10">
          <div className="flex justify-end  mt-3">
            <X className="cursor-pointer" onClick={navbarToggleHandler} />
          </div>
          <ul className="block lg:opacity-0 w-[300px] ">
            {nav.map((item, index) => (
              <Fragment key={index}>
                <Link
                  href={item.path}
                  key={index}
                  className="flex items-center my-3"
                >
                  <span className="font-normal text-sm">{item.title}</span>
                </Link>
                <Separator />
              </Fragment>
            ))}
            {/* <div className="mt-10 flex justify-center">
              <Link href={"#"}>
                <Button variant={"ghost"}>Log in</Button>
              </Link>
              <Link href={"#"}>
                <Button>Sign up</Button>
              </Link>
            </div> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

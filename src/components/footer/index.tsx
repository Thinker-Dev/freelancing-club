import React from "react";
import { footer } from "./footer";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950">
      <div className="mx-auto px-4 max-w-7xl py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/3">
            <Image
              src={"/logo.png"}
              className={`transition-all duration-300 `}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {footer.map((section, index) => (
                <div key={index} className="flex flex-col">
                  <h2 className="text-white text-lg font-bold mb-2">
                    {section.name}
                  </h2>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.link}
                          className="text-white text-sm hover:underline transition-all"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

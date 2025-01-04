import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { nav } from "@/lib/constants";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Image
            src={"/logo.png"}
            className={`transition-all duration-300 ${
              isScrolled ? "w-14" : ""
            }`}
            alt="logo"
            width={100}
            height={100}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {nav.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="text-white hover:text-primary transition-colors"
              >
                <span>{item.title}</span>
              </Link>
            ))}
            {/* <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Client Portal
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4">
            <div className="flex flex-col items-center space-y-4">
              {nav.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className="text-white hover:text-primary transition-colors"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
              {/* <button className="bg-primary px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                Get Tickets
              </button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-white hover:text-purple-300 transition-colors"
    >
      {children}
    </a>
  );
}

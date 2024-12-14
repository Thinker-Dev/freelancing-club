"use client";

import React from "react";
import BreadCrumb from "../bread-crumb";
import Image from "next/image";
import RandomGrid from "../random-grid";
import GalleryGrid from "../random-grid";

const Gallery = () => {
  return (
    <section className="py-10 px-16 relative">
      <Image
        alt="tree"
        src={"/three.webp"}
        width={380}
        height={380}
        className="absolute -top-[80px] right-36 -z-10 opacity-45"
      />
      <div>
        <BreadCrumb title="Gallery" subtitle="ASDFGHJKL" />
        <GalleryGrid />
      </div>
    </section>
  );
};

export default Gallery;

import Image from "next/image";
import React from "react";

export default function Event({ item, index }: { item: any; index: number }) {
  return (
    <div
      className={`md:space-x-10 md:flex ${
        index === 1 && "md:flex-row-reverse md:space-x-reverse relative"
      }`}
    >
      <div
        className="p-4 h-[400px] rounded-2xl w-[80%] max-md-xs:w-[50%] max-md:w-full shadow-lg"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {item.img && (
          <Image
            src={item.img}
            alt={item.title}
            fill
            style={{
              objectFit: "cover",
              objectPosition: " top",
            }}
          />
        )}
      </div>
      <div className="w-[40%] max-md:w-full space-y-3 h-fit bg-section-100 p-8 rounded-xl shadow-lg absolute right-0 bottom-0">
        <div className="flex items-center space-x-3">
          <h1 className="font-semibold text-lg ">{item.title}</h1>
        </div>
        <div className="text-white/50 text-sm">{item.paragraph}</div>
      </div>
    </div>
  );
}

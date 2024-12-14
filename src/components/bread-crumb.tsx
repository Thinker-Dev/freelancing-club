import React from "react";
import { Separator } from "./ui/separator";

interface Props {
  title: string;
  subtitle: string;
}

const BreadCrumb = ({ title, subtitle }: Props) => {
  return (
    <section className="space-y-4 mb-10 px-5 md:pt-16">
      <div className="flex items-center space-x-3">
        <Separator className="bg-white w-7" />
        <span className="font-normal text-2xl uppercase max-md:text-xl max-xs:text-lg">
          {subtitle}
        </span>
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent uppercase max-md:text-4xl max-xs:text-3xl">
        {title}
      </h1>
    </section>
  );
};

export default BreadCrumb;

import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

const BreadCrumb = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default BreadCrumb;

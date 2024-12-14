import React from "react";
import { Separator } from "../ui/separator";
import Image, { StaticImageData } from "next/image";

export interface Team {
  img: StaticImageData;
  position: string;
  name: string;
  exec?: boolean;
  objectPosition?: string;
  objectEffect?: "fill" | "contain" | "cover" | "none" | "scale-down";
  scale?: number;
  translateY?: number;
  translateX?: number;
}
interface Props {
  person: Team;
}

const TeamCard = ({ person }: Props) => {
  const scaleValue = person.scale || 1;
  const translateYValue = person.translateY || 0;
  const translateXValue = person.translateX || 0;
  return (
    <div className="space-y-6">
      <div className="bg-section-100 h-60 rounded-2xl hover:shadow-lg transition-all duration-300">
        <div
          className="h-60 rounded-2xl hover:translate-y-[-20px]  hover:translate-x-[20px] transition-all duration-300"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={person.img}
            alt={person.name}
            fill
            style={{
              objectFit: person.objectEffect || "cover",
              objectPosition: person.objectPosition || "center top",
            }}
            className="rounded-2xl hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-lg leading-none font-semibold">{person.name}</h1>
        <div className="flex items-center space-x-3 ">
          <span className="text-white/50 text-sm">{person.position}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

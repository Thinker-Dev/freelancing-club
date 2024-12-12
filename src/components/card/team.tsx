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
    <div className="space-y-2">
      <div
        className="bg-[#D9D9D9] h-60 rounded-tl-3xl rounded-br-3xl"
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
            transform: `scale(${scaleValue}) translate(${translateXValue}%, ${translateYValue}%)`,
          }}
        />
      </div>
      <div className="flex items-center space-x-3 ">
        <Separator className="bg-white w-7 h-[0.5px] ml-2" />
        <span className="font-light text-base">{person.position}</span>
      </div>
      <h1 className="text-2xl leading-none font-bold bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent uppercase ml-2">
        {person.name}
      </h1>
    </div>
  );
};

export default TeamCard;

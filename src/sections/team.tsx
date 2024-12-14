"use client";

import React from "react";
import BreadCrumb from "../components/bread-crumb";
import "react-multi-carousel/lib/styles.css";
import { team } from "@/lib/constants";
import TeamCard from "../components/card/team";
import { motion } from "framer-motion";
import Tag from "../components/tag";

const Team = () => {
  const execTeam = team.filter((person) => person.exec);
  const colabteam = team.filter((person) => !person.exec);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute bg-section-200 top-0 w-full h-[100px] skew-y-6 -translate-y-[100px]"></div>
      <div className="absolute bg-section-200 top-0 w-full h-[100px] skew-y-6"></div>
      <div className=" container">
        <div className="relative pb-28  mt-36 ">
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <div className="space-y-5  mb-20">
              <Tag
                name="Freelancing Club"
                className="bg-gradient-to-r from-[#333139] to-section-200"
              />
              <h1 className="text-5xl font-extrabold">Meet The Team</h1>
            </div>
            <div className="mb-20 space-y-8 max-md-xs:hidden">
              <div className="grid grid-cols-3 max-md-xs:grid-cols-2 gap-x-12">
                <div className="mt-40">
                  <TeamCard person={execTeam[1]} />
                </div>
                <TeamCard person={execTeam[0]} />
                <div className="mt-40">
                  <TeamCard person={execTeam[2]} />
                </div>
              </div>
            </div>
            <div className="max-md-xs:hidden grid grid-cols-3 gap-x-12 gap-y-8 max-md-xs:grid-cols-2 max-sm:grid-cols-1">
              {colabteam.map((person, index) => (
                <TeamCard person={person} key={index} />
              ))}
            </div>
            <div className="md-xs:hidden grid grid-cols-3 gap-x-12 gap-y-8 max-md-xs:grid-cols-2 max-sm:grid-cols-1">
              {team.map((person, index) => (
                <TeamCard person={person} key={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;

"use client";

import React from "react";
import BreadCrumb from "../common/bread-crumb";
import "react-multi-carousel/lib/styles.css";
import { team } from "@/lib/constants";
import TeamCard from "../card/team";
import { motion } from "framer-motion";

const Team = () => {
  const execTeam = team.filter((person) => person.exec);
  const colabteam = team.filter((person) => !person.exec);

  return (
    <section className="py-10 px-16 max-sm:px-10">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <BreadCrumb title="meet the team" subtitle="dcs club" />
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
          <div className="grid grid-cols-2 gap-x-12 px-[200px] max-lg:px-[150px]">
            <TeamCard person={execTeam[3]} />
            <TeamCard person={execTeam[4]} />
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
    </section>
  );
};

export default Team;

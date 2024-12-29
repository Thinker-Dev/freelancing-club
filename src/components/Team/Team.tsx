import React from "react";
import { TeamMemberCard } from "./TeamMemberCard";
import { teamMembers } from "./teamData";
import BreadCrumb from "../common/bread-crumb";

export function Team() {
  return (
    <section
      id="team"
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb
          title="Our Team"
          subtitle=" Meet the passionate individuals dedicated to helping freelancers thrive in their careers."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

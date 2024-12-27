import React from "react";
import { TeamMember } from "./types";
import { SocialLinks } from "./SocialLinks";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4">
            <SocialLinks links={member.socialLinks} />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
      <p className="text-primary mb-2">{member.role}</p>
      <p className="text-gray-400">{member.bio}</p>
    </div>
  );
}

import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface SocialLinksProps {
  links: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex space-x-3">
      {links.linkedin && (
        <a href={links.linkedin} className="text-gray-400 hover:text-indigo-400 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {links.twitter && (
        <a href={links.twitter} className="text-gray-400 hover:text-indigo-400 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
      )}
      {links.github && (
        <a href={links.github} className="text-gray-400 hover:text-indigo-400 transition-colors">
          <Github className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}
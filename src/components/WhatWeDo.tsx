import React from "react";
import { Users2, Lightbulb, Trophy, BookOpen } from "lucide-react";
import BreadCrumb from "./common/bread-crumb";

export function WhatWeDo() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb
          title="What We Do"
          subtitle="We provide comprehensive support and resources to help freelancers thrive in their careers."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Users2,
              title: "Community Building",
              description:
                "Connect with like-minded professionals, share experiences, and build lasting relationships.",
            },
            {
              icon: Lightbulb,
              title: "Skill Development",
              description:
                "Access workshops, webinars, and resources to enhance your professional skills.",
            },
            {
              icon: Trophy,
              title: "Career Growth",
              description:
                "Get guidance on pricing, client management, and business development strategies.",
            },
            {
              icon: BookOpen,
              title: "Resource Library",
              description:
                "Access our curated collection of tools, templates, and guides for freelancers.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-primary/10 transition-shadow border border-gray-700"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

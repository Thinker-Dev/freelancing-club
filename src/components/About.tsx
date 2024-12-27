import React from "react";
import { Target, Shield, Globe } from "lucide-react";
import BreadCrumb from "./common/bread-crumb";

export function About() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb
          title="About Us"
          subtitle="We're a community-driven platform dedicated to empowering freelancers and fostering professional growth."
        />

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To create a thriving ecosystem where freelancers can connect, collaborate, and grow their careers.",
            },
            {
              icon: Shield,
              title: "Our Values",
              description:
                "We believe in transparency, integrity, and supporting each member of our community.",
            },
            {
              icon: Globe,
              title: "Our Impact",
              description:
                "Helping freelancers worldwide achieve their professional goals and build successful careers.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground text-primary mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

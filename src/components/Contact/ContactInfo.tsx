import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <Mail className="w-6 h-6 text-primary mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-white">Email</h3>
          <p className="text-gray-400">freelancingclub@vitbhopal.ac.in</p>
        </div>
      </div>

      <div className="flex items-start">
        <MapPin className="w-6 h-6 text-primary mt-1" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-white">Location</h3>
          <p className="text-gray-400">VIT Bhopal University</p>
        </div>
      </div>
    </div>
  );
}

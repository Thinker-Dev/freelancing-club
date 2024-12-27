import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import BreadCrumb from "../common/bread-crumb";

export function Contact() {
  return (
    <div className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb
          title="Get in Touch"
          subtitle="Have questions or want to learn more? We'd love to hear from you."
        />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send us a Message
            </h3>
            <ContactForm />
          </div>
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

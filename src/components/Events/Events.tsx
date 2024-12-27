import React from "react";
import { EventCard } from "./EventCard";
import { events } from "./eventsData";
import BreadCrumb from "../common/bread-crumb";

export function Events() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb
          title="Upcoming Events"
          subtitle="Join our exclusive events designed to help you grow your freelance career and connect with industry professionals."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

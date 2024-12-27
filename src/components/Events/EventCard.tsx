import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Event } from "./types";

export function EventCard({ event }: { event: Event }) {
  const categoryColors = {
    workshop: "bg-purple-950 text-purple-400",
    networking: "bg-blue-950 text-blue-400",
    conference: "bg-primary-foreground text-primary",
    webinar: "bg-teal-950 text-teal-400",
  };

  return (
    <div
      className={`group relative rounded-xl overflow-hidden bg-gray-800 border border-gray-700 ${
        event.isFeatured ? "md:col-span-2" : ""
      }`}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
            categoryColors[event.category]
          }`}
        >
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </span>
        <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
        <p className="text-gray-300 mb-4">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span>
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

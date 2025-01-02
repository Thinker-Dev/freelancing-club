import React from "react";
import { Users, Heart, MessageCircle, Share2, Award } from "lucide-react";
import BreadCrumb from "../common/bread-crumb";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    content:
      "This community has been instrumental in my growth as a developer. The support and knowledge sharing are incredible!",
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    content:
      "I've found my tribe here! The collaborative spirit and creative discussions have elevated my design thinking.",
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    content:
      "The mentorship opportunities here are unmatched. I've learned more in months than I did in years on my own.",
    likes: 156,
    comments: 28,
  },
];

const CommunitySection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb
          title="Community"
          subtitle="Join a community of passionate developers, share your journey, and grow together in a supportive environment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-md p-6  hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-foreground mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              5,000+ Members
            </h3>
            <p className="text-gray-300 text-center">
              Join a diverse community of developers worldwide
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-md p-6  hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-foreground mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Active Discussions
            </h3>
            <p className="text-gray-300 text-center">
              Engage in meaningful conversations and knowledge sharing
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-md p-6  hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-foreground mx-auto mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Weekly Events
            </h3>
            <p className="text-gray-300 text-center">
              Participate in workshops, hackathons, and meetups
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-b from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent">
            Community Voices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 border border-gray-700 rounded-xl shadow-md p-6  hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>{testimonial.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>{testimonial.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors ml-auto">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

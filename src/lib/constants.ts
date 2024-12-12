import Image, { StaticImageData } from "next/image";

// Recent event images
import flamesImage from "./img/FLAMES.png";
import harmonixImage from "./img/harmonix.png";
import dscNightsImage from "./img/dsc nights.png";

// Images for team members
import pulashya from "./img/Members/PULASHYA.jpg";
import aditi from "./img/Members/ADITI.jpg";
import akshit from "./img/Members/AKSHIT.jpg";
import himanshu from "./img/Members/HIMANSHU.jpg";
import sarthak from "./img/Members/Sarthak.jpeg";
import sharad from "./img/Members/SHARAD.jpg";
import aditiContent from "./img/Members/ADITI Content.jpg";
import vatsal from "./img/Members/VATSAL.jpg";
import pushpendra from "./img/Members/PUSHPENDRA.jpg";
import sivia from "./img/Members/SIVIA.jpeg";
import aditya from "./img/Members/ADITYA.jpg";
import devarsh from "./img/Members/devarsh.jpg";
import abha from "./img/Members/Dr.Abha-Trivedi.jpg";

export const nav: Navigation[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Upcoming Events",
    path: "/upcoming-events",
  },
  {
    title: "Past Events",
    path: "/recent-events",
  },
  // {
  //   title: "Gallery",
  //   path: "/gallery",
  // },
  {
    title: "Registration",
    path: "/upcoming-events",
  },
  {
    title: "Contact",
    path: "#footer",
  },
];

export const socials: Navigation[] = [
  {
    title: "Linkedin",
    path: "https://www.linkedin.com/in/data-science-club-vit-bhopal-5b9b02232",
  },
  {
    title: "Github",
    path: "https://github.com/cdsvitbhopal",
  },
  {
    title: "Instagram",
    path: "https://www.instagram.com/dsc_vitb/",
  },
  {
    title: "Youtube",
    path: "https://www.youtube.com/channel/UC5pB8eW_kDoimQ5s4S7QgeA",
  },
  {
    title: "WhatsApp",
    path: "https://chat.whatsapp.com/G2QcNOVOeosH1OqoeEU74L",
  },
];

export const events = [
  {
    img: flamesImage,
    title: "Flames",
    paragraph:
      "The Data Science Club's FLAMES event featured Mr. Shikhar Goel, CTO of GeeksforGeeks who spoke on the future significance of Data Science in Education Technology. The second session was taken by TEDx speaker Ms. Surbhi Pandey on personal growth and self-optimization. Through these sessions, participants deepened their understanding of both fields, leaving them inspired for further exploration.",
  },
  {
    img: harmonixImage,
    title: "Harmonix",
    paragraph:
      "The first day of the workshop provided practical insights into real-world machine learning challenges and fostered foundational knowledge about Data Science through interactive sessions organized by the Club's Tech team. The second day covered UI and UX basics, led by the Design Team Lead, offering an insightful introduction to Figma and its custom design capabilities.",
  },
  {
    img: dscNightsImage,
    title: "Data Science Nights: A Spark Igniting Passion",
    paragraph:
      "Data Science Nights, hosted by the Data Science Club which took place in online mode by the Technical Team Lead, proved to be a resounding success. The hands-on coding demonstration enhanced understanding, making the complex subject matter accessible to all. A concluding quiz added a competitive edge, rewarding participants for their newfound knowledge. The event undoubtedly fueled enthusiasm for Data Science among the student community.",
  },
];

export interface Team {
  img: StaticImageData;
  position: string;
  name: string;
  exec?: boolean;
  objectPosition?: string;
  objectEffect?: "fill" | "contain" | "cover" | "none" | "scale-down";
  scale?: number;
  translateY?: number;
  translateX?: number;
}

export const team: Team[] = [
  {
    img: abha,
    position: "Faculty Co-ordinator",
    name: "Dr. Abha Trivedi",
    exec: true,
  },
  {
    img: sivia,
    position: "President",
    name: "Sivia Anzal",
    exec: true,
  },
  {
    img: vatsal,
    position: "Vice President",
    name: "Vatsal Baranwal",
    exec: true,
    scale: 1.1,
  },
  {
    img: akshit,
    position: "Secretary",
    name: "Akshit Srivastava",
    exec: true,
  },
  {
    img: devarsh,
    position: "Joint Secretary",
    name: "Devarsh Shah",
    exec: true,
  },
  {
    img: sharad,
    position: "Web Team",
    name: "Sharad Jhadav",
    objectPosition: "top",
    scale: 1.1,
  },
  {
    img: aditya,
    position: "Technical Team",
    name: "Aditya Kharmitkar",
    scale: 1.1,
  },
  {
    img: himanshu,
    position: "Design Team",
    name: "Himanshu",
    objectPosition: "center right",
  },
  {
    img: aditi,
    position: "Social Media Team",
    name: "Aditi Singh",
  },
  {
    img: sarthak,
    position: "Media and photography Team",
    name: "Sarthak",
    objectEffect: "fill",
  },
  {
    img: pushpendra,
    position: "HR Team",
    name: "Pushpendra",
  },
  {
    img: pulashya,
    position: "Event Management Team",
    name: "Pulashya",
  },
  {
    img: aditiContent,
    position: "Content Team",
    name: "Aditi Bathla",
    objectPosition: "top",
    scale: 1,
  },
];

"use client";

import { About } from "@/components/About";
import Hero from "@/components/body/hero";
import { Contact } from "@/components/Contact/Contact";
import { Events } from "@/components/Events/Events";
import Footer from "@/components/footer";
import { Navbar } from "@/components/header";
import { Projects } from "@/components/Projects/Projects";
import { Resources } from "@/components/Resources/Resources";
import { Team } from "@/components/Team/Team";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <Hero />
        {/* <About /> */}
        {/* <WhatWeDo /> */}
        {/* <Projects /> */}
        <Events />
        <Team />
        {/* <Resources /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

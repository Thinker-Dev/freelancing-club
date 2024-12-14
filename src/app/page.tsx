"use client";

import Team from "@/sections/team";
import UpcomingEvents from "@/components/body/upcoming-events";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import { Fragment } from "react";
import RecentEvents from "@/sections/recent-events";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <UpcomingEvents />
      <RecentEvents />
      <Team />
      <Footer />
    </Fragment>
  );
}

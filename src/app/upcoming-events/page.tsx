import Footer from "@/sections/footer";
import UpcomingEvents from "@/components/body/upcoming-events";
import Header from "@/sections/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events | Vit Bhopal",
  description: "Automate Your Work With Muse",
};

export default function UpcomingEventsPage() {
  return (
    <main className="max-xs:overflow-x-hidden max-w-screen-xl mx-auto min-h-screen snap-y snap-mandatory md:h-screen scroll-smooth overflow-y-scroll">
      <Header />
      <UpcomingEvents />
      <Footer />
    </main>
  );
}

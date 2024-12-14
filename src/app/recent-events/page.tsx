import Footer from "@/sections/footer";
import Header from "@/sections/header";
import { Metadata } from "next";
import RecentEvents from "@/sections/recent-events";

export const metadata: Metadata = {
  title: "Recent Events | Vit Bhopal",
  description: "Automate Your Work With Muse",
};

export default function RecentEventsPage() {
  return (
    <main className="max-xs:overflow-x-hidden max-w-screen-xl mx-auto min-h-screen snap-y snap-mandatory md:h-screen scroll-smooth overflow-y-scroll">
      <Header />
      <RecentEvents />
      <Footer />
    </main>
  );
}

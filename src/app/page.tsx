import Footer from "@/components/body/footer";
import Hero from "@/components/body/hero";
import RecentEvents from "@/components/body/recent-events";
import Team from "@/components/body/team";
import UpcomingEvents from "@/components/body/upcoming-events";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="max-xs:overflow-x-hidden max-w-screen-xl mx-auto min-h-screen">
      <Header />
      <Hero />
      <UpcomingEvents />
      <RecentEvents />
      <Team />
      <Footer />
    </main>
  );
}

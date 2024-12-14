import Footer from "@/sections/footer";
import Gallery from "@/components/body/gallery";
import Header from "@/sections/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Vit Bhopal",
  description: "Automate Your Work With Muse",
};

export default function GalleryPage() {
  return (
    <main className="max-xs:overflow-x-hidden max-w-screen-xl mx-auto min-h-screen snap-y snap-mandatory md:h-screen scroll-smooth overflow-y-scroll">
      <Header />
      <Gallery />
      <Footer />
    </main>
  );
}

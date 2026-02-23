import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrewHero } from "@/components/sections/CrewHero";
import { CrewGrid } from "@/components/sections/CrewGrid";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-dark-bg text-white">
      <Header />
      <main id="main" className="flex-grow">
        <CrewHero />
        <CrewGrid />
      </main>
      <Footer />
    </div>
  );
}

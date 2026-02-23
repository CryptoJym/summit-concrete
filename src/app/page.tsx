import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DataTicker } from "@/components/layout/DataTicker";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsGrid } from "@/components/sections/StatsGrid";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Header />
      <main id="main" className="flex-grow flex flex-col">
        <HeroSection />
        <DataTicker />
      </main>
      <StatsGrid />
      <Footer />
    </div>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CapabilitiesAccordion } from "@/components/sections/CapabilitiesAccordion";
import { CertificationsBar } from "@/components/sections/CertificationsBar";
import { capabilitiesPage } from "@/lib/content";
import { MaterialIcon } from "@/components/ui/Icons";

export default function CapabilitiesPageRoute() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Header />
      {/* Marquee Status Bar */}
      <div className="bg-asphalt text-primary py-1 overflow-hidden whitespace-nowrap border-b border-asphalt">
        <div className="inline-block animate-marquee px-4 font-mono text-xs tracking-widest uppercase">
          {capabilitiesPage.marqueeText}
          {"  "}
          {capabilitiesPage.marqueeText}
        </div>
      </div>
      <main id="main" className="w-full relative flex flex-col items-center pb-24">
        {/* Page Title Block */}
        <div className="w-full max-w-[960px] px-4 md:px-0 pt-16 pb-12 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-rebar font-mono text-sm uppercase tracking-widest">
            <span className="size-2 bg-primary" />
            <span>{capabilitiesPage.badge}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase text-asphalt">
            {capabilitiesPage.heading}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-asphalt to-rebar">
              {capabilitiesPage.headingGradient}
            </span>
          </h2>
          <div className="h-px w-full bg-asphalt mt-4" />
          <div className="flex justify-between items-end">
            <p className="font-mono text-xs md:text-sm text-asphalt max-w-md mt-4 uppercase leading-relaxed">
              {capabilitiesPage.description}
            </p>
            <div className="hidden md:block font-mono text-xs text-right text-rebar">
              {capabilitiesPage.docRef}<br />
              {capabilitiesPage.lastUpdated}
            </div>
          </div>
        </div>

        <CapabilitiesAccordion />
        <CertificationsBar />
      </main>
      <Footer />
    </div>
  );
}

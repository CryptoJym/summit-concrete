import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SuccessConfirmation } from "@/components/sections/SuccessConfirmation";
import { ProjectTimeline } from "@/components/sections/ProjectTimeline";

export default function QuoteSuccessPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-dark-bg text-white">
      <Header />
      <main id="main" className="relative z-10 flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <SuccessConfirmation />
          <ProjectTimeline />
        </div>
      </main>
      <Footer />
    </div>
  );
}

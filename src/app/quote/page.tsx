import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteInfo } from "@/components/sections/QuoteInfo";
import { QuoteForm } from "@/components/sections/QuoteForm";

export default function QuotePage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-cured">
      <Header />
      <main id="main" className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-[1440px] bg-surface border-2 border-asphalt shadow-hard flex flex-col lg:flex-row relative z-10 overflow-hidden">
          <QuoteInfo />
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

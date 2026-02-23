import { QuoteInfo } from "@/components/sections/QuoteInfo";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { ContactMap } from "@/components/sections/ContactMap";

interface ContactExperienceProps {
  formspreeFormId?: string;
}

export function ContactExperience({ formspreeFormId }: ContactExperienceProps) {
  return (
    <main id="main" className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="w-full max-w-[1440px] space-y-8">
        <div className="bg-surface border-2 border-asphalt shadow-hard flex flex-col lg:flex-row relative z-10 overflow-hidden">
          <QuoteInfo />
          <QuoteForm formspreeFormId={formspreeFormId} />
        </div>
        <ContactMap />
      </div>
    </main>
  );
}

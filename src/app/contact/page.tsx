import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactExperience } from "@/components/sections/ContactExperience";

export default function ContactPage() {
  const formspreeFormId = process.env.FORMSPREE_FORM_ID;

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-cured">
      <Header />
      <ContactExperience formspreeFormId={formspreeFormId} />
      <Footer />
    </div>
  );
}

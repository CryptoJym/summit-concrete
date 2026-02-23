import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/lib/content";

export const metadata = {
  title: "Privacy Policy | Summit Concrete",
  description:
    "Privacy Policy for Summit Concrete - structural concrete execution for the Wasatch Front.",
};

export default function PrivacyPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Header />
      <main id="main" className="flex-grow">
        <section className="pt-16 pb-24">
          <div className="max-w-[960px] mx-auto px-4 md:px-0">
            <div className="flex items-center gap-2 text-rebar font-mono text-xs uppercase tracking-widest mb-6">
              <span className="size-2 bg-primary" />
              <span>LEGAL // PRIVACY</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase text-asphalt mb-8">
              Privacy<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-asphalt to-rebar">
                Protocol
              </span>
            </h1>
            <div className="h-px w-full bg-asphalt mb-8" />
            <p className="font-mono text-xs text-rebar uppercase mb-12">
              LAST_UPDATED:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "2-digit",
              })}
            </p>

            <div className="space-y-12">
              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Information We Collect
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80 mb-4">
                  When you request a quote or contact us through our website, we
                  collect information you provide directly, including:
                </p>
                <ul className="font-mono text-sm space-y-2 text-asphalt/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-asphalt mt-1.5 flex-shrink-0" />
                    Your name and contact information (phone, email, address)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-asphalt mt-1.5 flex-shrink-0" />
                    Project details and property information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-asphalt mt-1.5 flex-shrink-0" />
                    Communication preferences
                  </li>
                </ul>
              </section>

              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  How We Use Your Information
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="font-mono text-sm space-y-2 text-asphalt/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-asphalt mt-1.5 flex-shrink-0" />
                    Respond to your quote requests and inquiries
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-asphalt mt-1.5 flex-shrink-0" />
                    Provide estimates and schedule consultations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-asphalt mt-1.5 flex-shrink-0" />
                    Communicate about your project
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-asphalt mt-1.5 flex-shrink-0" />
                    Improve our services
                  </li>
                </ul>
              </section>

              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Information Sharing
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share information with trusted service
                  providers who assist us in operating our business, provided
                  they agree to keep this information confidential.
                </p>
              </section>

              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Contact Us
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80 mb-4">
                  If you have questions about this Privacy Policy, please contact
                  us at:
                </p>
                <div className="border-2 border-asphalt bg-surface p-4 font-mono text-sm">
                  <strong className="block mb-1">{brand.name}</strong>
                  Email: {brand.email}
                  <br />
                  Phone: {brand.phone}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

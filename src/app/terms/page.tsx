import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/lib/content";

export const metadata = {
  title: "Terms of Service | Summit Concrete",
  description:
    "Terms of Service for Summit Concrete - structural concrete execution for the Wasatch Front.",
};

export default function TermsPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Header />
      <main id="main" className="flex-grow">
        <section className="pt-16 pb-24">
          <div className="max-w-[960px] mx-auto px-4 md:px-0">
            <div className="flex items-center gap-2 text-rebar font-mono text-xs uppercase tracking-widest mb-6">
              <span className="size-2 bg-primary" />
              <span>LEGAL // TERMS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase text-asphalt mb-8">
              Terms of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-asphalt to-rebar">
                Service
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
                  Agreement to Terms
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80">
                  By accessing or using the Summit Concrete website, you agree to
                  be bound by these Terms of Service. If you do not agree to
                  these terms, please do not use our website.
                </p>
              </section>

              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Services
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80">
                  Summit Concrete provides structural concrete execution services
                  throughout the Wasatch Front, Utah. Our website allows you to
                  request quotes, learn about our capabilities, and contact our
                  team.
                </p>
              </section>

              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Quote Requests
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80">
                  Quotes provided through our website are estimates only and
                  subject to change upon physical inspection of the property.
                  Final pricing will be provided in a written contract before
                  work begins.
                </p>
              </section>

              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Intellectual Property
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80">
                  All content on this website, including text, images, logos, and
                  design elements, is the property of Summit Concrete and is
                  protected by copyright laws.
                </p>
              </section>

              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Limitation of Liability
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80">
                  Summit Concrete shall not be liable for any indirect,
                  incidental, or consequential damages arising from the use of
                  this website or our services.
                </p>
              </section>

              <section className="border-l-4 border-primary pl-6">
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  Contact
                </h2>
                <p className="font-mono text-sm leading-relaxed text-asphalt/80 mb-4">
                  For questions about these Terms of Service, please contact us
                  at:
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

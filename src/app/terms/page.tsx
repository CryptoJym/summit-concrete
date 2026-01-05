import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms of Service | Summit Concrete',
  description: 'Terms of Service for Summit Concrete - Utah\'s trusted concrete contractor.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ice">
      <Header />

      <section className="pt-40 pb-24">
        <div className="container-main max-w-4xl">
          <h1
            className="text-4xl md:text-5xl font-bold text-coal mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Terms of Service
          </h1>

          <p className="text-steel mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none text-steel space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the Summit Concrete website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Services</h2>
              <p>
                Summit Concrete provides concrete tear-out and replacement services throughout Utah. Our website allows you to request quotes, learn about our services, and contact our team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Quote Requests</h2>
              <p>
                Quotes provided through our website are estimates only and subject to change upon physical inspection of the property. Final pricing will be provided in a written contract before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos, and design elements, is the property of Summit Concrete and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Limitation of Liability</h2>
              <p>
                Summit Concrete shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-4">
                <strong className="text-coal">Summit Concrete</strong><br />
                Email: hello@summitconcrete.com<br />
                Phone: (801) 555-0123
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

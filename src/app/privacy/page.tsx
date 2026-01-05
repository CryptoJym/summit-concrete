import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy | Summit Concrete',
  description: 'Privacy Policy for Summit Concrete - Utah\'s trusted concrete contractor.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ice">
      <Header />

      <section className="pt-40 pb-24">
        <div className="container-main max-w-4xl">
          <h1
            className="text-4xl md:text-5xl font-bold text-coal mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Privacy Policy
          </h1>

          <p className="text-steel mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none text-steel space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Information We Collect</h2>
              <p>
                When you request a quote or contact us through our website, we collect information you provide directly, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Your name and contact information (phone, email, address)</li>
                <li>Project details and property information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Respond to your quote requests and inquiries</li>
                <li>Provide estimates and schedule consultations</li>
                <li>Communicate about your project</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-coal mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
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

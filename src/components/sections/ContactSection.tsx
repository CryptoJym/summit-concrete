'use client';

import { useState, useEffect, useRef } from 'react';
import { brand } from '@/lib/content';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  projectType: string;
  timeline: string;
  squareFootage: string;
  hasExistingConcrete: string;
  message: string;
}

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    projectType: '',
    timeline: '',
    squareFootage: '',
    hasExistingConcrete: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectTypes = [
    'Driveway',
    'Patio',
    'Sidewalk',
    'RV Pad',
    'Pool Deck',
    'Steps/Stairs',
    'Other',
  ];

  const timelines = [
    'ASAP',
    'Within 2 weeks',
    'Within 1 month',
    'Within 3 months',
    'Just planning',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section ref={sectionRef} id="contact" className="relative py-36 lg:py-48 bg-coal overflow-hidden">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success State */}
            <div className="relative p-12 bg-white">
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-sage" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-safety" />

              <div className="w-20 h-20 bg-sage flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2
                className="text-3xl lg:text-4xl font-bold text-coal mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                REQUEST RECEIVED!
              </h2>
              <p className="text-steel mb-8 text-lg">
                Thank you for your interest. We&apos;ll review your project details and get back to you
                within 24 hours with a custom quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${brand.phone}`}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-coal text-white font-bold uppercase tracking-wider transition-all hover:bg-sage"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-coal text-coal font-bold uppercase tracking-wider transition-all hover:bg-coal hover:text-white"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-36 lg:py-48 bg-coal overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Large text background */}
        <div
          className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20rem] font-display leading-none text-white/[0.015] select-none pointer-events-none hidden xl:block whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          CONTACT
        </div>
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">
          {/* Left Column - Contact Info */}
          <div>
            {/* Header */}
            <div
              className={`inline-flex items-center gap-3 mb-6 opacity-0 ${isVisible ? 'animate-slide-in-left' : ''}`}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-safety" />
              <span className="text-safety text-sm font-semibold tracking-[0.2em] uppercase">
                Get Started
              </span>
            </div>

            <h2
              className={`hero-headline text-4xl sm:text-5xl lg:text-6xl text-white mb-6 opacity-0 ${isVisible ? 'animate-slide-up delay-100' : ''}`}
            >
              Get Your Free Quote
            </h2>

            <p
              className={`text-xl text-steel mb-10 lg:mb-14 max-w-lg opacity-0 ${isVisible ? 'animate-slide-up delay-200' : ''}`}
            >
              Tell us about your project and we&apos;ll provide a detailed estimate within 24 hours.
            </p>

            {/* Contact Methods */}
            <div
              className={`space-y-6 lg:space-y-8 mb-20 opacity-0 ${isVisible ? 'animate-slide-up delay-300' : ''}`}
            >
              <a
                href={`tel:${brand.phone}`}
                className="group flex items-center gap-6 p-7 bg-white/5 border border-white/10 hover:bg-safety/10 hover:border-safety/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-safety flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-coal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Call Us</p>
                  <p className="text-steel">{brand.phone}</p>
                </div>
                <svg className="w-5 h-5 text-steel ml-auto group-hover:text-safety group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={`mailto:${brand.email}`}
                className="group flex items-center gap-6 p-7 bg-white/5 border border-white/10 hover:bg-sage/10 hover:border-sage/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-sage flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Email Us</p>
                  <p className="text-steel">{brand.email}</p>
                </div>
                <svg className="w-5 h-5 text-steel ml-auto group-hover:text-sage group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <div className="flex items-center gap-6 p-7 bg-white/5 border border-white/10">
                <div className="w-14 h-14 bg-coal border border-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Service Area</p>
                  <p className="text-steel">{brand.serviceArea.join(' • ')}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-7 bg-white/5 border border-white/10">
                <div className="w-14 h-14 bg-coal border border-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Response Time</p>
                  <p className="text-steel">Usually within 2 hours</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap gap-8 lg:gap-10 opacity-0 ${isVisible ? 'animate-slide-up delay-400' : ''}`}
            >
              {['Free Estimates', 'Licensed & Insured', '15+ Years'].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 px-8 py-5 lg:px-10 lg:py-6 bg-white/5 border border-white/10"
                >
                  <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white text-sm font-medium whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`opacity-0 ${isVisible ? 'animate-slide-up delay-300' : ''}`}>
            <div className="relative">
              {/* Industrial Frame */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-safety" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-sage" />

              {/* Form Card */}
              <div className="relative bg-white p-12 sm:p-16 lg:p-24 shadow-2xl">
                <h3
                  className="text-3xl font-bold text-coal mb-12 pb-8 border-b border-concrete"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  REQUEST YOUR QUOTE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border bg-ice text-coal placeholder-steel/50 focus:outline-none transition-colors ${focusedField === 'name' ? 'border-safety' : 'border-concrete'
                        }`}
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-6 py-4 border bg-ice text-coal placeholder-steel/50 focus:outline-none transition-colors ${focusedField === 'phone' ? 'border-safety' : 'border-concrete'
                          }`}
                        placeholder="(801) 555-1234"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-6 py-4 border bg-ice text-coal placeholder-steel/50 focus:outline-none transition-colors ${focusedField === 'email' ? 'border-safety' : 'border-concrete'
                          }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                      Project Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('address')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border bg-ice text-coal placeholder-steel/50 focus:outline-none transition-colors ${focusedField === 'address' ? 'border-safety' : 'border-concrete'
                        }`}
                      placeholder="123 Main St, Orem, UT"
                    />
                  </div>

                  {/* Project Type & Timeline */}
                  <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('projectType')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-6 py-4 border bg-ice text-coal focus:outline-none transition-colors ${focusedField === 'projectType' ? 'border-safety' : 'border-concrete'
                          }`}
                      >
                        <option value="">Select type...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('timeline')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-6 py-4 border bg-ice text-coal focus:outline-none transition-colors ${focusedField === 'timeline' ? 'border-safety' : 'border-concrete'
                          }`}
                      >
                        <option value="">When needed?</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Square Footage & Existing Concrete */}
                  <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                    <div>
                      <label htmlFor="squareFootage" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                        Approx. Square Footage
                      </label>
                      <input
                        type="text"
                        id="squareFootage"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('squareFootage')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 bg-ice text-coal placeholder-steel/50 focus:outline-none transition-colors ${focusedField === 'squareFootage' ? 'border-safety' : 'border-concrete'
                          }`}
                        placeholder="e.g., 500 sq ft"
                      />
                    </div>
                    <div>
                      <label htmlFor="hasExistingConcrete" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                        Existing Concrete?
                      </label>
                      <select
                        id="hasExistingConcrete"
                        name="hasExistingConcrete"
                        value={formData.hasExistingConcrete}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('hasExistingConcrete')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-4 border-2 bg-ice text-coal focus:outline-none transition-colors ${focusedField === 'hasExistingConcrete' ? 'border-safety' : 'border-concrete'
                          }`}
                      >
                        <option value="">Select...</option>
                        <option value="yes">Yes, needs removal</option>
                        <option value="no">No, new pour</option>
                        <option value="unsure">Not sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-coal mb-3.5 uppercase tracking-wider">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 border-2 bg-ice text-coal placeholder-steel/50 focus:outline-none resize-none transition-colors ${focusedField === 'message' ? 'border-safety' : 'border-concrete'
                        }`}
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-5 mt-6 lg:mt-8 bg-sage text-white font-bold uppercase tracking-wider transition-all hover:bg-coal disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Get Free Quote
                          <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-xs text-steel text-center pt-6">
                    By submitting, you agree to receive texts/calls about your project.
                    No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

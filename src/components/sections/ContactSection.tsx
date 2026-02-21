'use client';

import { useState, useEffect, useRef } from 'react';
import { brand } from '@/lib/content';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', projectType: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section ref={ref} id="contact" className="py-20 lg:py-28 bg-ink">
        <div className="container-main">
          <div className="max-w-lg mx-auto text-center bg-white p-12">
            <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-ink mb-3 font-display">Request Received</h2>
            <p className="text-ink-faded mb-8">
              We&apos;ll review your project and get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${brand.phone}`}
                className="px-6 py-3 bg-ink text-white font-semibold hover:bg-ink/80 transition-colors"
              >
                Call Us Now
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 border border-edge text-ink font-semibold hover:bg-base-alt transition-colors"
              >
                Submit Another
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = 'w-full px-4 py-3 border border-edge bg-base text-ink placeholder-ink-faded/40 focus:border-amber transition-colors';

  return (
    <section ref={ref} id="contact" className="py-20 lg:py-28 bg-ink">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Info */}
          <div className="lg:col-span-2">
            <p className={`text-sm font-semibold text-amber tracking-wide uppercase mb-4 opacity-0 ${isVisible ? 'animate-in' : ''}`}>
              Get Started
            </p>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 opacity-0 ${isVisible ? 'animate-in delay-1' : ''}`}>
              Get Your Free Quote
            </h2>
            <p className={`text-lg text-white/50 mb-10 opacity-0 ${isVisible ? 'animate-in delay-2' : ''}`}>
              Tell us about your project and we&apos;ll respond within hours.
            </p>

            <div className={`space-y-5 opacity-0 ${isVisible ? 'animate-in delay-3' : ''}`}>
              <a href={`tel:${brand.phone}`} className="flex items-center gap-4 text-white hover:text-amber transition-colors group">
                <div className="w-11 h-11 bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{brand.phone}</p>
                  <p className="text-sm text-white/40">Call or text anytime</p>
                </div>
              </a>

              <a href={`mailto:${brand.email}`} className="flex items-center gap-4 text-white hover:text-amber transition-colors group">
                <div className="w-11 h-11 bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{brand.email}</p>
                  <p className="text-sm text-white/40">We respond same day</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/60">
                <div className="w-11 h-11 bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Mon-Sat 7am-7pm</p>
                  <p className="text-sm text-white/40">Same-day estimates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 opacity-0 ${isVisible ? 'animate-in delay-3' : ''}`}>
            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Smith" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">Phone *</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(801) 555-1234" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="address" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">Project Address *</label>
                    <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} className={inputClass} placeholder="123 Main St, Orem" />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">Project Type *</label>
                    <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange} className={inputClass}>
                      <option value="">Select type...</option>
                      {['Driveway', 'Patio', 'Sidewalk', 'RV Pad', 'Pool Deck', 'Steps/Stairs', 'Other'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Size, condition, timeline, anything helpful..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-amber text-white font-semibold hover:bg-amber-hover transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : 'Get Free Quote'}
                </button>

                <p className="text-xs text-ink-faded text-center">
                  We&apos;ll respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

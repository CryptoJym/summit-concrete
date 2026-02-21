'use client';

import { useState, useEffect, useRef } from 'react';
import { brand } from '@/lib/content';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', projectType: '', message: '',
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
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3 font-display">Request Received</h2>
            <p className="text-white/50 mb-8">
              We&apos;ll get back to you within 24 hours.
            </p>
            <a
              href={`tel:${brand.phone}`}
              className="inline-block px-6 py-3 bg-amber text-white font-semibold hover:bg-amber-hover transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = 'w-full px-4 py-3 border border-edge bg-base text-ink placeholder-ink-faded/40 focus:border-amber transition-colors text-sm';

  return (
    <section ref={ref} id="contact" className="py-20 lg:py-28 bg-ink">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className={`opacity-0 ${isVisible ? 'animate-in' : ''}`}>
            <p className="text-sm font-semibold text-amber tracking-wide uppercase mb-4">
              Get Started
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Free estimate.<br />Same-day response.
            </h2>
            <p className="text-white/50 mb-8 max-w-sm">
              Tell us what you need and we&apos;ll call you back.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${brand.phone}`} className="block text-white/70 hover:text-amber transition-colors">
                {brand.phone}
              </a>
              <a href={`mailto:${brand.email}`} className="block text-white/70 hover:text-amber transition-colors">
                {brand.email}
              </a>
              <p className="text-white/40">Mon–Sat, 7am–7pm</p>
            </div>
          </div>

          {/* Form */}
          <div className={`opacity-0 ${isVisible ? 'animate-in delay-2' : ''}`}>
            <div className="bg-white p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name *" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Phone *" />
                  <input type="text" name="address" required value={formData.address} onChange={handleChange} className={inputClass} placeholder="Project address *" />
                </div>

                <select name="projectType" required value={formData.projectType} onChange={handleChange} className={inputClass}>
                  <option value="">Project type *</option>
                  {['Driveway', 'Patio', 'Sidewalk', 'RV Pad', 'Other'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>

                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Anything else we should know?"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber text-white font-semibold hover:bg-amber-hover transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

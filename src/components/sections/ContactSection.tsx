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
      <section ref={ref} id="contact" className="py-28 lg:py-40 bg-ink">
        <div className="container-main">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">Request Received</h2>
            <p className="text-white/50 mb-10 text-lg">
              We&apos;ll get back to you within 24 hours.
            </p>
            <a
              href={`tel:${brand.phone}`}
              className="inline-block px-8 py-4 bg-amber text-white text-lg font-semibold rounded-lg hover:bg-amber-hover transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    );
  }

  const inputClass = 'w-full px-6 py-4 border border-white/15 bg-white/5 text-white placeholder-white/30 rounded-lg focus:border-amber focus:bg-white/10 transition-all duration-300 text-base';

  return (
    <section ref={ref} id="contact" className="py-28 lg:py-40 bg-ink">
      <div className="container-main max-w-xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 lg:mb-16 opacity-0 ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Get Your Free Estimate
          </h2>
          <p className="text-white/40 text-lg">
            Same-day response. No spam, ever.
          </p>
        </div>

        {/* Form */}
        <div className={`opacity-0 ${isVisible ? 'animate-in delay-2' : ''}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />

            <div className="grid sm:grid-cols-2 gap-6">
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Phone number" />
              <input type="text" name="address" required value={formData.address} onChange={handleChange} className={inputClass} placeholder="Project address" />
            </div>

            <select name="projectType" required value={formData.projectType} onChange={handleChange} className={inputClass}>
              <option value="">What type of project?</option>
              {['Driveway', 'Patio', 'Sidewalk', 'RV Pad', 'Other'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your project (optional)"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-amber text-white text-lg font-bold rounded-lg hover:bg-amber-hover transition-all duration-300 hover:shadow-lg hover:shadow-amber/25 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Get Free Quote'}
            </button>
          </form>

          <p className="text-center text-white/25 text-sm mt-8">
            Or call directly: <a href={`tel:${brand.phone}`} className="text-white/40 hover:text-amber transition-colors">{brand.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);



  return (
    <footer ref={footerRef} className="relative bg-coal overflow-hidden pt-20 pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container-main relative z-10">
        {/* Industrial corner accents - Moved further out to avoid collisions */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-safety/20 hidden lg:block -translate-x-8 -translate-y-8" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-sage/20 hidden lg:block translate-x-8 translate-y-8" />

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-4 mb-10 group">
              <div className="w-16 h-16 bg-safety flex items-center justify-center font-bold text-3xl text-coal relative overflow-hidden">
                <span className="relative z-10" style={{ fontFamily: 'var(--font-display)' }}>SC</span>
                {/* Animated shine */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </div>
              <div>
                <span className="block text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                  SUMMIT CONCRETE
                </span>
                <span className="text-sm text-safety uppercase tracking-widest font-semibold">
                  Utah&apos;s Premium Standard
                </span>
              </div>
            </div>

            <div className="relative">
              {/* Decorative line - pushed down */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-white/10" />
              <p className="text-steel text-lg leading-relaxed max-w-md pl-6">
                Professional concrete tear-out and replacement. We specialize in transforming damaged driveways into property assets. Licensed, insured, and built to last.
              </p>
            </div>
          </div>

          {/* Contact/Service Column */}
          <div className="grid sm:grid-cols-2 gap-12 lg:gap-8">
            {/* Contact Info */}
            <div className="space-y-10">
              <h4 className="text-white font-bold uppercase tracking-wider mb-8 border-l-4 border-safety pl-4">
                Contact Us
              </h4>

              <div className="space-y-8">
                <div className="group">
                  <p className="text-sm text-safety font-bold uppercase tracking-wider mb-2">Call or Text</p>
                  <a
                    href="tel:801-555-0123"
                    className="text-2xl text-white font-bold hover:text-safety transition-colors"
                  >
                    (801) 555-0123
                  </a>
                </div>

                <div className="group">
                  <p className="text-sm text-safety font-bold uppercase tracking-wider mb-2">Email Us</p>
                  <a
                    href="mailto:hello@summitconcrete.com"
                    className="text-xl text-white hover:text-safety transition-colors"
                  >
                    hello@summitconcrete.com
                  </a>
                </div>

                <div className="group">
                  <p className="text-sm text-safety font-bold uppercase tracking-wider mb-2">Hours</p>
                  <p className="text-white">Mon - Sat: 7am - 7pm</p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-8 border-l-4 border-sage pl-4">
                Service Area
              </h4>
              <div className="space-y-3">
                {[
                  'Salt Lake City',
                  'Park City',
                  'Sandy / Draper',
                  'Orem / Provo',
                  'Heber City',
                  'Lehi / American Fork'
                ].map((city) => (
                  <div key={city} className="flex items-center gap-3 text-steel hover:text-white transition-colors cursor-default group">
                    <div className="w-1.5 h-1.5 bg-safety rounded-full group-hover:scale-150 transition-transform" />
                    {city}
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 border border-white/10 bg-white/5">
                <p className="text-sm text-steel mb-2">Response Time:</p>
                <p className="text-white font-bold uppercase tracking-wide">
                  <span className="text-safety">Same Day</span> for quotes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-10 border-t border-white/10 mt-20 pt-10">
        <div className="container-main flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-steel">
          <p>&copy; {new Date().getFullYear()} Summit Concrete. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-safety font-bold uppercase tracking-wider">Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="absolute bottom-8 right-8 w-12 h-12 bg-white/5 hover:bg-safety/20 border border-white/10 hover:border-safety/50 text-white/60 hover:text-safety flex items-center justify-center transition-all duration-300 group z-20"
      >
        <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { brand, navigation } from '@/lib/content';

interface FooterProps {
  mode: 'diy' | 'dfy';
}

export function Footer({ mode }: FooterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const services = [
    'Driveway Tear-Out & Repour',
    'Patio Installation',
    'RV Pads & Extensions',
    'Sidewalks & Walkways',
    'Shop & Garage Slabs',
    'Concrete Demolition',
  ];

  const serviceAreas = [
    { county: 'Salt Lake County', cities: 'SLC, Sandy, Draper, Murray' },
    { county: 'Utah County', cities: 'Provo, Orem, Lehi, American Fork' },
    { county: 'Davis County', cities: 'Bountiful, Layton, Kaysville' },
    { county: 'Summit County', cities: 'Park City, Coalville' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-coal text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(var(--ice) 1px, transparent 1px),
              linear-gradient(90deg, var(--ice) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Large decorative text */}
        <div
          className="absolute -right-10 top-1/4 text-[20rem] font-display leading-none text-white/[0.015] select-none pointer-events-none hidden xl:block whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          SUMMIT
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-main relative z-10 py-36">
        {/* Industrial corner accents */}
        <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-safety hidden lg:block" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-sage hidden lg:block" />

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-28 lg:gap-24">
          {/* Brand Column */}
          <div
            className={`lg:col-span-4 opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
          >
            {/* Logo */}
            <div className="flex items-center gap-12 mb-20">
              <div className="relative flex-shrink-0">
                <div className="absolute -top-2 -left-2 w-5 h-5 border-l-2 border-t-2 border-safety" />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-r-2 border-b-2 border-sage" />
                <div className="w-20 h-20 bg-safety flex items-center justify-center">
                  <span
                    className="text-3xl font-bold text-coal"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    SC
                  </span>
                </div>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-white tracking-wide mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {brand.name.toUpperCase()}
                </h3>
                <p className="text-white/50 text-sm tracking-wider uppercase leading-relaxed">
                  Utah Concrete Pros
                </p>
              </div>
            </div>

            <p className="text-white/60 mb-20 leading-relaxed text-lg">
              {mode === 'diy'
                ? 'Learn how to build your own concrete project with our free step-by-step playbook. Expert guidance for the dedicated DIYer.'
                : 'Professional concrete tear-out and repour services across Utah\'s Wasatch Front. 15+ years of experience, 200+ completed projects.'}
            </p>

            {/* Contact Info */}
            <div className="space-y-12">
              <a
                href={`tel:${brand.phone}`}
                className="group flex items-center gap-5 text-white/80 hover:text-safety transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 group-hover:bg-safety/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-wider">Call or Text</span>
                  <span className="font-semibold text-lg">{brand.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:info@summitconcrete.com`}
                className="group flex items-center gap-5 text-white/80 hover:text-safety transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 group-hover:bg-safety/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-wider">Email</span>
                  <span className="font-semibold">info@summitconcrete.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`lg:col-span-2 opacity-0 ${isVisible ? 'animate-slide-up delay-100' : ''}`}
          >
            <h4
              className="text-sm font-bold text-white mb-8 tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Navigation
            </h4>
            <div className="h-px w-14 bg-gradient-to-r from-safety to-transparent mb-14" />
            <nav className="space-y-10">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredLink(item.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group flex items-center gap-4 text-white/60 hover:text-safety transition-colors text-left"
                >
                  <div
                    className={`w-2 h-2 transition-all duration-300 ${
                      hoveredLink === item.id ? 'bg-safety scale-125' : 'bg-white/30'
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div
            className={`lg:col-span-3 opacity-0 ${isVisible ? 'animate-slide-up delay-200' : ''}`}
          >
            <h4
              className="text-sm font-bold text-white mb-8 tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Services
            </h4>
            <div className="h-px w-14 bg-gradient-to-r from-sage to-transparent mb-14" />
            <ul className="space-y-10">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start gap-5 text-white/60"
                >
                  <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div
            className={`lg:col-span-3 opacity-0 ${isVisible ? 'animate-slide-up delay-300' : ''}`}
          >
            <h4
              className="text-sm font-bold text-white mb-8 tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Service Areas
            </h4>
            <div className="h-px w-14 bg-gradient-to-r from-safety to-transparent mb-14" />
            <div className="space-y-14">
              {serviceAreas.map((area, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-5 mb-4">
                    <svg className="w-6 h-6 text-safety flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-white font-medium text-lg">{area.county}</span>
                  </div>
                  <p className="text-white/50 text-base pl-10 leading-relaxed">{area.cities}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bar */}
      <div
        className={`relative border-t border-white/10 opacity-0 ${isVisible ? 'animate-slide-up delay-400' : ''}`}
      >
        <div className="container-main py-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="text-center lg:text-left">
              <h3
                className="text-xl lg:text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {mode === 'diy' ? 'READY TO DIY YOUR PROJECT?' : 'READY TO START YOUR PROJECT?'}
              </h3>
              <p className="text-white/50 text-lg">
                {mode === 'diy'
                  ? 'Download our free step-by-step playbook'
                  : 'Get a free estimate within 24 hours'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <button
                onClick={() => scrollToSection('contact')}
                className={`relative group px-12 py-5 font-bold uppercase tracking-wider transition-all duration-300 ${
                  mode === 'diy'
                    ? 'bg-safety text-coal hover:bg-safety/90'
                    : 'bg-sage text-white hover:bg-sage/90'
                }`}
              >
                {/* Button corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/30 -translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/30 translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>{mode === 'diy' ? 'Get Free Playbook' : 'Get Free Estimate'}</span>
              </button>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center justify-center gap-5 px-12 py-5 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">{brand.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-main py-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-10 text-white/40 text-sm">
              <span>© {new Date().getFullYear()} {brand.name}</span>
              <div className="w-px h-4 bg-white/20 hidden sm:block" />
              <span className="hidden sm:block">Licensed & Insured</span>
              <div className="w-px h-4 bg-white/20 hidden sm:block" />
              <span className="hidden sm:block">Utah Contractor</span>
            </div>

            <div className="flex items-center gap-10 text-sm">
              <div className="flex items-center gap-4">
                <div className={`w-2.5 h-2.5 ${mode === 'diy' ? 'bg-safety' : 'bg-sage'}`} />
                <span className="text-white/50">
                  {mode === 'diy' ? 'DIY Mode' : 'DFY Mode'}
                </span>
              </div>
              <div className="w-px h-5 bg-white/20" />
              <span className="text-white/40">
                Site by{' '}
                <a
                  href="#"
                  className="text-safety hover:text-safety/80 transition-colors"
                >
                  Utlyze
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-24 right-8 w-12 h-12 bg-white/5 hover:bg-safety/20 border border-white/10 hover:border-safety/50 text-white/60 hover:text-safety flex items-center justify-center transition-all duration-300 group"
      >
        <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}

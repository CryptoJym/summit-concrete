'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '15+', label: 'Years', sublabel: 'Experience' },
    { value: '500+', label: 'Projects', sublabel: 'Completed' },
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-ice">
      {/* Mobile Hero Background Image */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero/hero-workers.png"
          alt=""
          fill
          className="object-cover object-center opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ice/80 via-ice/90 to-ice" />
      </div>

      {/* Industrial Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-ice via-concrete/30 to-ice" />

        {/* Grid pattern */}
        <div className="absolute inset-0 industrial-grid" />

        {/* Concrete texture */}
        <div className="absolute inset-0 concrete-texture" />

        {/* Diagonal accent stripe */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, var(--safety) 40%, var(--safety) 42%, transparent 42%)',
          }}
        />

        {/* Large decorative number removed for cleaner layout */}
      </div>

      <div className="container-main relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Main Headline */}
            <h1
              className={`hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-coal mb-14 opacity-0 ${isLoaded ? 'animate-slide-up delay-100' : ''}`}
            >
              Tear-Out &
              <br />
              <span className="hero-accent-text">Repour</span>
              <br />
              <span className="text-steel-dark">Done Right</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl md:text-2xl text-steel max-w-xl mx-auto lg:mx-0 mb-16 leading-relaxed opacity-0 ${isLoaded ? 'animate-slide-up delay-200' : ''}`}
            >
              Utah&apos;s trusted concrete contractor. <br className="hidden sm:block" />
              We turn cracked, ugly concrete into driveways you&apos;re proud of.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16 opacity-0 ${isLoaded ? 'animate-slide-up delay-300' : ''}`}
            >
              {/* Primary CTA - REDESIGNED: Yellow/Safety */}
              <button
                onClick={scrollToContact}
                className={`group relative pl-12 pr-12 py-5 font-bold uppercase tracking-wider transition-all bg-safety text-coal hover:bg-safety-light shadow-xl shadow-safety/20`}
              >
                <div className="flex items-center justify-center gap-3 relative z-10">
                  <span>Get Custom Quote</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                {/* Button decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-coal/20 -translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-coal/20 translate-x-1 translate-y-1" />
              </button>

              {/* Secondary CTA - Outline */}
              <button
                onClick={scrollToProcess}
                className="group relative px-10 py-5 border-2 border-coal/10 text-coal font-bold uppercase tracking-wider hover:bg-coal hover:text-white transition-all duration-300"
              >
                See How It Works
              </button>
            </div>

            {/* Trust Bar (Checks) */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-y-6 gap-x-12 opacity-0 ${isLoaded ? 'animate-slide-up delay-400' : ''}`}
            >
              {[
                'Free Estimates',
                'Licensed & Insured',
                'Same-Day Response',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-sm bg-safety/20 flex items-center justify-center group-hover:bg-safety transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-coal transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-coal uppercase tracking-wide text-xs sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image (5 cols) - Desktop only, mobile has background */}
          <div
            className={`lg:col-span-5 relative hidden lg:block`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Main Image Frame */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-4 border-t-4 border-safety" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-4 border-b-4 border-sage" />

              <div className="relative h-full w-full bg-concrete shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero/hero-workers.png"
                  alt="Professional Concrete Work"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-coal/60 to-transparent" />
              </div>

              {/* Redesigned Rating Badge */}
              <div className="absolute -bottom-10 -left-10 z-20">
                <div className="bg-white p-6 shadow-2xl flex items-center gap-5 border-l-4 border-safety">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-coal leading-none mb-1" style={{ fontFamily: 'var(--font-display)' }}>4.9</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-3.5 h-3.5 text-safety" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="h-8 w-px bg-concrete" />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold text-coal uppercase tracking-wider">Top Rated</span>
                    <span className="text-[10px] text-steel uppercase tracking-wider">Park City to SLC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar aligned with container */}
      <div className="container-main">
        <div
          className={`mt-12 lg:mt-16 border-t border-coal/10 pt-10 opacity-0 ${isLoaded ? 'animate-slide-up delay-500' : ''}`}
        >
          <div className="grid grid-cols-2 gap-8 lg:gap-16 max-w-2xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center lg:text-left relative pl-4 lg:pl-0"
              >
                {/* Vertical divider */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-coal/10 hidden lg:block" />
                )}

                <div
                  className="text-3xl lg:text-5xl font-bold text-coal mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </div>
                <div>
                  <div className="text-xs lg:text-sm font-bold text-coal uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[10px] lg:text-xs text-steel uppercase tracking-widest">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 opacity-0 ${isLoaded ? 'animate-fade-in delay-700' : ''}`}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-steel">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-steel to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-safety animate-pulse-subtle"
            style={{ animation: 'pulse 1.5s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}

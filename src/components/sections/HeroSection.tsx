'use client';

import { useState, useEffect } from 'react';
import { heroContent, brand } from '@/lib/content';
import { ModeToggle } from '@/components/ui/ModeToggle';
import Image from 'next/image';

interface HeroSectionProps {
  mode: 'diy' | 'dfy';
  onModeChange: (mode: 'diy' | 'dfy') => void;
  onOpenPlaybook: () => void;
}

export function HeroSection({ mode, onModeChange, onOpenPlaybook }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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

  const scrollToSystem = () => {
    const element = document.getElementById('system');
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '15+', label: 'Years', sublabel: 'Experience' },
    { value: '500+', label: 'Projects', sublabel: 'Completed' },
    { value: '4.9', label: 'Rating', sublabel: '200+ Reviews' },
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-ice">
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

        {/* Large decorative number */}
        <div
          className="absolute -right-20 top-20 text-[40rem] font-display leading-none text-coal/[0.02] select-none pointer-events-none hidden xl:block"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          01
        </div>
      </div>

      <div className="container-main relative z-10 pt-40 pb-32 lg:pt-48 lg:pb-44">
        {/* Mobile Mode Toggle */}
        <div
          className={`flex justify-center mb-16 md:hidden opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
        >
          <ModeToggle mode={mode} onModeChange={onModeChange} />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Service Tag */}
            <div
              className={`inline-flex items-center gap-4 mb-12 opacity-0 ${isLoaded ? 'animate-slide-in-left' : ''}`}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-safety" />
              <span
                className="text-sm font-semibold tracking-[0.2em] uppercase"
                style={{ color: mode === 'diy' ? 'var(--safety)' : 'var(--sage)' }}
              >
                {mode === 'diy' ? 'Free DIY Playbook' : 'Done-For-You Service'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-safety lg:hidden" />
            </div>

            {/* Main Headline */}
            <h1
              className={`hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-coal mb-10 opacity-0 ${isLoaded ? 'animate-slide-up delay-100' : ''}`}
            >
              Tear-Out &
              <br />
              <span className="hero-accent-text">Repour</span>
              <br />
              <span className="text-steel-dark">Done Right</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl md:text-2xl text-steel max-w-xl mx-auto lg:mx-0 mb-14 leading-relaxed opacity-0 ${isLoaded ? 'animate-slide-up delay-200' : ''}`}
            >
              Utah&apos;s trusted concrete contractor. <br className="hidden sm:block" />
              We turn cracked, ugly concrete into driveways you&apos;re proud of.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-8 justify-center lg:justify-start mb-18 opacity-0 ${isLoaded ? 'animate-slide-up delay-300' : ''}`}
            >
              {/* Primary CTA */}
              <button
                onClick={mode === 'diy' ? onOpenPlaybook : scrollToContact}
                className={`btn-premium group relative px-12 py-6 rounded-none text-lg font-bold uppercase tracking-wider transition-all ${
                  mode === 'diy'
                    ? 'bg-safety text-coal hover:bg-safety-dark'
                    : 'bg-sage text-white hover:bg-sage-light btn-premium-sage'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  {mode === 'diy' ? 'Get Free Playbook' : 'Get Custom Quote'}
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={scrollToSystem}
                className="group relative px-12 py-6 rounded-none text-lg font-semibold uppercase tracking-wider border-2 border-coal text-coal hover:bg-coal hover:text-ice transition-all"
              >
                <span className="flex items-center justify-center gap-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  See How It Works
                </span>
              </button>
            </div>

            {/* Trust Bar */}
            <div
              className={`flex flex-wrap gap-10 justify-center lg:justify-start text-sm text-steel opacity-0 ${isLoaded ? 'animate-slide-up delay-400' : ''}`}
            >
              {[
                { icon: '✓', text: 'Free Estimates' },
                { icon: '✓', text: 'Same-Day Response' },
                { icon: '✓', text: '4 Counties Served' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-6 h-6 flex items-center justify-center bg-sage text-white text-xs font-bold">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Main Image Container */}
            <div
              className={`relative opacity-0 ${isLoaded ? 'animate-scale-in delay-300' : ''}`}
            >
              {/* Industrial Frame */}
              <div className="relative">
                {/* Decorative frame lines */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-safety" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-sage" />

                {/* Hero Image */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-concrete to-concrete-dark overflow-hidden">
                  <Image
                    src="/images/hero-concrete-worker.png"
                    alt="Professional concrete contractor pouring driveway"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/30 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-8 -left-8 bg-white shadow-2xl px-12 py-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-sage rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-coal" style={{ fontFamily: 'var(--font-display)' }}>4.9</div>
                      <div className="text-xs text-steel uppercase tracking-wider">200+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-28 lg:mt-40 opacity-0 ${isLoaded ? 'animate-slide-up delay-500' : ''}`}
        >
          <div className="grid grid-cols-3 gap-10 lg:gap-16 max-w-3xl mx-auto lg:mx-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center lg:text-left relative"
              >
                {/* Vertical divider (not on first) */}
                {index > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-steel/30 to-transparent hidden lg:block" />
                )}

                <div
                  className="stat-number text-coal mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-coal uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-steel mt-1">
                  {stat.sublabel}
                </div>
              </div>
            ))}
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
      </div>
    </section>
  );
}

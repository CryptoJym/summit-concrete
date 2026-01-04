'use client';

import { useState, useEffect, useRef } from 'react';
import { dfyStages } from '@/lib/content';

interface PricingSectionProps {
  mode: 'diy' | 'dfy';
  onOpenPlaybook: () => void;
}

export function PricingSection({ mode, onOpenPlaybook }: PricingSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<'diy' | 'dfy' | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const diyFeatures = [
    'Complete GBP setup guide',
    'Review request templates',
    'Content capture SOP',
    'Lead intake system',
    'Meta Ads blueprint',
    'All scripts & templates',
  ];

  const dfyFeatures = [
    'Full GBP optimization',
    'Automated review system',
    'Professional photo shoots',
    'Lead intake system setup',
    'Meta Ads management',
    'Ongoing optimization',
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-36 lg:py-48 bg-ice overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              var(--coal) 0,
              var(--coal) 1px,
              transparent 0,
              transparent 50%
            )`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Large text background */}
        <div
          className="absolute -right-10 top-1/3 text-[18rem] font-display leading-none text-coal/[0.015] select-none pointer-events-none hidden xl:block whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          PRICING
        </div>
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div
            className={`inline-flex items-center gap-4 mb-8 opacity-0 ${isVisible ? 'animate-slide-in-left' : ''}`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-safety" />
            <span className="text-safety text-sm font-semibold tracking-[0.2em] uppercase">
              Your Options
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-safety" />
          </div>

          <h2
            className={`hero-headline text-4xl sm:text-5xl lg:text-7xl text-coal mb-8 opacity-0 ${isVisible ? 'animate-slide-up delay-100' : ''}`}
          >
            Choose Your
            <br />
            <span className="text-steel">Path Forward</span>
          </h2>

          <p
            className={`text-xl text-steel max-w-2xl mx-auto opacity-0 ${isVisible ? 'animate-slide-up delay-200' : ''}`}
          >
            Build the system yourself with our free playbook, or let us install everything for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto mb-28">
          {/* DIY Card */}
          <div
            className={`relative opacity-0 ${isVisible ? 'animate-slide-up delay-300' : ''}`}
            onMouseEnter={() => setHoveredCard('diy')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {mode === 'diy' && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-safety text-coal text-sm font-bold uppercase tracking-wider px-6 py-2">
                  Recommended
                </div>
              </div>
            )}

            <div
              className={`relative h-full transition-all duration-500 cursor-pointer ${
                hoveredCard === 'diy' ? 'transform -translate-y-2' : ''
              }`}
            >
              {/* Industrial Frame */}
              <div
                className={`absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 transition-all duration-300 ${
                  hoveredCard === 'diy' || mode === 'diy' ? 'border-safety opacity-100' : 'border-coal/20 opacity-50'
                }`}
              />
              <div
                className={`absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 transition-all duration-300 ${
                  hoveredCard === 'diy' || mode === 'diy' ? 'border-sage opacity-100' : 'border-coal/20 opacity-50'
                }`}
              />

              {/* Card Content */}
              <div
                className={`relative p-12 lg:p-14 transition-all duration-300 ${
                  hoveredCard === 'diy' ? 'bg-white shadow-2xl' : 'bg-white shadow-lg'
                } ${mode === 'diy' ? 'ring-2 ring-safety' : ''}`}
              >
                {/* Badge */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 bg-safety/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold tracking-wider uppercase text-safety">
                    Free Download
                  </span>
                </div>

                {/* Title & Price */}
                <h3
                  className="text-3xl lg:text-4xl font-bold text-coal mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  DIY PLAYBOOK
                </h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <span
                    className="text-5xl lg:text-6xl font-bold text-safety"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    $0
                  </span>
                  <span className="text-steel text-lg">forever</span>
                </div>
                <p className="text-steel mb-12">Build it yourself at your own pace</p>

                {/* Features */}
                <ul className="space-y-6 mb-14">
                  {diyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-5">
                      <div className="w-6 h-6 bg-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-coal font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={onOpenPlaybook}
                  className="group relative w-full px-12 py-6 bg-safety text-coal font-bold uppercase tracking-wider transition-all hover:bg-safety-dark"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Get Free Playbook
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* DFY Card */}
          <div
            className={`relative opacity-0 ${isVisible ? 'animate-slide-up delay-400' : ''}`}
            onMouseEnter={() => setHoveredCard('dfy')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {mode === 'dfy' && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-sage text-white text-sm font-bold uppercase tracking-wider px-6 py-2">
                  Recommended
                </div>
              </div>
            )}

            <div
              className={`relative h-full transition-all duration-500 cursor-pointer ${
                hoveredCard === 'dfy' ? 'transform -translate-y-2' : ''
              }`}
            >
              {/* Industrial Frame */}
              <div
                className={`absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 transition-all duration-300 ${
                  hoveredCard === 'dfy' || mode === 'dfy' ? 'border-sage opacity-100' : 'border-coal/20 opacity-50'
                }`}
              />
              <div
                className={`absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 transition-all duration-300 ${
                  hoveredCard === 'dfy' || mode === 'dfy' ? 'border-safety opacity-100' : 'border-coal/20 opacity-50'
                }`}
              />

              {/* Card Content */}
              <div
                className={`relative p-12 lg:p-14 transition-all duration-300 ${
                  hoveredCard === 'dfy' ? 'bg-coal shadow-2xl' : 'bg-coal shadow-lg'
                } ${mode === 'dfy' ? 'ring-2 ring-sage' : ''}`}
              >
                {/* Badge */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 bg-sage/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold tracking-wider uppercase text-sage">
                    Full Service
                  </span>
                </div>

                {/* Title & Price */}
                <h3
                  className="text-3xl lg:text-4xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  DONE FOR YOU
                </h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <span
                    className="text-5xl lg:text-6xl font-bold text-sage"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Custom
                  </span>
                </div>
                <p className="text-steel mb-12">We build & manage everything</p>

                {/* Features */}
                <ul className="space-y-6 mb-14">
                  {dfyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-5">
                      <div className="w-6 h-6 bg-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="group relative w-full px-12 py-6 bg-sage text-white font-bold uppercase tracking-wider transition-all hover:bg-sage-light"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Get Custom Quote
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DFY Stages Preview */}
        {mode === 'dfy' && (
          <div
            className={`relative opacity-0 ${isVisible ? 'animate-slide-up delay-500' : ''}`}
          >
            {/* Industrial frame */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-sage" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-safety" />

            <div className="relative bg-white p-12 lg:p-16 shadow-xl">
              <div className="text-center mb-16">
                <h3
                  className="text-2xl lg:text-3xl font-bold text-coal mb-5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  OUR INSTALLATION PROCESS
                </h3>
                <p className="text-steel text-lg max-w-2xl mx-auto">
                  We deliver your complete lead engine in {dfyStages.stages.length} structured stages,
                  each with clear deliverables and quality checkpoints.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
                {dfyStages.stages.map((stage, index) => (
                  <div
                    key={stage.id}
                    className="relative p-12 bg-ice border-l-4 border-sage hover:border-safety transition-colors duration-300 group"
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div
                        className="w-12 h-12 bg-coal flex items-center justify-center text-2xl font-bold text-safety group-hover:bg-sage group-hover:text-white transition-all duration-300"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h4 className="font-bold text-coal">{stage.name}</h4>
                        <p className="text-xs text-steel uppercase tracking-wider">{stage.week}</p>
                      </div>
                    </div>
                    <p className="text-sm text-steel mb-8">
                      {'tasks' in stage && stage.tasks ? stage.tasks.slice(0, 2).join(' • ') :
                       'cadence' in stage ? 'Ongoing optimization & scaling' : ''}
                    </p>
                    <div className="flex flex-wrap gap-5">
                      {stage.kpis.slice(0, 2).map((kpi, kpiIndex) => (
                        <span
                          key={kpiIndex}
                          className="text-xs bg-sage/10 text-sage px-4 py-1.5 font-medium"
                        >
                          {kpi.split(':')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center gap-5 px-14 py-6 bg-coal text-white font-bold uppercase tracking-wider transition-all hover:bg-sage"
                >
                  Start Your Installation
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Guarantee Bar */}
        <div
          className={`mt-28 opacity-0 ${isVisible ? 'animate-slide-up delay-600' : ''}`}
        >
          <div className="relative p-12 lg:p-14 bg-coal">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-safety -translate-x-2 -translate-y-2" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-sage translate-x-2 translate-y-2" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-6">
                <div className="w-18 h-18 bg-safety flex items-center justify-center flex-shrink-0" style={{ width: '72px', height: '72px' }}>
                  <svg className="w-8 h-8 text-coal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-xl lg:text-2xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    SATISFACTION GUARANTEED
                  </h3>
                  <p className="text-steel text-sm">
                    Not happy? We&apos;ll make it right or refund your investment.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {['No contracts', 'Cancel anytime', 'Full transparency'].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 px-8 py-5 bg-white/5 border border-white/10"
                  >
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

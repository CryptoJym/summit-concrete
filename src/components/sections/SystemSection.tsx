'use client';

import { useState, useEffect, useRef } from 'react';
import { systemStack } from '@/lib/content';

interface SystemSectionProps {
  mode: 'diy' | 'dfy';
}

const layerIcons = {
  acquisition: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  conversion: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  proof: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  trust: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

export function SystemSection({ mode }: SystemSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
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

  const layers = [
    {
      id: 'acquisition',
      name: 'Acquisition',
      tagline: 'Get Found',
      description: 'Meta Ads + Lead Forms',
      details: 'Targeted campaigns that reach homeowners actively searching for concrete services in your area.',
      color: 'safety',
      number: '01',
    },
    {
      id: 'conversion',
      name: 'Conversion',
      tagline: 'Convert Fast',
      description: 'Intake + Fast Response',
      details: 'Speed-to-lead system that captures inquiries and responds within minutes, not hours.',
      color: 'safety',
      number: '02',
    },
    {
      id: 'proof',
      name: 'Proof',
      tagline: 'Show Work',
      description: 'Photos + Videos + Content',
      details: 'Professional project documentation that showcases your craftsmanship and builds credibility.',
      color: 'sage',
      number: '03',
    },
    {
      id: 'trust',
      name: 'Trust',
      tagline: 'Build Authority',
      description: 'GBP + Reviews + Q&A',
      details: 'Optimized Google Business Profile with reviews and local SEO that dominates map pack.',
      color: 'sage',
      number: '04',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="system"
      className="relative py-40 lg:py-56 bg-coal overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Diagonal accent */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, var(--safety) 40%, var(--safety) 41%, transparent 41%)',
          }}
        />

        {/* Large text background */}
        <div
          className="absolute -left-20 top-1/2 -translate-y-1/2 text-[20rem] font-display leading-none text-white/[0.02] select-none pointer-events-none hidden xl:block whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          SYSTEM
        </div>
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <div
            className={`inline-flex items-center gap-4 mb-8 opacity-0 ${isVisible ? 'animate-slide-in-left' : ''}`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-safety" />
            <span className="text-safety text-sm font-semibold tracking-[0.2em] uppercase">
              The Engine
            </span>
          </div>

          <h2
            className={`hero-headline text-4xl sm:text-5xl lg:text-7xl text-white mb-8 opacity-0 ${isVisible ? 'animate-slide-up delay-100' : ''}`}
          >
            Four Layers.
            <br />
            <span className="text-steel">One System.</span>
          </h2>

          <p
            className={`text-xl text-steel max-w-2xl opacity-0 ${isVisible ? 'animate-slide-up delay-200' : ''}`}
          >
            Most contractors run ads but wonder why leads don&apos;t convert.
            The missing piece? A complete trust-building system that turns clicks into calls.
          </p>
        </div>

        {/* Two-Step Visual */}
        <div
          className={`grid md:grid-cols-2 gap-16 mb-40 opacity-0 ${isVisible ? 'animate-slide-up delay-300' : ''}`}
        >
          <div className="relative p-14 lg:p-16 bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-safety -translate-x-2 -translate-y-2" />
            <div className="flex items-start gap-8">
              <div
                className="w-16 h-16 flex items-center justify-center text-4xl font-bold text-safety"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                01
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-5">The Click</h3>
                <p className="text-steel leading-relaxed">
                  They see your ad. They click. But they&apos;re not ready to call yet—
                  they need to verify you&apos;re legit first.
                </p>
              </div>
            </div>
          </div>

          <div className="relative p-14 lg:p-16 bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-sage translate-x-2 translate-y-2" />
            <div className="flex items-start gap-8">
              <div
                className="w-16 h-16 flex items-center justify-center text-4xl font-bold text-sage"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                02
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-5">The Verification</h3>
                <p className="text-steel leading-relaxed">
                  They Google your name. Check your reviews. Look at your photos.
                  If everything checks out, <em>then</em> they call.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer Stack */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-safety via-steel/30 to-sage hidden md:block" />

          <div className="space-y-28 lg:space-y-24">
            {layers.map((layer, index) => {
              const isEven = index % 2 === 0;
              const Icon = layerIcons[layer.id as keyof typeof layerIcons];

              return (
                <div
                  key={layer.id}
                  className={`relative opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                  onMouseEnter={() => setActiveLayer(index)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-8 lg:left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-coal z-10 hidden md:block transition-all duration-300 ${
                      activeLayer === index ? 'scale-150' : ''
                    } ${layer.color === 'safety' ? 'bg-safety' : 'bg-sage'}`}
                  />

                  <div className={`grid lg:grid-cols-2 gap-16 lg:gap-28 items-center ${isEven ? '' : ''}`}>
                    {/* Content */}
                    <div
                      className={`${
                        isEven ? 'lg:text-right lg:pr-20' : 'lg:order-2 lg:pl-20'
                      } pl-20 md:pl-24 lg:pl-0`}
                    >
                      <div
                        className={`inline-flex items-center gap-5 mb-6 ${
                          isEven ? 'lg:flex-row-reverse' : ''
                        }`}
                      >
                        <span
                          className={`text-sm font-semibold tracking-[0.15em] uppercase ${
                            layer.color === 'safety' ? 'text-safety' : 'text-sage'
                          }`}
                        >
                          {layer.tagline}
                        </span>
                      </div>

                      <h3
                        className="text-3xl lg:text-4xl font-bold text-white mb-5"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {layer.name}
                      </h3>

                      <p className="text-lg text-steel mb-6">{layer.description}</p>
                      <p className="text-steel/70 text-sm leading-relaxed">{layer.details}</p>
                    </div>

                    {/* Visual Card */}
                    <div className={`${isEven ? 'lg:order-2' : ''} pl-20 md:pl-24 lg:pl-0`}>
                      <div
                        className={`relative group p-14 lg:p-16 transition-all duration-500 cursor-pointer ${
                          activeLayer === index
                            ? layer.color === 'safety'
                              ? 'bg-safety/10'
                              : 'bg-sage/10'
                            : 'bg-white/5'
                        }`}
                      >
                        {/* Corner accents */}
                        <div
                          className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 transition-all duration-300 ${
                            activeLayer === index ? 'opacity-100' : 'opacity-30'
                          } ${layer.color === 'safety' ? 'border-safety' : 'border-sage'}`}
                        />
                        <div
                          className={`absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 transition-all duration-300 ${
                            activeLayer === index ? 'opacity-100' : 'opacity-30'
                          } ${layer.color === 'safety' ? 'border-safety' : 'border-sage'}`}
                        />

                        <div className="flex items-center gap-14">
                          {/* Large Number */}
                          <div
                            className={`text-6xl font-bold transition-colors duration-300 ${
                              activeLayer === index
                                ? layer.color === 'safety'
                                  ? 'text-safety'
                                  : 'text-sage'
                                : 'text-white/20'
                            }`}
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {layer.number}
                          </div>

                          {/* Icon */}
                          <div
                            className={`transition-colors duration-300 ${
                              activeLayer === index
                                ? layer.color === 'safety'
                                  ? 'text-safety'
                                  : 'text-sage'
                                : 'text-white/40'
                            }`}
                          >
                            {Icon}
                          </div>

                          {/* Layer Name */}
                          <div>
                            <div className="text-white font-bold text-lg">{layer.name}</div>
                            <div className="text-steel text-sm">{layer.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-44 text-center opacity-0 ${isVisible ? 'animate-slide-up delay-700' : ''}`}
        >
          <div className="inline-flex items-center gap-12 px-20 py-14 bg-white/5 backdrop-blur-sm border border-white/10">
            {/* Layer indicators */}
            <div className="flex space-x-1">
              {layers.map((layer, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full border-2 border-coal flex items-center justify-center text-[10px] font-bold ${
                    layer.color === 'safety' ? 'bg-safety text-coal' : 'bg-sage text-white'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <span className="text-white font-medium">
              {mode === 'diy'
                ? 'Learn to build all 4 layers yourself'
                : 'We install all 4 layers for you'}
            </span>

            <svg
              className="w-5 h-5 text-safety"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

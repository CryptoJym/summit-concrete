'use client';

import { useState, useEffect, useRef } from 'react';
import { processSteps } from '@/lib/content';

const stepIcons = {
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z" />
      <path d="M9 8L15 14" />
      <path d="M15 8L9 14" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="14" width="18" height="7" />
      <path d="M5 14V10" />
      <path d="M19 14V10" />
      <path d="M12 14V7" />
      <path d="M8 14V12" />
      <path d="M16 14V12" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 12H20" />
      <path d="M12 4V20" />
      <path d="M8 4V8" />
      <path d="M16 4V8" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 3V21" />
      <path d="M8 7C8 7 10 9 12 9C14 9 16 7 16 7" />
      <path d="M6 12C6 12 9 15 12 15C15 15 18 12 18 12" />
      <path d="M4 17C4 17 8 21 12 21C16 21 20 17 20 17" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  ),
};

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = sectionRect.height;
        const scrolled = window.innerHeight - sectionRect.top;
        const progressPercent = Math.min(Math.max((scrolled / sectionHeight) * 100, 0), 100);
        setProgress(progressPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-36 lg:py-48 bg-ice overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(var(--coal) 1px, transparent 1px),
              linear-gradient(90deg, var(--coal) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Diagonal accent */}
        <div
          className="absolute bottom-0 left-0 w-full h-full opacity-[0.015]"
          style={{
            background: 'linear-gradient(-45deg, transparent 60%, var(--sage) 60%, var(--sage) 61%, transparent 61%)',
          }}
        />

        {/* Large text background */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[15rem] font-display leading-none text-coal/[0.02] select-none pointer-events-none hidden xl:block whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          PROCESS
        </div>
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-28">
          <div
            className={`inline-flex items-center gap-4 mb-8 opacity-0 ${isVisible ? 'animate-slide-in-left' : ''}`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sage" />
            <span className="text-sage text-sm font-semibold tracking-[0.2em] uppercase">
              Our Method
            </span>
          </div>

          <h2
            className={`hero-headline text-4xl sm:text-5xl lg:text-7xl text-coal mb-8 opacity-0 ${isVisible ? 'animate-slide-up delay-100' : ''}`}
          >
            {processSteps.headline.split(' ').slice(0, 3).join(' ')}
            <br />
            <span className="text-steel">{processSteps.headline.split(' ').slice(3).join(' ')}</span>
          </h2>

          <p
            className={`text-xl text-steel max-w-2xl opacity-0 ${isVisible ? 'animate-slide-up delay-200' : ''}`}
          >
            {processSteps.subheadline}
          </p>
        </div>

        {/* Progress Bar - Mobile */}
        <div className="lg:hidden mb-20">
          <div className="relative h-1.5 bg-concrete rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-safety to-sage transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-4 text-xs text-steel">
            <span>Start</span>
            <span>Complete</span>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Timeline Line - Desktop */}
          <div className="absolute left-12 lg:left-1/2 top-0 bottom-0 w-px hidden md:block">
            <div className="absolute inset-0 bg-concrete" />
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-safety via-sage to-sage transition-all duration-300"
              style={{ height: `${progress}%` }}
            />
          </div>

          <div className="space-y-32 lg:space-y-44">
            {processSteps.steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = stepIcons[step.number as keyof typeof stepIcons];

              return (
                <div
                  key={step.number}
                  className={`relative opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
                  style={{ animationDelay: `${300 + index * 150}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-12 lg:left-1/2 top-0 w-6 h-6 -translate-x-1/2 rounded-full border-4 border-ice z-10 hidden md:flex items-center justify-center transition-all duration-500 ${activeStep === index ? 'scale-150' : ''
                      } ${progress > (index / processSteps.steps.length) * 100 ? 'bg-sage' : 'bg-concrete'}`}
                  />

                  <div className={`grid lg:grid-cols-2 gap-16 lg:gap-32 items-center ${isEven ? '' : ''}`}>
                    {/* Content Side */}
                    <div
                      className={`${isEven ? 'lg:text-right lg:pr-20' : 'lg:order-2 lg:pl-20'
                        } pl-24 md:pl-28 lg:pl-0`}
                    >
                      {/* Step Label */}
                      <div
                        className={`inline-flex items-center gap-5 mb-8 ${isEven ? 'lg:flex-row-reverse' : ''
                          }`}
                      >
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sage">
                          Step {step.number}
                        </span>
                        <div className="w-12 h-px bg-sage/30" />
                      </div>

                      <h3
                        className="text-2xl lg:text-3xl font-bold text-coal mb-8"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {step.title}
                      </h3>

                      <p className="text-steel leading-loose max-w-md lg:max-w-none text-base lg:text-lg">
                        {step.description}
                      </p>
                    </div>

                    {/* Visual Card Side */}
                    <div className={`${isEven ? 'lg:order-2' : ''} pl-24 md:pl-28 lg:pl-0`}>
                      <div
                        className={`relative group transition-all duration-500 cursor-pointer ${activeStep === index ? 'transform lg:-translate-y-2' : ''
                          }`}
                      >
                        {/* Card */}
                        <div
                          className={`relative p-14 lg:p-16 transition-all duration-300 ${activeStep === index
                            ? 'bg-coal shadow-2xl'
                            : 'bg-white shadow-lg hover:shadow-xl'
                            }`}
                        >
                          {/* Industrial corner accents */}
                          <div
                            className={`absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 -translate-x-2 -translate-y-2 transition-all duration-300 ${activeStep === index ? 'border-safety opacity-100' : 'border-sage opacity-40'
                              }`}
                          />
                          <div
                            className={`absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 translate-x-2 translate-y-2 transition-all duration-300 ${activeStep === index ? 'border-sage opacity-100' : 'border-safety opacity-40'
                              }`}
                          />

                          <div className="flex items-center gap-12">
                            {/* Large Number */}
                            <div
                              className={`text-7xl lg:text-8xl font-bold transition-colors duration-300 ${activeStep === index ? 'text-safety' : 'text-concrete'
                                }`}
                              style={{ fontFamily: 'var(--font-display)' }}
                            >
                              0{step.number}
                            </div>

                            <div className="flex-1">
                              {/* Icon */}
                              <div
                                className={`mb-6 transition-colors duration-300 ${activeStep === index ? 'text-safety' : 'text-sage'
                                  }`}
                              >
                                {Icon}
                              </div>

                              {/* Title */}
                              <div
                                className={`text-lg font-bold transition-colors duration-300 ${activeStep === index ? 'text-white' : 'text-coal'
                                  }`}
                              >
                                {step.title}
                              </div>
                            </div>
                          </div>

                          {/* Progress indicator */}
                          <div className="mt-12 pt-8 border-t border-current/10">
                            <div className="flex items-center gap-6">
                              <div
                                className={`flex-1 h-1 rounded-full overflow-hidden ${activeStep === index ? 'bg-white/20' : 'bg-concrete'
                                  }`}
                              >
                                <div
                                  className="h-full bg-sage transition-all duration-500"
                                  style={{
                                    width: progress > (index / processSteps.steps.length) * 100 ? '100%' : '0%',
                                  }}
                                />
                              </div>
                              <span
                                className={`text-xs font-medium transition-colors duration-300 ${activeStep === index ? 'text-white/60' : 'text-steel'
                                  }`}
                              >
                                {step.number}/{processSteps.steps.length}
                              </span>
                            </div>
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

        {/* Bottom Trust Bar - REDESIGNED */}
        <div
          className={`mt-48 opacity-0 ${isVisible ? 'animate-slide-up delay-700' : ''}`}
        >
          <div className="relative bg-coal p-16 lg:p-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-safety/30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-sage/30" />

            <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
              <div className="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8">
                <span className="text-safety text-sm font-bold uppercase tracking-[0.2em]">Our Guarantee</span>
              </div>
              <h3
                className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                EVERY JOB FOLLOWS OUR <span className="text-safety">VERIFIED PROCESS</span>
              </h3>
              <p className="text-steel text-xl">We don&apos;t cut corners. From tear-out to finish, your driveway is built to last.</p>
            </div>

            {/* Grid layout for checkpoints with generous breathing room */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { label: 'Proper Base Prep', desc: 'Compacted road base' },
                { label: 'Clean Forming', desc: 'Straight, crisp lines' },
                { label: 'Correct Joints', desc: 'Control cracking' },
                { label: 'Proper Cure', desc: 'Sealed for longevity' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center p-12 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-sage"
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
                  <span className="text-white text-lg font-bold uppercase tracking-wide mb-2">{item.label}</span>
                  <span className="text-steel text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

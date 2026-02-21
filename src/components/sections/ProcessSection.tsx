'use client';

import { useState, useEffect, useRef } from 'react';
import { processSteps } from '@/lib/content';

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="process" className="py-20 lg:py-28 bg-base-alt">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className={`text-sm font-semibold text-amber tracking-wide uppercase mb-4 opacity-0 ${isVisible ? 'animate-in' : ''}`}>
            Our Process
          </p>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4 opacity-0 ${isVisible ? 'animate-in delay-1' : ''}`}>
            {processSteps.headline}
          </h2>
          <p className={`text-lg text-ink-faded opacity-0 ${isVisible ? 'animate-in delay-2' : ''}`}>
            {processSteps.subheadline}
          </p>
        </div>

        {/* Steps */}
        <div>
          {processSteps.steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-12 gap-4 lg:gap-12 items-baseline py-8 lg:py-10 border-t border-edge first:border-t-0 opacity-0 ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              <div className="lg:col-span-1">
                <span className="text-4xl lg:text-5xl font-bold text-edge font-display">
                  {String(step.number).padStart(2, '0')}
                </span>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-xl font-bold text-ink font-display">{step.title}</h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-ink-faded leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className={`mt-16 bg-ink p-10 lg:p-14 opacity-0 ${isVisible ? 'animate-in delay-5' : ''}`}>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-amber tracking-wide uppercase mb-3">Our Guarantee</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-white font-display">
              Every Job Follows Our Verified Process
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Proper Base Prep', desc: 'Compacted road base' },
              { label: 'Clean Forming', desc: 'Straight, crisp lines' },
              { label: 'Correct Joints', desc: 'Control cracking' },
              { label: 'Proper Cure', desc: 'Sealed for longevity' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-semibold text-white block">{item.label}</span>
                  <span className="text-sm text-white/50">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

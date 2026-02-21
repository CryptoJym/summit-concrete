'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
  { title: 'Tear-Out & Haul', desc: 'Full demo and haul-away included.' },
  { title: 'Base Prep', desc: 'Graded and mechanically compacted.' },
  { title: 'Form & Pour', desc: 'Clean forms, reinforcement, pour to spec.' },
  { title: 'Finish & Cure', desc: 'Sealed and cured for longevity.' },
];

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
    <section ref={ref} id="process" className="py-24 lg:py-36 bg-base-alt">
      <div className="container-main">
        <div className="max-w-xl mb-16 lg:mb-20">
          <p className={`text-sm font-semibold text-amber tracking-wide uppercase mb-5 opacity-0 ${isVisible ? 'animate-in' : ''}`}>
            How It Works
          </p>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight opacity-0 ${isVisible ? 'animate-in delay-1' : ''}`}>
            Four steps to new concrete.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`opacity-0 ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <span className="text-6xl font-bold text-ink/8 font-display block mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
              <p className="text-ink-faded leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

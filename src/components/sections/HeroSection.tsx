'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-base overflow-hidden">
      {/* Mobile background */}
      <div className="absolute inset-0 lg:hidden">
        <Image src="/images/hero/hero-workers.png" alt="" fill className="object-cover opacity-10" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/95 to-base" />
      </div>

      <div className="container-main relative z-10 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className={`text-sm font-semibold text-amber tracking-wide uppercase mb-6 opacity-0 ${isLoaded ? 'animate-in' : ''}`}>
              Utah&apos;s Trusted Concrete Contractor
            </p>

            <h1 className={`font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-ink leading-[0.95] tracking-tight mb-8 opacity-0 ${isLoaded ? 'animate-in delay-1' : ''}`}>
              Tear-Out &<br />
              <span className="text-amber">Repour</span><br />
              Done Right.
            </h1>

            <p className={`text-lg lg:text-xl text-ink-faded max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 ${isLoaded ? 'animate-in delay-2' : ''}`}>
              We turn cracked, ugly concrete into driveways you&apos;re proud of. Free estimates. Same-day response.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 opacity-0 ${isLoaded ? 'animate-in delay-3' : ''}`}>
              <button
                onClick={() => scrollTo('contact')}
                className="group px-8 py-4 bg-amber text-white font-semibold hover:bg-amber-hover transition-colors flex items-center justify-center gap-2"
              >
                Get Your Free Estimate
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('process')}
                className="px-8 py-4 border border-edge text-ink font-semibold hover:bg-base-alt transition-colors"
              >
                See How It Works
              </button>
            </div>

            <div className={`flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start opacity-0 ${isLoaded ? 'animate-in delay-4' : ''}`}>
              {['Licensed & Insured', 'Free Estimates', 'Same-Day Response'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-ink-faded">
                  <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className={`relative aspect-[3/4] max-w-md mx-auto opacity-0 ${isLoaded ? 'animate-in delay-2' : ''}`}>
              <div className="relative h-full w-full overflow-hidden shadow-2xl shadow-ink/10">
                <Image src="/images/hero/hero-workers.png" alt="Professional concrete work by Summit Concrete" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>

              {/* Rating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white py-4 px-5 shadow-xl flex items-center gap-4">
                <div>
                  <span className="text-2xl font-bold text-ink font-display">4.9</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-3 h-3 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="h-8 w-px bg-edge" />
                <div>
                  <span className="text-xs font-bold text-ink">200+ Reviews</span>
                  <span className="block text-[10px] text-ink-faded">Google Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container-main relative z-10">
        <div className={`border-t border-edge py-10 opacity-0 ${isLoaded ? 'animate-in delay-5' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '4.9', label: 'Star Rating' },
              { value: '4', label: 'Counties Served' },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-ink font-display">{stat.value}</div>
                <div className="text-xs text-ink-faded uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

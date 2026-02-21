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
    <>
      <section id="hero" className="relative bg-base overflow-hidden">
        {/* Mobile background */}
        <div className="absolute inset-0 lg:hidden">
          <Image src="/images/hero/hero-workers.png" alt="" fill className="object-cover opacity-10" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/95 to-base" />
        </div>

        <div className="container-main relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[75vh]">
            {/* Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className={`text-sm font-semibold text-amber tracking-wide uppercase mb-8 opacity-0 ${isLoaded ? 'animate-in' : ''}`}>
                Utah&apos;s Trusted Concrete Contractor
              </p>

              <h1 className={`font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-ink leading-[1.08] tracking-tight mb-10 opacity-0 ${isLoaded ? 'animate-in delay-1' : ''}`}>
                Tear-Out &<br />
                <span className="text-amber">Repour</span><br />
                Done Right.
              </h1>

              <p className={`text-lg lg:text-xl text-ink-faded max-w-md mx-auto lg:mx-0 mb-14 leading-relaxed opacity-0 ${isLoaded ? 'animate-in delay-2' : ''}`}>
                We replace cracked concrete with driveways you&apos;re proud of.
              </p>

              <div className={`flex flex-col sm:flex-row gap-5 justify-center lg:justify-start opacity-0 ${isLoaded ? 'animate-in delay-3' : ''}`}>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-10 py-4 bg-amber text-white font-semibold text-lg rounded-lg hover:bg-amber-hover transition-all duration-300 hover:shadow-lg hover:shadow-amber/20"
                >
                  Get Free Estimate
                </button>
                <button
                  onClick={() => scrollTo('process')}
                  className="px-10 py-4 border-2 border-edge text-ink font-semibold rounded-lg hover:bg-base-alt hover:border-ink-faded/30 transition-all duration-300"
                >
                  How It Works
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className={`relative aspect-[3/4] max-w-md mx-auto opacity-0 ${isLoaded ? 'animate-in delay-2' : ''}`}>
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-ink/15">
                  <Image src="/images/hero/hero-workers.png" alt="Professional concrete work by Summit Concrete" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent" />
                </div>

                {/* Rating badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-xl py-5 px-6 shadow-xl shadow-ink/10 flex items-center gap-5">
                  <div>
                    <span className="text-3xl font-bold text-ink font-display">4.9</span>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-3.5 h-3.5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="h-10 w-px bg-edge" />
                  <div>
                    <span className="text-sm font-bold text-ink">200+ Reviews</span>
                    <span className="block text-xs text-ink-faded mt-0.5">Google Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div className={`bg-ink opacity-0 ${isLoaded ? 'animate-in delay-5' : ''}`}>
        <div className="container-main py-14 lg:py-16">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '4.9', label: 'Star Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-bold text-white font-display">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

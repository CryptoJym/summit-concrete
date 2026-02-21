'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/gallery/driveway-after-1.png', label: 'Driveway — Draper' },
  { src: '/images/gallery/patio-after-1.png', label: 'Patio — Park City' },
  { src: '/images/gallery/rvpad-after-1.png', label: 'RV Pad — Lehi' },
  { src: '/images/gallery/sidewalk-after-1.png', label: 'Walkway — Murray' },
];

export function ProofSection() {
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
    <section ref={ref} id="proof" className="py-24 lg:py-36 bg-base">
      <div className="container-main">
        <div className="max-w-xl mb-16 lg:mb-20">
          <p className={`text-sm font-semibold text-amber tracking-wide uppercase mb-5 opacity-0 ${isVisible ? 'animate-in' : ''}`}>
            Recent Work
          </p>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight opacity-0 ${isVisible ? 'animate-in delay-1' : ''}`}>
            Projects across Utah.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-base-alt shadow-lg shadow-ink/5 opacity-0 ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ink/60 to-transparent">
                <p className="text-white font-medium">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

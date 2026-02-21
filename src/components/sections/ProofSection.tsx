'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/images/gallery/driveway-after-1.png', type: 'Driveway', city: 'Draper', description: 'Complete driveway replacement' },
  { id: 2, src: '/images/gallery/driveway-before-1.png', type: 'Driveway', city: 'Sandy', description: 'Before: Cracked concrete', isBefore: true },
  { id: 3, src: '/images/gallery/patio-after-1.png', type: 'Patio', city: 'Park City', description: 'Stamped patio installation' },
  { id: 4, src: '/images/gallery/rvpad-after-1.png', type: 'RV Pad', city: 'Lehi', description: 'Heavy-duty RV pad' },
  { id: 5, src: '/images/gallery/sidewalk-after-1.png', type: 'Sidewalk', city: 'Murray', description: 'Decorative walkway' },
  { id: 6, src: '/images/gallery/demolition-1.png', type: 'Demolition', city: 'Orem', description: 'Professional concrete removal' },
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
    <section ref={ref} id="proof" className="py-20 lg:py-28 bg-base">
      <div className="container-main">
        <div className="max-w-2xl mb-12">
          <p className={`text-sm font-semibold text-amber tracking-wide uppercase mb-4 opacity-0 ${isVisible ? 'animate-in' : ''}`}>
            Recent Projects
          </p>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight mb-4 opacity-0 ${isVisible ? 'animate-in delay-1' : ''}`}>
            Our Work Across Utah
          </h2>
          <p className={`text-lg text-ink-faded opacity-0 ${isVisible ? 'animate-in delay-2' : ''}`}>
            Before/after photos from real jobs in your area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {galleryImages.map((image, i) => (
            <div
              key={image.id}
              className={`group relative opacity-0 ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${300 + i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-base-alt">
                <Image
                  src={image.src}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                {image.isBefore && (
                  <span className="absolute top-3 left-3 bg-ink/80 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                    Before
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{image.description}</p>
                  <p className="text-white/70 text-xs mt-1">{image.city}, UT</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-ink p-10 lg:p-14 opacity-0 ${isVisible ? 'animate-in delay-5' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: 'Projects Completed' },
              { value: '4', label: 'Counties Served' },
              { value: '15+', label: 'Years Experience' },
              { value: '4.9', label: 'Star Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-bold text-amber font-display">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

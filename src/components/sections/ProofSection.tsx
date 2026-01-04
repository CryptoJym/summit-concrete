'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { proofGallery } from '@/lib/content';

// Gallery images data with actual photos
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/driveway-after-1.png',
    type: 'Driveway',
    city: 'Draper',
    description: 'Complete driveway tear-out and repour',
    category: 'driveways',
  },
  {
    id: 2,
    src: '/images/gallery/driveway-before-1.png',
    type: 'Driveway',
    city: 'Sandy',
    description: 'Before: Cracked and damaged concrete',
    category: 'driveways',
    isBefore: true,
  },
  {
    id: 3,
    src: '/images/gallery/patio-after-1.png',
    type: 'Patio',
    city: 'Park City',
    description: 'Stamped concrete patio installation',
    category: 'patios',
  },
  {
    id: 4,
    src: '/images/gallery/rvpad-after-1.png',
    type: 'RV Pad',
    city: 'Lehi',
    description: 'Heavy-duty RV parking pad',
    category: 'rvpads',
  },
  {
    id: 5,
    src: '/images/gallery/sidewalk-after-1.png',
    type: 'Sidewalk',
    city: 'Murray',
    description: 'Decorative walkway installation',
    category: 'sidewalks',
  },
  {
    id: 6,
    src: '/images/gallery/demolition-1.png',
    type: 'Demolition',
    city: 'Orem',
    description: 'Professional concrete removal',
    category: 'driveways',
  },
];

export function ProofSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(proofGallery.categories[0].id);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
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

  // Filter images by active category
  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const stats = [
    { value: '200+', label: 'Projects', sublabel: 'Completed' },
    { value: '4', label: 'Counties', sublabel: 'Served' },
    { value: '15+', label: 'Years', sublabel: 'Experience' },
    { value: '4.9', label: 'Rating', sublabel: '200+ Reviews' },
  ];

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="relative py-36 lg:py-48 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--coal) 0,
              var(--coal) 1px,
              transparent 0,
              transparent 50%
            )`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Large text background */}
        <div
          className="absolute -left-10 top-1/3 text-[18rem] font-display leading-none text-coal/[0.015] select-none pointer-events-none hidden xl:block whitespace-nowrap"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          PROOF
        </div>
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <div
            className={`inline-flex items-center gap-3 mb-6 opacity-0 ${isVisible ? 'animate-slide-in-left' : ''}`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-safety" />
            <span className="text-safety text-sm font-semibold tracking-[0.2em] uppercase">
              Our Work
            </span>
          </div>

          <h2
            className={`hero-headline text-4xl sm:text-5xl lg:text-7xl text-coal mb-6 opacity-0 ${isVisible ? 'animate-slide-up delay-100' : ''}`}
          >
            {proofGallery.headline.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="text-steel">{proofGallery.headline.split(' ').slice(2).join(' ')}</span>
          </h2>

          <p
            className={`text-xl text-steel max-w-2xl opacity-0 ${isVisible ? 'animate-slide-up delay-200' : ''}`}
          >
            {proofGallery.subheadline}
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap gap-6 mb-16 opacity-0 ${isVisible ? 'animate-slide-up delay-300' : ''}`}
        >
          {proofGallery.categories.map((category, i) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-8 py-4 font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-coal text-white'
                  : 'bg-concrete text-coal hover:bg-coal/10'
              }`}
            >
              {/* Corner accent on active */}
              {activeCategory === category.id && (
                <>
                  <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-safety -translate-x-1 -translate-y-1" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-safety translate-x-1 translate-y-1" />
                </>
              )}
              <span className="relative z-10">{category.label}</span>
              <span
                className={`ml-2 text-xs ${
                  activeCategory === category.id ? 'text-safety' : 'text-steel'
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-28">
          {(filteredImages.length > 0 ? filteredImages : galleryImages).map((image, index) => (
            <div
              key={image.id}
              className={`group relative cursor-pointer opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Card Container */}
              <div
                className={`relative transition-all duration-500 ${
                  hoveredImage === index ? 'transform -translate-y-2' : ''
                }`}
              >
                {/* Industrial Frame */}
                <div
                  className={`absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 transition-all duration-300 z-20 ${
                    hoveredImage === index ? 'border-safety opacity-100' : 'border-sage opacity-30'
                  }`}
                />
                <div
                  className={`absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 transition-all duration-300 z-20 ${
                    hoveredImage === index ? 'border-sage opacity-100' : 'border-safety opacity-30'
                  }`}
                />

                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-concrete overflow-hidden">
                  {/* Actual Image */}
                  <Image
                    src={image.src}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Before Badge */}
                  {'isBefore' in image && image.isBefore && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-coal/80 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
                        Before
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coal/60 via-transparent to-transparent" />

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-coal/80 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="text-center">
                      <div
                        className="text-6xl font-bold text-safety mb-2"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        0{image.id}
                      </div>
                      <span className="text-white font-medium uppercase tracking-wider text-sm">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info Bar */}
                <div
                  className={`p-6 transition-colors duration-300 ${
                    hoveredImage === index ? 'bg-coal' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p
                        className={`font-bold transition-colors duration-300 ${
                          hoveredImage === index ? 'text-white' : 'text-coal'
                        }`}
                      >
                        {image.description}
                      </p>
                      <div
                        className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                          hoveredImage === index ? 'text-steel' : 'text-steel'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{image.city}, UT</span>
                      </div>
                    </div>
                    <div
                      className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
                        hoveredImage === index ? 'bg-sage text-white' : 'bg-sage/10 text-sage'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* City Albums Section */}
        <div
          className={`relative mb-24 opacity-0 ${isVisible ? 'animate-slide-up delay-600' : ''}`}
        >
          <div className="relative p-12 lg:p-16 bg-ice">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-sage -translate-x-2 -translate-y-2" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-safety translate-x-2 translate-y-2" />

            <h3
              className="text-2xl lg:text-3xl font-bold text-coal mb-10 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              BROWSE BY CITY
            </h3>

            <div className="flex flex-wrap justify-center gap-10">
              {proofGallery.cityAlbums.map((album, i) => (
                <button
                  key={album.city}
                  className="group flex items-center gap-6 bg-white px-12 py-7 shadow-sm hover:shadow-lg hover:bg-coal hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-sage group-hover:text-safety transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{album.city}</span>
                  <span className="text-xs px-2 py-0.5 bg-concrete group-hover:bg-white/20 transition-colors">
                    {album.jobs} jobs
                  </span>
                  <svg
                    className="w-4 h-4 text-steel group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`opacity-0 ${isVisible ? 'animate-slide-up delay-700' : ''}`}
        >
          <div className="relative p-12 lg:p-16 bg-coal">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-safety -translate-x-2 -translate-y-2" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-sage translate-x-2 translate-y-2" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center relative py-4"
                >
                  {/* Vertical divider */}
                  {index > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
                  )}

                  <div
                    className="text-5xl lg:text-6xl font-bold text-safety mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold uppercase tracking-wider text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-steel text-sm">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

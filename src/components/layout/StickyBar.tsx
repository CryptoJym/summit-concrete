'use client';

import { useState, useEffect } from 'react';
import { brand } from '@/lib/content';

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector('footer');
      const footerVisible = footer
        ? footer.getBoundingClientRect().top < window.innerHeight
        : false;
      setIsVisible(window.scrollY > 600 && !footerVisible);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass-dark border-t border-white/10">
      <div className="container-main py-3">
        <div className="flex items-center justify-between gap-4">
          <a
            href={`tel:${brand.phone}`}
            className="flex items-center gap-3 text-white hover:text-amber transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="hidden sm:block font-semibold">
              {brand.phone}
            </span>
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el)
                window.scrollTo({
                  top: el.offsetTop - 80,
                  behavior: 'smooth',
                });
            }}
            className="px-6 py-2.5 bg-amber text-white font-semibold text-sm rounded-lg hover:bg-amber-hover transition-all duration-300"
          >
            Get Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
}

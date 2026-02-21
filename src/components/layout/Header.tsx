'use client';

import { useState, useEffect } from 'react';
import { brand } from '@/lib/content';

export function Header({ activeSection = '' }: { activeSection?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [
    { id: 'process', label: 'Process' },
    { id: 'proof', label: 'Our Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_var(--edge)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                isScrolled ? 'bg-amber text-white' : 'bg-ink text-white'
              }`}
            >
              <span className="font-display">SC</span>
            </div>
            <span className="hidden sm:block text-lg font-bold tracking-tight font-display">
              Summit Concrete
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-[13px] font-medium uppercase tracking-wider transition-colors ${
                  activeSection === l.id ? 'text-amber' : 'text-ink-faded hover:text-ink'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${brand.phone}`}
              className="hidden md:block text-sm font-semibold text-ink hover:text-amber transition-colors"
            >
              {brand.phone}
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:block px-5 py-2.5 bg-amber text-white text-sm font-semibold rounded-lg hover:bg-amber-hover transition-all duration-300 hover:shadow-md hover:shadow-amber/20"
            >
              Free Estimate
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-5 h-3.5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-ink transition-all origin-center ${
                    menuOpen ? 'rotate-45 translate-y-[6px]' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-ink transition-all ${menuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-0.5 bg-ink transition-all origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-white shadow-xl p-8 pt-24 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-ink-faded hover:text-ink"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="space-y-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                  activeSection === l.id ? 'text-amber bg-amber/5' : 'text-ink hover:bg-base-alt'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-edge space-y-4">
            <a href={`tel:${brand.phone}`} className="block text-center text-sm font-semibold text-ink">
              {brand.phone}
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-3 bg-amber text-white text-sm font-semibold rounded-lg hover:bg-amber-hover transition-all duration-300"
            >
              Free Estimate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

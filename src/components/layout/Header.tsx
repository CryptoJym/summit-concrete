'use client';

import { useState, useEffect } from 'react';
import { navigation, brand } from '@/lib/content';
import { ModeToggle } from '@/components/ui/ModeToggle';

interface HeaderProps {
  mode: 'diy' | 'dfy';
  onModeChange: (mode: 'diy' | 'dfy') => void;
  activeSection: string;
  onOpenPlaybook: () => void;
}

export function Header({ mode, onModeChange, activeSection, onOpenPlaybook }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.mobile-menu-container')) {
          setIsMobileMenuOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled
            ? 'bg-coal/95 backdrop-blur-md shadow-2xl py-4'
            : 'bg-transparent py-6'
          }
        `}
      >
        {/* Industrial Top Accent Line */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(90deg, var(--safety) 0%, var(--safety) 30%, var(--sage) 70%, var(--sage) 100%)',
          }}
        />

        <div className="container-main">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              {/* Industrial Logo Mark */}
              <div className="relative">
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-safety" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-sage" />

                <div
                  className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                    isScrolled ? 'bg-safety' : 'bg-coal'
                  }`}
                >
                  <span
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      isScrolled ? 'text-coal' : 'text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    SC
                  </span>
                </div>
              </div>

              <div className="hidden sm:block">
                <span
                  className={`block text-lg font-bold tracking-wide transition-colors duration-300 ${
                    isScrolled ? 'text-white' : 'text-coal'
                  }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {brand.name.toUpperCase()}
                </span>
                <span
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-white/60' : 'text-steel'
                  }`}
                >
                  Utah Concrete Pros
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="relative flex items-center gap-2">
                {navigation.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    className="relative px-7 py-4 group"
                  >
                    <span
                      className={`relative z-10 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                        activeSection === item.id
                          ? isScrolled ? 'text-safety' : 'text-safety'
                          : isScrolled
                            ? 'text-white/70 hover:text-white'
                            : 'text-coal/70 hover:text-coal'
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-safety" />
                    )}

                    {/* Hover indicator */}
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-sage transition-all duration-300 ${
                        hoveredNav === item.id && activeSection !== item.id ? 'w-8 opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-10">
              {/* Mode Toggle - Desktop */}
              <div className="hidden md:block">
                <ModeToggle mode={mode} onModeChange={onModeChange} />
              </div>

              {/* Divider */}
              <div
                className={`hidden md:block w-px h-10 transition-colors duration-300 ${
                  isScrolled ? 'bg-white/20' : 'bg-coal/20'
                }`}
              />

              {/* CTA Button */}
              <button
                onClick={mode === 'diy' ? onOpenPlaybook : () => scrollToSection('contact')}
                className={`hidden sm:flex relative group px-10 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                  mode === 'diy'
                    ? 'bg-safety text-coal hover:bg-safety/90'
                    : 'bg-sage text-white hover:bg-sage/90'
                }`}
              >
                {/* Button corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-coal/30 -translate-x-0.5 -translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-coal/30 translate-x-0.5 translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="relative z-10">
                  {mode === 'diy' ? 'Get Playbook' : 'Get Quote'}
                </span>
              </button>

              {/* Phone */}
              <a
                href={`tel:${brand.phone}`}
                className={`hidden xl:flex items-center gap-3 font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-white hover:text-safety' : 'text-coal hover:text-safety'
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
                  isScrolled ? 'bg-white/10' : 'bg-coal/5'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="hidden 2xl:block">{brand.phone}</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className={`lg:hidden relative w-12 h-12 flex items-center justify-center transition-colors duration-300 mobile-menu-container ${
                  isScrolled ? 'bg-white/10' : 'bg-coal/5'
                }`}
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 transition-all duration-300 origin-center ${
                      isScrolled ? 'bg-white' : 'bg-coal'
                    } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                  />
                  <span
                    className={`block h-0.5 transition-all duration-300 ${
                      isScrolled ? 'bg-white' : 'bg-coal'
                    } ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`}
                  />
                  <span
                    className={`block h-0.5 transition-all duration-300 origin-center ${
                      isScrolled ? 'bg-white' : 'bg-coal'
                    } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-coal/50 backdrop-blur-sm z-[45] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-coal z-50 lg:hidden transition-transform duration-500 ease-out mobile-menu-container ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Industrial corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-safety" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-sage" />

        <div className="p-12 h-full flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <div className="mb-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-safety flex items-center justify-center">
                <span className="text-coal text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>SC</span>
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                {brand.name.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Mode Toggle */}
          <div className="mb-12 flex justify-center">
            <ModeToggle mode={mode} onModeChange={onModeChange} />
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <div className="space-y-3">
              {navigation.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-5 py-5 text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white/10 text-safety'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-semibold uppercase tracking-wider">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-safety" />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="pt-12 border-t border-white/10 space-y-6">
            <button
              onClick={mode === 'diy' ? onOpenPlaybook : () => scrollToSection('contact')}
              className={`w-full py-5 font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                mode === 'diy'
                  ? 'bg-safety text-coal hover:bg-safety/90'
                  : 'bg-sage text-white hover:bg-sage/90'
              }`}
            >
              {mode === 'diy' ? 'Get Free Playbook' : 'Get Custom Quote'}
            </button>

            <a
              href={`tel:${brand.phone}`}
              className="flex items-center justify-center gap-4 py-5 text-white/80 hover:text-safety transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">{brand.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

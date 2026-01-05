import { useState, useEffect } from 'react';

interface StickyBarProps {
  onOpenPlaybook?: () => void;
}

export function StickyBar({ onOpenPlaybook }: StickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const footerRect = footer?.getBoundingClientRect();
      const isFooterVisible = footerRect ? footerRect.top < window.innerHeight : false;

      // Show after hero (600px) AND hide if footer is visible
      setIsVisible(window.scrollY > 600 && !isFooterVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-border animate-slide-up">
      <div className="container-main py-3">
        <div className="container-main h-20 md:h-24 flex items-center justify-between gap-4">
          {/* Left Side: Offer */}
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="hidden sm:flex flex-col">
              <span className="text-xs md:text-sm text-safety font-bold uppercase tracking-widest">
                Limited Availability
              </span>
              <span className="text-sm md:text-lg font-bold text-white leading-none">
                Get Your Free Estimate Today
              </span>
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:801-555-0123"
              className="flex items-center gap-3 text-white hover:text-safety transition-colors group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-safety group-hover:text-coal transition-all">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="hidden md:block font-bold text-lg">(801) 555-0123</span>
            </a>

            <button
              className="bg-safety text-coal !px-12 py-3 md:py-4 font-bold uppercase tracking-wider hover:bg-safety-light transition-colors shadow-lg shadow-safety/20 whitespace-nowrap"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

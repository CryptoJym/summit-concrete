'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { PhoneIcon, ArrowRightIcon } from '@/components/ui/Icons';
import { brand } from '@/lib/content';

interface StickyBarProps {
  mode: 'diy' | 'dfy';
  onOpenPlaybook: () => void;
}

export function StickyBar({ mode, onOpenPlaybook }: StickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-border animate-slide-up">
      <div className="container-main py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Message */}
          <div className="hidden sm:block">
            <p className="text-sm text-coal font-medium">
              {mode === 'diy'
                ? 'Ready to build your lead engine?'
                : 'Ready for a complete lead system?'}
            </p>
            <p className="text-xs text-steel">
              {mode === 'diy'
                ? 'Get the complete DIY playbook free'
                : 'We handle everything — you get qualified leads'}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-coal text-coal font-medium hover:bg-coal/5 transition-colors"
            >
              <PhoneIcon size={18} />
              <span className="hidden md:inline">Call Now</span>
            </a>

            <Button
              variant={mode === 'diy' ? 'safety' : 'primary'}
              onClick={mode === 'diy' ? onOpenPlaybook : scrollToContact}
              icon={<ArrowRightIcon size={18} />}
              className="flex-1 sm:flex-none"
            >
              {mode === 'diy' ? 'Get DIY Steps' : 'Get Install Quote'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

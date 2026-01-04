'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyBar } from '@/components/layout/StickyBar';
import {
  HeroSection,
  SystemSection,
  ProcessSection,
  ProofSection,
  PricingSection,
  ContactSection,
} from '@/components/sections';
import { PlaybookModal } from '@/components/PlaybookModal';

export default function Home() {
  const [mode, setMode] = useState<'diy' | 'dfy'>('dfy');
  const [isPlaybookOpen, setIsPlaybookOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scrollspy effect
  useEffect(() => {
    const sections = ['hero', 'system', 'process', 'proof', 'pricing', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPlaybook = () => {
    setIsPlaybookOpen(true);
  };

  const closePlaybook = () => {
    setIsPlaybookOpen(false);
  };

  return (
    <>
      <Header
        mode={mode}
        onModeChange={setMode}
        activeSection={activeSection}
        onOpenPlaybook={openPlaybook}
      />

      <main>
        <HeroSection
          mode={mode}
          onModeChange={setMode}
          onOpenPlaybook={openPlaybook}
        />

        <SystemSection mode={mode} />

        <ProcessSection />

        <ProofSection />

        <PricingSection
          mode={mode}
          onOpenPlaybook={openPlaybook}
        />

        <ContactSection mode={mode} />
      </main>

      <Footer mode={mode} />

      <StickyBar
        mode={mode}
        onOpenPlaybook={openPlaybook}
      />

      <PlaybookModal
        isOpen={isPlaybookOpen}
        onClose={closePlaybook}
      />
    </>
  );
}

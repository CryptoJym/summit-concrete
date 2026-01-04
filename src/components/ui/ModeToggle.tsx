'use client';

import { useRef, useEffect, useState } from 'react';

interface ModeToggleProps {
  mode: 'diy' | 'dfy';
  onModeChange: (mode: 'diy' | 'dfy') => void;
  className?: string;
}

export function ModeToggle({ mode, onModeChange, className = '' }: ModeToggleProps) {
  const diyRef = useRef<HTMLButtonElement>(null);
  const dfyRef = useRef<HTMLButtonElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeRef = mode === 'diy' ? diyRef : dfyRef;
    if (activeRef.current) {
      setSliderStyle({
        left: activeRef.current.offsetLeft,
        width: activeRef.current.offsetWidth,
      });
    }
  }, [mode]);

  return (
    <div className={`mode-toggle inline-flex relative ${className}`}>
      <div
        className="mode-toggle-slider"
        style={{
          left: `${sliderStyle.left}px`,
          width: `${sliderStyle.width}px`,
        }}
      />
      <button
        ref={diyRef}
        onClick={() => onModeChange('diy')}
        className={`mode-toggle-option ${mode === 'diy' ? 'active' : ''}`}
      >
        DIY Free
      </button>
      <button
        ref={dfyRef}
        onClick={() => onModeChange('dfy')}
        className={`mode-toggle-option ${mode === 'dfy' ? 'active' : ''}`}
      >
        Done-For-You
      </button>
    </div>
  );
}

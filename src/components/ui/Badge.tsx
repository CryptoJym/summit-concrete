'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'safety' | 'sage' | 'steel' | 'outline';
  size?: 'sm' | 'md';
  children: ReactNode;
  className?: string;
}

export function Badge({
  variant = 'default',
  size = 'md',
  children,
  className = '',
}: BadgeProps) {
  const variants = {
    default: 'bg-coal text-white',
    safety: 'bg-safety text-coal',
    sage: 'bg-sage text-white',
    steel: 'bg-steel/20 text-steel',
    outline: 'border border-coal text-coal bg-transparent',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`
        inline-flex items-center font-semibold rounded-full
        uppercase tracking-wider
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

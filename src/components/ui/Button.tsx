'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'safety' | 'sage';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold
    rounded-xl transition-all duration-300 cta-button
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: 'bg-coal text-white hover:bg-coal/90 focus:ring-coal',
    secondary: 'bg-concrete text-coal hover:bg-concrete/80 focus:ring-concrete',
    outline: 'border-2 border-coal text-coal hover:bg-coal hover:text-white focus:ring-coal',
    ghost: 'text-coal hover:bg-coal/5 focus:ring-coal',
    safety: 'bg-safety text-coal hover:bg-safety/90 focus:ring-safety',
    sage: 'bg-sage text-white hover:bg-sage/90 focus:ring-sage',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
}

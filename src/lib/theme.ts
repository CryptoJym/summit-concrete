// Theme tokens for Concrete Lead Engine
// Based on brand spec: Reliable, clean execution, no drama

export const theme = {
  colors: {
    // Primary palette
    coal: '#0B0F14',      // Dark backgrounds, headings
    concrete: '#E7E5E0',  // Light backgrounds, cards
    ice: '#F7F8FA',       // Page backgrounds
    steel: '#8A949E',     // Secondary text, borders

    // Accent colors
    safety: '#FFB000',    // CTAs, highlights, urgency
    sage: '#2E6B5E',      // Trust, Google/reviews, success

    // Semantic
    white: '#FFFFFF',
    black: '#000000',
    error: '#DC2626',
    success: '#16A34A',
  },

  fonts: {
    heading: '"Inter Tight", "Sora", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
  },

  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },

  spacing: {
    section: '6rem',
    container: '1280px',
  },

  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
} as const;

export type Theme = typeof theme;

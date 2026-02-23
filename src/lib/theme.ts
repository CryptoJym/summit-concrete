// Soft Brutalism design tokens for Summit Concrete
// Zero rounded corners, hard shadows, industrial aesthetic

export const theme = {
  colors: {
    primary: '#F2FF00',        // Safety Yellow - CTAs, highlights
    cured: '#EAEAEA',          // Cured Concrete - page backgrounds
    surface: '#F4F4F4',        // Fresh Pour - card surfaces
    asphalt: '#1A1A1A',        // Asphalt - text, borders
    rebar: '#8C8C8C',          // Rebar - secondary text, metadata
    alert: '#FF3300',          // Safety Orange - errors, alerts
    darkBg: '#23200F',         // Dark theme background
    darkSurface: '#2E2C25',    // Dark theme card surfaces
    darkBorder: '#393628',     // Dark theme borders
    darkMuted: '#bab59c',      // Dark theme muted text
    white: '#FFFFFF',
    black: '#000000',
  },

  fonts: {
    display: '"Space Grotesk", system-ui, sans-serif',
    mono: '"Space Mono", ui-monospace, monospace',
    label: '"JetBrains Mono", ui-monospace, monospace',
  },

  borders: {
    width: '2px',
    style: 'solid',
    color: '#1A1A1A',
    default: '2px solid #1A1A1A',
  },

  shadows: {
    hard: '4px 4px 0px 0px #1A1A1A',
    hardHover: '6px 6px 0px 0px #1A1A1A',
    hardXl: '10px 10px 0px 0px #1A1A1A',
  },

  radius: {
    none: '0px',
  },
} as const;

export type Theme = typeof theme;

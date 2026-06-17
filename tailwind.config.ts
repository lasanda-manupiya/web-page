import type { Config } from 'tailwindcss';

/**
 * Design tokens per PDF §7.1 / DECISION_REGISTER C-05.
 * Dark navy ~#0c3c60, white, restrained neutrals, limited green accent.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0c3c60',
          50: '#eef4f9',
          100: '#d4e3ef',
          200: '#a6c4db',
          300: '#6f9cc0',
          400: '#3f74a1',
          500: '#1d5582',
          600: '#0c3c60', // brand navy
          700: '#0a3151',
          800: '#082842',
          900: '#061c2e',
          950: '#03101b',
        },
        // Restrained green accent
        accent: {
          DEFAULT: '#2f9e6f',
          50: '#eafaf2',
          100: '#cdf0de',
          300: '#7fd3aa',
          500: '#2f9e6f',
          600: '#23805a',
          700: '#1c6747',
        },
        // iCost / SustainZone brand cues (provisional until DEP-06 vector logos confirmed)
        icost: '#c79a3a', // gold cue from supplied logo
        sustain: '#2f9e6f',
        neutral: {
          50: '#f7f8fa',
          100: '#eef0f3',
          200: '#dde1e7',
          300: '#c3c9d2',
          600: '#5a6473',
          700: '#414a57',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        panel: '6px', // straight-edged / lightly rounded per PDF §7.1
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;

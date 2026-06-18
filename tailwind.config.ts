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
        // Primary green accent (reference light enterprise theme)
        accent: {
          DEFAULT: '#42a653',
          50: '#edf7ed',
          100: '#d7eed9',
          300: '#74bf67',
          500: '#42a653',
          600: '#369247',
          700: '#2c7a3b',
        },
        // Light enterprise theme tokens (per reference)
        ink: '#0b1f3a', // primary text
        muted: '#52637a', // secondary text
        line: '#dce4df', // borders
        mist: '#f6f8f7', // secondary section background
        soft: '#edf7ed', // soft green
        // iCost / SustainZone brand cues (provisional until DEP-06 vector logos confirmed)
        icost: '#c79a3a', // gold cue from supplied logo
        sustain: '#42a653',
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
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
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

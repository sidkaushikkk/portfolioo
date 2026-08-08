/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e0e10',
        foreground: '#fafafa',
        hero: {
          bg: '#121214',
          surface: '#18181c',
          border: 'rgba(200, 173, 141, 0.25)',
        },
        gold: {
          50: '#fbf8f3',
          100: '#f5eee3',
          200: '#ebdcc7',
          300: '#dfcfbe',
          400: '#cfae8b',
          500: '#c8ad8d', // Main editorial gold
          600: '#b89975',
          700: '#997a58',
          800: '#7d6244',
          900: '#58442f',
          muted: '#a39382',
          deep: '#362c21',
        },
        primary: {
          DEFAULT: '#c8ad8d',
          foreground: '#121214',
        },
        secondary: {
          DEFAULT: '#dfcfbe',
          foreground: '#121214',
        },
        muted: {
          DEFAULT: '#18181b',
          foreground: '#a39382',
        },
        accent: {
          DEFAULT: '#27272a',
          foreground: '#fafafa',
        },
        card: {
          DEFAULT: '#141416',
          foreground: '#fafafa',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'scroll': 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [],
};

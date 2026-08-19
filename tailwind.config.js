/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F5F7FA',
          100: '#E4EAF1',
          200: '#C3CFDE',
          300: '#9DAFC4',
          400: '#81A4B9',
          500: '#4A6B8A',
          600: '#3A5672',
          700: '#334A5E',
          800: '#2C3E50',
          900: '#1E2B38',
          950: '#131E29',
        },
        accent: {
          400: '#F0705F',
          500: '#DE5149',
          600: '#D63A2A',
          700: '#B32D20',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans JP',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Noto Sans CJK JP',
          'Meiryo',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
        'fade-in': 'fade-in 1s ease-out both',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-slower': 'float-slower 13s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(14px, -18px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-16px, 12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(231, 76, 60, 0.25)',
        'glow-sm': '0 0 20px rgba(231, 76, 60, 0.2)',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
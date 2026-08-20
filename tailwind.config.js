/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        navy: '#404080',
        accent: '#ef5b00',
      },
      fontFamily: {
        sans: ['"Zen Kaku Gothic Antique"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
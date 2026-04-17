/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1537',
          dark: '#070E25',
          light: '#112045',
          mid: '#0D1A42',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C86A',
          dark: '#A07C30',
          pale: '#F5E6B8',
          bright: '#FFD700',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

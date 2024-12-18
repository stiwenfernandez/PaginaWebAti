/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#242e5d',
        secondary: '#e52e38',
      },
      fontFamily: {
        sans: ['Futura PT', 'sans-serif'],
        andarilho: ['Andarilho', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
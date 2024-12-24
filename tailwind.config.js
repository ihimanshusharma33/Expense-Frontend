/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1A1B1E',
          secondary: '#2C2D31',
          accent: '#00F2C3',
          text: '#E4E6EA',
          muted: '#9BA1A6',
          border: '#404348'
        }
      }
    },
  },
  plugins: [],
};
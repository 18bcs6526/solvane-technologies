/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070b14',      // Deepest background
          card: '#0d1322',      // Dark card surface
          navy: '#0f172a',      // Secondary surface
          blue: '#2563eb',      // Primary button / link color
          accent: '#4f46e5',    // Violet / indigo accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
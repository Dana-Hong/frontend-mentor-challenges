/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/mobile-purple-bg.png')",
        'main-background': "url('/mobile-ghostwhite-bg.png')",
        'tablet-hero-background': "url('/tablet-purple-bg.png')",
        'tablet-main-background': "url('/tablet-ghostwhite-bg.png')",
        'desktop-hero-background': "url('/desktop-purple-bg.png')",
        'desktop-main-background': "url('/desktop-ghostwhite-bg.png')"
      },
      colors: {
        "dark-purple": "#24053e",
        "davys-gray": "#584d62",
        "eucaplyptus": "#44ffa1",
        "ghostwhite": "#fcf8ff"
      },
      fontFamily: {
        fraunces: "'Fraunces', serif",
        manrope: "'Manrope', sans-serif"
      }
    },
  },
  plugins: [],
}
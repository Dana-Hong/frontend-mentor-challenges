/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/src/assets/mobile-purple-bg.png')",
        'main-background': "url('/src/assets/mobile-ghostwhite-bg.png')",
        'tablet-hero-background': "url('/src/assets/tablet-purple-bg.png')",
        'tablet-main-background': "url('src/assets/tablet-ghostwhite-bg.png')",
        'desktop-hero-background': "url('src/assets/desktop-purple-bg.png')",
        'desktop-main-background': "url('/src/assets/desktop-ghostwhite-bg.png')"
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
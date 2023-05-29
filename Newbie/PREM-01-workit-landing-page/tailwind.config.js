/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#24053e",
        "eucaplyptus": "#44ffa1",
        "davys-gray": "#584d62"
      },
      fontFamily: {
        fraunces: "'Fraunces', serif",
        manrope: "'Manrope', sans-serif"
      }
    },
  },
  plugins: [],
}
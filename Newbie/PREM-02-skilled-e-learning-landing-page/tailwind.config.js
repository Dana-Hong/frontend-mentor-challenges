/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-1': 'linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)',
        'gradient-1-hover': 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)',
        'gradient-2': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)',
        'gradient-2-hover': 'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)',
        'gradient-main-bg': 'linear-gradient(180deg, #FFFFFF 0%, #DDE1E4 100%)',
        'hero-tablet': "url('/assets/image-hero-tablet.png')",
        'hero-desktop': "url('/assets/image-hero-desktop.png')"
     }),
      colors: {
        'accent': '#13183F',
        'accent-2': '#F74780',
        'text': '#83869A'
      },
      fontFamily: {
        'Plus Jakarta Sans': ['Plus-Jakarta-Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        'autofit': 'repeat(auto-fit, minmax(343px, 1fr))'
      }
    },
  },
  plugins: [],
}
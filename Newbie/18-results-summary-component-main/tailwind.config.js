/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'reaction-red': '#ff5555',
        'memory-yellow': '#ffb21e',
        'verbal-green': '#00bb8f',
        'visual-blue': '#1125D6',
        'light-blue': '#CAC9FF',
        'dark-navy': '#303B59',
        'color1': '#7755FF',
        'color2': '#6943FF',
        'color3': '#2F2CE9',
        'color4': '#4D21C9'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-custom': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-custom2': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({...theme('colors'), 'transparent': 'rgba(0,0,0,0)',}),
      fontFamily: {
        'HankenGrotesk': ['HankenGrotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LeagueSpartan:['League Spartan']
      },
      letterSpacing:{
        hit: '7px',
      }
    },
  },
  plugins: [],
}

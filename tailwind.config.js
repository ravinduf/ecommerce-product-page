/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'serif']
      },
      colors: {
        primaryOrange: 'hsl(26, 100%, 55%)',
        primaryPaleOrange: 'hsl(25, 100%, 94%)',
        neutralDarkBlue: 'hsl(220, 13%, 13%)',
        neutralGrayishBlue: 'hsl(220, 14%, 75%)',
        neutralDarkGrayishBlue: 'hsl(219, 9%, 45%)',
        neutralLightGrayishBlue: 'hsl(223, 64%, 98%)',
      }
    },
  },
  plugins: [],
}


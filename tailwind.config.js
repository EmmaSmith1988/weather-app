/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      
    },
    extend: {
      backgroundImage: {
        'weather': "url('./images/weather.jpg')",
      }
    },
  },
  plugins: [],
}

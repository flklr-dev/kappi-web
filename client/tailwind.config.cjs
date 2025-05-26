/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6F8F3F',
        background: '#FBFAF8',
        secondary: '#E7DECD',
        accent: '#804E49',
        gray: '#888888',
        lightGray: '#DDDDDD',
      },
    },
  },
  plugins: [],
} 
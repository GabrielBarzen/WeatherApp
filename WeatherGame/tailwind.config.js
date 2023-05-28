/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: { 
      colors: {
      "primary-background": "#f4f4f5",
      "secondary-background": "#cbd5e1",
      "text-color": "#3f3f46",
      "text-highlight": "#0ea5e9",
      "background-highlight": "#e4e4e7",
      }
    },
  },
  plugins: [],
}


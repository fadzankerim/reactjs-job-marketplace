/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,html}", // Make sure this matches your project structure
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns:{
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
};
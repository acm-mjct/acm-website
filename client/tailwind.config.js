/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      rotate:{
        '270': '270deg',
        '225': '225deg',
        '315': '315deg',
      },
    colors:{
      'wheaty' : '#F9F8F0',
      'navy': '#041c4c', 
    },
    },
  },
  plugins: [],
}

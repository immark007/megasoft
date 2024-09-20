/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins','sans-serif']
      },
      colors: {
        colorNav: '#505F98',
        colorTitle: '#37447E',
        colorButton: '#111B47',
        colorShape: '#E7ECFF',
      },
    },
  },
  plugins: [],
}


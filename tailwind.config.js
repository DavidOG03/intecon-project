/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue":"#1695CD",

      },
      backgroundImage:{
        "heroImageOne":'url("/images/structural-engr.png")',
        "heroImageTwo":'url("/images/staircase.png")',
        "heroImageThree":'url("/images/geosciences.png")',
        "heroImageFour":'url("/images/non-destructive.png")',
      },
      fontFamily:{
        "jakarta":'"Plus Jakarta Sans", sans-serif',
        "inter": '"Inter", sans-serif',
        "electrolize": '"Electrolize", sans-serif'
      }
    },
  },
  plugins: [],
}
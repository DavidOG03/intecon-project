/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue":"#0499CF",
        "black": "#1c1c1c",
        "blackish": "#1c1c1c50",
      },
      backgroundImage:{
        "heroImageOne":'url("/images/structural-engr.webp")',
        "heroImageTwo":'url("/images/staircase.webp")',
        "heroImageThree":'url("/images/geosciences.webp")',
        "heroImageFour":'url("/images/non-destructive.webp")',
        "getToWork":'url("/images/get-to-work.webp")',
        "court":'url("/images/get-to-work.webp")'
        // "court":'url("/images/olive-court.jpg")',
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
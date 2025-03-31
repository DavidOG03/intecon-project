/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        // "blue":"#0499CF",
        // "blue":"#1D35A1",
        "blue":"#039CDE",
        // "blue":"#4284DA",
        // "lightblue": "#0499CF89",
        "lightblue": "#039CDE49",
        "black": "#2c2c2c",
        "textblack": "rgb(36, 32, 32)",
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
        "host":'"Host Grotesk", sans-serif',
        "inter": '"Inter", sans-serif',
        "electrolize": '"Electrolize", sans-serif'
      },
      spacing:{
        "normal": "1rem",
        "2xl":"2rem",
        "3xl":"3rem",
        "xxl":"60px",

      },
      fontSize:{
        "small":"14px",
        "normal": "1rem",
      },

    },
  },
  plugins: [],
}
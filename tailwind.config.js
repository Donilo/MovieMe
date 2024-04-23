/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "Open Sans",
        ubuntu: "Ubuntu",
      },
      colors: {
        dmDarkMode: "#070F2B",
        dmMainRed: "#D21312",
        dmAccentRed: "#ED2B2A",
        dmLightRed: "#F15A59",
        orangeAccent: "#F6B17A",
        errorColor: "#FF204E",
        lightPink: "#e0cbcb",
        strongPink: "#c0a0b9",
      },
      backgroundImage: {
        carouselFadingRight:
          "linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.2) 100%);",
        carouselFadingLeft:
          "linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.2) 100%);",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

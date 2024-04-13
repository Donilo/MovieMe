/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        carouselFadingRight:
          "linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 100%);",
        carouselFadingLeft:
          "linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 100%);",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

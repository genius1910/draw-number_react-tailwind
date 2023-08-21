/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#29576e",
        mainOtherColor: "#29577e",
        bgDarkColor: "#29576e",
        bgLightColor: "#ffffff",
        textDarkColor: "#000000",
        textLightColor: "#ffffff",
      },
      fontFamily: {
        mainFont: "Open Sans",
      },
    },
    screens: {
      miniPhone: "360px",
      mobile: "400px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};

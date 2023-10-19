const { startTransition } = require("react");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        softDark: "#696A6A",
        softLight: "#E6FDFD",
        active: "#3BCC38",
        praimary: "#0C8CE9",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
      },
    },
  },
  plugins: [],
};

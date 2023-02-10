/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Symbols", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        myblue: "#3B1AA2",
        mypink: "#BF3579",
        darkblue: "#141B2B",
      },
    },
  },
  plugins: [],
};

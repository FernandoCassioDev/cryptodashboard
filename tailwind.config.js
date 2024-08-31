/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        min: {
          bg: "#151515",
        },
      },
    },
    fontFamily: {
      grotesk: ["Space Grotesk", "sans-serif"],
      noto: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "theme-yellow": "#F3C615",
        "theme-pink": "#E95B9A",
        "theme-gray": "#5A5A5A",
      },
    },
  },
  plugins: [],
};

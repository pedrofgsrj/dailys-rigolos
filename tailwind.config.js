/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      title: ["Montserrat", "Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "theme-yellow": "rgb(var(--color-theme-yellow) / <alpha-value>)",
        "theme-pink": "rgb(var(--color-theme-pink) / <alpha-value>)",
        "theme-gray": "rgb(var(--color-theme-gray) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        primaryyDark: "#e86f00",
        secondary: "#64748b",
        lightGray: "#272c35",
        darkGray: "#1a1f25",
        lightOrange: "#f1dabf",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "2rem" },
      },
    },
  },
  plugins: [],
};

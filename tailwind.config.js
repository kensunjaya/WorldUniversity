/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary : "#ECDFCC",
        secondary: "#1E201E",
        third: "#3C3D37",
        fourth: "#697565"
      }
    },
  },
  plugins: [],
}


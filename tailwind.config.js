/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        nova: {
          black: "#05020A",
          cream: "#FAF7F2",
          purple: "#8B5CF6",
        },
      },
    },
  },
  plugins: [],
};
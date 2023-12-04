/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0a192f",
        white: "#FFFFFF",
        orange: "#FF9000",
        pink: "#C089E0",
      },
    },
  },
  plugins: [],
};

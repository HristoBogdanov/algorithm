/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#ebebec",
        customBrown: "#726d6c",
        customGreen: "#3bae7c",
        customBlack: "#282828",
        borderColor: "#6d6e71",
      },
    },
  },
  plugins: [],
};

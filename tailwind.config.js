/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#ebebec",
        customBrown: "#3b3939",
        customGreen: "#3bae7c",
      },
    },
  },
  plugins: [],
};

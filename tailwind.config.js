/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   celadon: "#BCD8C1",
    //   flax: "#F5EE9E",
    // },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        firasans: ["Fira Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

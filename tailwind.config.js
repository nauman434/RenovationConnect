/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}","./node_modules/flowbite/**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#DF9882",
        accent: "#58949C",
        highlight: "#5B5048",
        accent_gr: "#527D73",
        background: "#F5EEE6",
      },
      fontFamily: {
        Quicksand: ['Quicksand', 'sans-serif'],
        Laginchy: ['Laginchy', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
  ],
};
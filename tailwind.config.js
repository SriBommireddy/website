/** @type {import('tailwindcss').Config} */
module.exports = {
  extend: {
    colors: {
      'custom-color': '#C0AF9D', 
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      hero: "url('../public/bg2.jpg')",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-white": "rgba(255, 255, 255, 0.17)",
      },
      fontSize: {
        hxl:'48px',
    },
    },
  },
  
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 🌗 Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* 🎨 Add custom font here */
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

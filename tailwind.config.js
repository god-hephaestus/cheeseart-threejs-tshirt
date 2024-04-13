/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-img": "url('./src/assets/imgs/bg.png')"
      }
    },
  },
  plugins: [],
}
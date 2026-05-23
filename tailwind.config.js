/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        archblue: "#1793d1",
        archgray: "#2a2a2a",
      }
    },
  },
  plugins: [],
}

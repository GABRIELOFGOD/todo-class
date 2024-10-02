/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0D0D0D",
        lightBg: "#1A1A1A",
        primary: "#1E6F9F",
        secondary: "#8284FA",
        primaryBg: "#262626",
        primaryText: "#F2F2F2"
      }
    },
  },
  plugins: [],
}
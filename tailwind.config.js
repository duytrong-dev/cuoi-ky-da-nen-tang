/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#d4f1a2",
        secondary: "#8cdb03ff",
        background: "#F5F5F5",
        shoppeeColor: "#EE4D2D"
      },
    },
  },
  plugins: [],
}
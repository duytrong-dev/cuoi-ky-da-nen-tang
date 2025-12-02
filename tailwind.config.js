/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Main theme colors
        primary: {
          DEFAULT: "#4392F9",      // Xanh dương chính
          light: "#CFE2FC",        // Xanh dương nhạt (gradient from)
          dark: "#4392F9"          // Xanh dương đậm (gradient to)
        },
        secondary: {
          DEFAULT: "#F83758",      // Đỏ/hồng chính
          light: "#F8BCC6",        // Đỏ/hồng nhạt (gradient from)
          dark: "#F83758"          // Đỏ/hồng đậm (gradient to)
        },

        // Utility colors
        background: "#F5F5F5",
        shoppeeColor: "#EE4D2D",

        // Legacy colors (giữ lại để tương thích)
        accent: {
          red: "#F83758",
          blue: "#4392F9"
        }
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
presets: [require("nativewind/preset")],
darkMode: "class",
  theme: {
    extend: {
      colors: {
        backgroundl: "var(--backgroundl)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
}


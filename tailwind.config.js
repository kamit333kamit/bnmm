/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
presets: [require("nativewind/preset")],
darkMode: "class",
  theme: {
    extend: {
      colors: {
        txt: "var(--txt)", 
        background:  "var(--background)", 
        tint:  "var(--tint)", 
        icon: "var(--icon)", 
        tabIconDefault: "var(--tabIconDefault)", 
        tabIconSelected: "var(--tabIconSelected)", 
      },
    },
  },
  plugins: [],
}


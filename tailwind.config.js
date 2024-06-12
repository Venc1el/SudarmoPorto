// Assuming Tailwind CSS is installed and configured

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        background: "#FEFAE0", 
        text: "#B07236", 
        contact : "#4E3318",
        placeholder: "#D1C4A5",
      },
      transparent: "transparent"
    },
    fontFamily: {
      main: "Poppins, sans-serif",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".horizontal-writing-tb": { "writing-mode": "horizontal-tb" },
        ".vertical-writing-rl": { "writing-mode": "vertical-rl" },
        ".vertical-writing-lr": { "writing-mode": "vertical-lr" },
        ".orientation-mixed": { "text-orientation": "mixed" },
        ".orientation-upright": { "text-orientation": "upright" },
        ".orientation-sideways-right": { "text-orientation": "sideways-right" },
        ".orientation-sideways": { "text-orientation": "sideways" },
        ".orientation-glyph": { "text-orientation": "use-glyph-orientation" },
      });
    }),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      height: {
        px: "1px",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(30%)" },
          "100%": { transform: "translate(-80%)" },
        },
        vertical: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        down: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)", display: "none" },
        },
      },
      animation: {
        move: "move 6s linear infinite",
        vertical: "vertical 0.5s ease-in-out",
        down: "down 0.5s ease-in-out forwards",
        spin: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

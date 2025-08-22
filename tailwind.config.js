/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        "bagel-cream": "var(--bagel-cream)",
        "bagel-green": "var(--bagel-green)",
        "bagel-medium-green": "var(--bagel-medium-green)",
        "bagel-dark-green": "var(--bagel-dark-green)",
        "bagel-darker-green": "var(--bagel-darker-green)",
        "bagel-dark-red": "var(--bagel-dark-red)",
      },
      animation: {
        bump: "bump 300ms ease-out",
        "meals-appear": "meals-appear 1s ease-out forwards",
      },
      keyframes: {
        bump: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.9)" },
          "30%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
        "meals-appear": {
          from: {
            opacity: "0",
            transform: "translateY(3rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-down": {
          from: {
            opacity: "0",
            transform: "translateY(-3rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        animation: {
          "slide-down": "slide-down 1s ease-in-out",
        },
      },
    },
  },
  plugins: [],
};

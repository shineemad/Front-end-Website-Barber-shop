/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#05110A",
          900: "#0B1F14",
          800: "#112818",
          700: "#163220",
          600: "#1D4028",
          500: "#254F33",
        },
        gold: {
          300: "#E8D08A",
          400: "#D4B86A",
          500: "#C9A84C",
          600: "#B8973A",
          700: "#9A7B2C",
        },
        cream: {
          50: "#FAF7F2",
          100: "#F5F0E8",
          200: "#E8E0D0",
          300: "#C5BDB0",
          400: "#9E9589",
          500: "#7A7067",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      letterSpacing: {
        "widest-xl": "0.3em",
        "widest-2xl": "0.5em",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

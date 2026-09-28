import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#FDFAF5",
          100: "#FAF4E8",
          200: "#F4E9D0",
          300: "#EBD9B2",
          DEFAULT: "#F4E9D0",
        },
        sage: {
          50:  "#F2F5F0",
          100: "#DDE8D8",
          200: "#BDCFB5",
          300: "#95AD89",
          400: "#6E8D61",
          500: "#4E6B43",
          600: "#3A5031",
          DEFAULT: "#6E8D61",
        },
        slate: {
          50:  "#F5F4F2",
          100: "#E4E2DC",
          200: "#C8C4BC",
          300: "#A89F94",
          400: "#857A6E",
          500: "#635C52",
          600: "#47423B",
          700: "#302D28",
          DEFAULT: "#635C52",
        },
        gold: {
          100: "#F5EDD0",
          200: "#E8D498",
          300: "#D4B56A",
          400: "#B8923A",
          500: "#96721C",
          DEFAULT: "#B8923A",
        },
        linen: "#F9F6F0",
        parchment: "#F0EBE1",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["DM Sans", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        "warm-sm": "0 2px 12px 0 rgba(90, 70, 40, 0.08)",
        "warm-md": "0 6px 32px 0 rgba(90, 70, 40, 0.12)",
        "warm-lg": "0 16px 64px 0 rgba(90, 70, 40, 0.18)",
        "glass":   "0 4px 30px rgba(0,0,0,0.06), inset 0 0 0 0.5px rgba(255,255,255,0.6)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
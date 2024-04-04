import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "loop-scroll-reverse": "loop-scroll-reverse 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "loop-scroll-reverse": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

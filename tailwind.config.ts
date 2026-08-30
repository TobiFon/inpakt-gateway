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
        brand: {
          darkest: "#0c3323",
          darker: "#124630",
          dark: "#15633e",
          primary: "#15803d",
          medium: "#16a34a",
          light: "#22c55e",
          subtle: "#f0fdf4",
          border: "#bbf7d0",
        },
        gold: {
          deep: "#9a6310",
          rich: "#ba7a18",
          primary: "#d99227",
          light: "#e5a338",
          bright: "#f3b84a",
          warm: "#fdf6ea",
          border: "#f5d8a0",
        },
        cream: {
          50: "#faf9f6",
          100: "#f4f1ea",
          200: "#eae4d7",
          300: "#ded4c3",
          border: "#e7e2d7",
        },
        charcoal: {
          950: "#0a0f0d",
          900: "#101614",
          800: "#1d2723",
          700: "#2d3b35",
          600: "#46564f",
          500: "#667870",
          400: "#8e9e97",
          300: "#cbd5d0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        heading: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1320px",
        content: "1080px",
        narrow: "840px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(12, 51, 35, 0.05), 0 2px 6px -1px rgba(12, 51, 35, 0.02)",
        "card-hover":
          "0 14px 32px -4px rgba(12, 51, 35, 0.09), 0 4px 12px -2px rgba(217, 146, 39, 0.08)",
        glow: "0 0 28px -2px rgba(217, 146, 39, 0.35)",
        "glow-green": "0 0 28px -2px rgba(21, 128, 61, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

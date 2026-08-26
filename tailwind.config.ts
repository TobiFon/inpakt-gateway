import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: "#061610",
          darker: "#09261C",
          dark: "#0E382A",
          primary: "#144D3A",
          medium: "#1D6B52",
          light: "#288768",
          subtle: "#EBF4F0",
          emerald: "#10B981",
        },
        gold: {
          deep: "#9A6310",
          rich: "#BA7A18",
          primary: "#D99227",
          light: "#E5A338",
          bright: "#F3B84A",
          warm: "#FBF2DF",
          muted: "#FFF9EE",
        },
        cream: {
          50: "#FCFAF6",
          100: "#F7F3EB",
          200: "#EFE9DD",
          300: "#E3DCCB", // Fixed typo here
          400: "#D5CCBB",
        },
        charcoal: {
          900: "#101614",
          800: "#1A2420",
          700: "#2A3631",
          600: "#43514A",
          500: "#62726B",
          400: "#8A9A92",
          300: "#B8C4BF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
        content: "1040px",
        narrow: "768px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(10, 38, 28, 0.05), 0 2px 6px -1px rgba(10, 38, 28, 0.03)",
        "card-hover":
          "0 12px 30px -4px rgba(10, 38, 28, 0.08), 0 4px 12px -2px rgba(10, 38, 28, 0.04)",
        glow: "0 0 24px -2px rgba(217, 146, 39, 0.35)",
        "glow-green": "0 0 24px -2px rgba(20, 77, 58, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;

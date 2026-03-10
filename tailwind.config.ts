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
        bg: "#080A0E",
        bg2: "#0E1117",
        bg3: "#151921",
        "blue-deep": "#4A7FA8",
        "blue-sky": "#89B4D4",
        "blue-ice": "#C5DCF0",
        "rich-black": "#1A1A1A",
        "slate-gray": "#6B7280",
        "off-white": "#F7F7F5",
      },
      fontFamily: {
        baskerville: ["var(--font-baskerville)", "serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #4A7FA8 0%, #89B4D4 30%, #C5DCF0 70%, #FFFFFF 100%)",
        "brand-gradient-text":
          "linear-gradient(135deg, #89B4D4 0%, #C5DCF0 100%)",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { textShadow: "0 0 20px rgba(137,180,212,0.0)" },
          "50%": { textShadow: "0 0 40px rgba(137,180,212,0.6)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

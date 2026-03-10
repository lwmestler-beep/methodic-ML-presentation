export const colors = {
  bg: "#080A0E",
  bg2: "#0E1117",
  bg3: "#151921",
  border: "rgba(255,255,255,0.07)",
  borderH: "rgba(255,255,255,0.14)",
  text: "#FFFFFF",
  muted: "rgba(255,255,255,0.5)",
  dim: "rgba(255,255,255,0.25)",
  blue: "#89B4D4",
  blueLight: "#C5DCF0",
  blueDark: "#4A7FA8",
  black: "#0A0A0A",
  richBlack: "#1A1A1A",
  slateGray: "#6B7280",
  offWhite: "#F7F7F5",
} as const;

export const gradients = {
  hero: "linear-gradient(135deg, #4A7FA8 0%, #89B4D4 30%, #C5DCF0 70%, #FFFFFF 100%)",
  text: "linear-gradient(135deg, #89B4D4 0%, #C5DCF0 100%)",
  subtle: "linear-gradient(135deg, rgba(74,127,168,0.15) 0%, rgba(137,180,212,0.05) 100%)",
  glow: "radial-gradient(circle, rgba(137,180,212,0.12) 0%, transparent 65%)",
} as const;

export const fonts = {
  baskerville: "var(--font-baskerville), serif",
  outfit: "var(--font-outfit), sans-serif",
  mono: "var(--font-mono), monospace",
} as const;

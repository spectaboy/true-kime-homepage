import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#dc2626", // red-600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1f2937", // gray-800
          foreground: "#f9fafb", // gray-50
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#374151", // gray-700
          foreground: "#d1d5db", // gray-300
        },
        accent: {
          DEFAULT: "#dc2626", // red-600
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#0a0a0a", // deeper black
          foreground: "#f9fafb", // gray-50
        },
        card: {
          DEFAULT: "#0a0a0a", // deeper black
          foreground: "#f9fafb", // gray-50
        },
        // Custom True Kime black
        "true-black": "#0a0a0a",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        brush: ["Permanent Marker", "Creepster", "Butcherman", "Impact", "Arial Black", "sans-serif"], // For KIME and emphasized words - rough/distressed style
        brand: ["Oswald", "Bebas Neue", "Impact", "Arial Black", "sans-serif"], // For headings
        body: ["Inter", "Roboto", "system-ui", "sans-serif"], // For body text
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

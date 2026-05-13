import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette PMS Avocats — Vibe 3 Profession libérale sobre autoritaire
        navy: {
          DEFAULT: "#0F2547", // bleu profond — fond hero, autorité institutionnelle
          light: "#1B3361",
          dark: "#08152A",
        },
        gold: {
          DEFAULT: "#B08D3E", // or sourd — accents, filets, signature
          soft: "#C7A458",
          dark: "#8C6F31",
        },
        ink: "#1A1A1A",       // texte principal corps long
        cream: "#FAFAF7",     // fond principal off-white doux
        soft: "#F5F2EB",      // sections alternées, cards
        muted: "#6B7280",     // texte secondaire
        rule: "#D9D2C2",      // filets, séparateurs
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-body)", "Source Serif Pro", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 6vw, 4.75rem)", { lineHeight: "1.08", letterSpacing: "-0.012em" }],
        mega: ["clamp(2rem, 4.5vw, 3.25rem)", { lineHeight: "1.15", letterSpacing: "-0.008em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 37, 71, 0.05), 0 2px 8px rgba(15, 37, 71, 0.04)",
        cardHover: "0 4px 12px rgba(15, 37, 71, 0.08), 0 8px 24px rgba(15, 37, 71, 0.06)",
        cta: "0 4px 14px rgba(15, 37, 71, 0.18)",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideUp: "slideUp 500ms ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

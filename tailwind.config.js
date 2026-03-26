/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        slate: {
          850: "#172554"
        },
        accent: "#06b6d4",
        accent2: "#6366f1",
        accent3: "#a855f7",
        cream: "#faf8f5",
        void: "#060a12",
        midnight: "#0c1220",
        depth: "#111827"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 23, 42, 0.08)",
        card: "0 4px 24px rgba(15, 23, 42, 0.06)",
        glow: "0 0 40px -8px rgba(34, 211, 238, 0.45)",
        "glow-lg": "0 0 60px -12px rgba(99, 102, 241, 0.35)",
        "cta": "0 8px 32px -8px rgba(34, 211, 238, 0.4), 0 4px 16px -4px rgba(99, 102, 241, 0.25)"
      },
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      backgroundSize: {
        grid: "64px 64px"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.75" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0%, 0%)" },
          "100%": { transform: "scale(1.065) translate(-1.25%, -0.75%)" }
        },
        "hero-text-in": {
          "0%": { opacity: "0", transform: "translateY(1.125rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "ken-burns": "ken-burns 32s ease-in-out infinite alternate",
        "hero-text-in": "hero-text-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards"
      }
    }
  },
  plugins: []
};

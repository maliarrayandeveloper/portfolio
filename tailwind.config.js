/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F9F7F2",
        dark: "#171627",
        orange: "#FF6338",
        yellow: "#FFE69A",
        purple: "#E9D8FF",
        accent: "#5267E8",
        mint: "#DDF4EA",
        muted: "#737389",
        line: "rgba(23,22,39,0.10)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
        xl3: "24px",
        xl4: "28px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(23, 22, 39, 0.06)",
        softer: "0 2px 12px rgba(23, 22, 39, 0.04)",
        lift: "0 12px 32px rgba(23, 22, 39, 0.10)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

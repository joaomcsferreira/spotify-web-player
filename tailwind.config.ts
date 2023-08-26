import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "700px",
        sm: "900px",
        md: "960px",
      },
      fontFamily: {
        sans: ["var(--font-circular)"],
      },
      colors: {
        springGreen: "#1ed760",
        green: "#159643",
        forestGreen: "#004638",
        forestGreenHover: "#005c45",
        midnightBlue: "#191d46",
        darkSlateBlue: "#4022a8",
        darkSlateBlueHover: "#3b0aee",
        silver: "#b2b2b2",
        nero: "#242424",
        ebony: "#121212",
        crow: "#181818",
        black: "#050000",
        "white-glass": "hsla(0,0%,100%,.1)",
      },

      gridTemplateColumns: {
        3070: "auto 1fr",
      },

      gridTemplateRows: {
        9010: "88vh 12vh",
      },
    },
  },
  plugins: [],
}
export default config

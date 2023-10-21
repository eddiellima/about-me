import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222222",
          100: "#070707",
          200: "#0d0d0d",
          300: "#141414",
          400: "#1b1b1b",
          500: "#222222",
          600: "#4e4e4e",
          700: "#7a7a7a",
          800: "#a6a6a6",
          900: "#d3d3d3"
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          100: "#313131",
          200: "#626262",
          300: "#939393",
          400: "#c4c4c4",
          500: "#f5f5f5",
          600: "#f7f7f7",
          700: "#f9f9f9",
          800: "#fbfbfb",
          900: "#fdfdfd"
        },
        accent: {
          DEFAULT: "#007ced",
          100: "#00182f",
          200: "#00305e",
          300: "#00498d",
          400: "#0061bc",
          500: "#007ced",
          600: "#2395ff",
          700: "#5aafff",
          800: "#91caff",
          900: "#c8e4ff"
        }
      }
    }
  },
  plugins: []
}
export default config

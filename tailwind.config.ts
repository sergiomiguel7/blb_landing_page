import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c7d4d",
        secondary: "#34B71F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        mobile: "24px",
      },
      gridTemplateColumns: {
        desktop: "repeat(12, minmax(0, 1fr))",
        tablet: "repeat(6, minmax(0, 1fr))",
        mobile: "repeat(4, minmax(0, 1fr))",
      },
      gridColumnEnd: {
        desktop: "13",
        tablet: "7",
        mobile: "5",
      },
      gap: {
        desktop: "24px",
        tablet: "20px",
        mobile: "16px",
      },
      screens: {
        mobile: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        tablet: { min: "768px", max: "1536px" },
        // => @media (min-width: 768px and max-width: 1536px) { ... }

        desktop: { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;

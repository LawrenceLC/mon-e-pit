import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
       'Marine-blue': '#02295a',
       'Purplish-blue': '#473dff',
       'Pastel-blue': '#adbeff',
       'Light-blue': '#bfe2fd',
       'Strawberry-red': '#ed3548',
       'Cool-gray': '#9699ab',
       'Light-gray': '#d6d9e6',
       'Magnolia': '#f0f6ff',
       'Alabaster': '#fafbff',
       'Background': '#161616',
       'White': '#ffffff'
    }
  },
  plugins: [],
};
export default config;

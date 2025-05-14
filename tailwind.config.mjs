/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "font-color1": "var(--font-color1)",
        "font-color2": "var(--font-color2)",
        "font-color3": "var(--font-color3)",
        "font-white": "var(--font-white)",
        "bg-color1": "var(--background-color1)",
        "hero": "var(--hero)",
        "heroD": "var(--heroD)",
        "dark": "var(--background-dark)",
        "prime-color": "var(--primary-color)",
        "second-color": "var(--secondary-color)",
        "contrast-color": "var(--contrast-color)",
      },
    },
  },
};

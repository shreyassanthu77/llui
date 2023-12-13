/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "hsl(250 100% 2%)",
          light: "hsl(250 50% 6%)",
          DEFAULT: "hsl(270 100% 30%)",
          lighter: "hsl(270 100% 40%)",
        },
      },
    },
  },
  plugins: [],
};

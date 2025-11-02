import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#E7FDF6",
        accent: "#F25C0C",
        dark: "#233860"
      },
    },
  },
});
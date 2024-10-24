import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  darkMode: 'class', // Activation du mode sombre via la classe "dark"
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",   // Utilisation de variables CSS pour les couleurs
        foreground: "var(--foreground)",   // Elles peuvent être modifiées pour clair/sombre
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

export default config;

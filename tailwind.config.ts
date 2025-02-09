import type { Config } from "tailwindcss";

export default {
  darkMode: ['class', 'class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        announcebg: 'var(--announce-bg)',
        announcefont: 'var(--announce-font)',
        fontcolor: 'var(--font-color)',
        bordercolor: 'var(--border-color)',
        titlecolor: 'var(--title-color)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

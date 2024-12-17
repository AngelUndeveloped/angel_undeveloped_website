import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        light: '#f5f5f5',
        neutral: {
          400: '#a3a3a3',
          600: '#525252',
          800: '#27272a',
        },
        slate: {
          600: '#475569',
          800: '#1e293b',
        },
        rose: '#e11d48',
        violet: '#9333ea',
        indigo: '#4f46e5',
        blue: '#2563eb',
      },
    },
  },
  plugins: [],
};
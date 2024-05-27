import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graffiti: {
          100: "#fdfa8f",
          200: "#fdf97c",
          300: "#fdf969",
          400: "#fcf857",
          500: "#fcf744",
          600: "#e3de3d",
          700: "#cac636",
          800: "#b0ad30",
          900: "#979429",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            //
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: "#fcf744",
            background: "#18181b", // zinc-900
            secondaryBg: "#27272a", // zinc-800
            foreground: "#f4f4f5", // zinc-100
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};

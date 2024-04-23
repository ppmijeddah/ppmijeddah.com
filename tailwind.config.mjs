/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecfdff",
          100: "#cff8fe",
          200: "#a5effc",
          300: "#68e1f8",
          400: "#23caed",
          500: "#07add3",
          600: "#098bb3",
          700: "#0f6f8f",
          800: "#165a74",
          900: "#164b63",
          950: "#083144",
        },
        accent: {
          50: "#fdf3f3",
          100: "#fce4e5",
          200: "#faced0",
          300: "#f6abae",
          400: "#ee7b80",
          500: "#e25157",
          600: "#ce343b",
          700: "#ad282e",
          800: "#9a272c",
          900: "#782428",
          950: "#410e10",
        },
        secondary: {
          50: "#fdfde8",
          100: "#f9f8ce",
          200: "#f3f3a3",
          300: "#e8e96d",
          400: "#d7db40",
          500: "#b1b720",
          600: "#919917",
          700: "#6e7516",
          800: "#575d17",
          900: "#4a4f18",
          950: "#262b08",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#098bb3",
          secondary: "#b1b720",
          accent: "#9a272c",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

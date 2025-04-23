/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF9F5A",
          DEFAULT: "#FF7A00",
          dark: "#E56C00",
        },
      },
    },
  },
  plugins: [],
};

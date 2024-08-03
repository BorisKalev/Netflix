/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      cursor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

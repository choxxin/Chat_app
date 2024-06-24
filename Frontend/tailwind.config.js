/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#bae6fd",
        NonBlue: "#7dd3fc",
      },
    },
  },
  plugins: [require("daisyui")],
};

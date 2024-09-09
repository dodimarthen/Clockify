/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#E78895",
        "custom-white": "#F0EEED",
        "custom-black": "#0F0E0E",
        "custom-blue": "#295F98",
      },
    },
  },
  plugins: [],
};

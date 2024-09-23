/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#E78895",
        "custom-white": "#EEF7FF",
        "custom-white-2": "#F5F5F7",
        "custom-black": "#0F0E0E",
        "custom-blue": "#244BC5",
        "custom-red": "#DC143C",
        "custom-dark-blue": "#006989",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#E78895",
        "custom-white": "#EEF7FF",
        "custom-white-two": "#E9EFEC",
        "custom-black": "#0F0E0E",
        "custom-blue": "#244BC5",
        "custom-red": "#DC143C",
        "custom-dark-blue": "#006989",
        "panel-checkedin": "#73EC8B",
        "custom-yellow": "#FFD523",
      },
    },
  },
  plugins: [],
};

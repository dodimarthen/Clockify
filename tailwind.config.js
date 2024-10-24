/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white-three": "#FBF6EE",
        "custom-white": "#EEF7FF",
        "custom-white-two": "#E9EFEC",
        "custom-black": "#0F0E0E",
        "custom-blue": "#001F3F",
        "custom-red": "#DC143C",
        "custom-pink": "#F05A7E",
        "custom-dark-blue": "#006989",
        "panel-checkedin": "#024CAA",
        "custom-checkout": "#387478",
        "custom-green": "#697565",
      },
    },
  },
  plugins: [],
};

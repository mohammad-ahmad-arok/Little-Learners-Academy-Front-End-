/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8D4C",
        dimGray: "#B3B3B3",
        dimWhite: "#FFFCFA",
        dimBlack: "#191919",

        Orange_70: "#FF9E66",
        Orange_75: "#FFAE80",
        Orange_80: "#FFBE99",
        Orange_90: "#FFDECC",
        Orange_95: "#FFEFE5",
        Orange_97: "#FFF5F0",

        Grey_15: "#262626",
        Grey_20: "#262626",
        Grey_30: "#4C4C4D",
        Grey_35: "#59595A",
        Grey_40: "#656567",
        Grey_60: "#98989A",
      },
      boxShadow: {
        'section-shadow': '6px 6px 0px 1px #1E1E1E',
        'card-shadow': '6px 6px 0px 2px #1E1E1E',

      },
    },
  },
  plugins: [],
}


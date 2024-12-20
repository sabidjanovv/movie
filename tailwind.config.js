import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#C61F1F",
      secondary: "#1E1E1E",
      // gray: {
      //   400: "#B0B0B0", // Adjust if default doesn't match
      //   800: "#262626", // Adjust as needed
      // },
      // red: {
      //   600: "#FF4040", // Bright red for active "О фильме"
      // },
    },
    fontFamily: {},
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1040px",
        "2xl": "1308px",
      },
      padding: "1rem",
    },
  },
  darkMode: "class",
  plugins: [],
};

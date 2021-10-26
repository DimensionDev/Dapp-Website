module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {},
      dropShadow: {},
      colors: {},
      screens: {},
      minHeight: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      width: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        1:1,
        2:2,
        3:3,
        4:4,
        5:5,
        6:6,
        2000: 2000
      },
      dropShadow: {},
      colors: {
        blue: {
          main: '#211DD8',
          underline: '#21FFD7',
          'main-dark': '#030080',
        },
        purple: {
          card: '#5653FF'
        }
      },
      screens: {
        md: "850px",
        "max-xsm": {
          max: "400px",
        },
        "max-sm": {
          max: "540px",
        },     
        'semi-md': {
          max: '640px',   
        }
      },
      minHeight: {},
      minWidth: {},
      maxWidth: {
        index: 625
      },
      height: {
        18: 75
      },
      width: {},
      fontSize: {
        xxs: 11
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};

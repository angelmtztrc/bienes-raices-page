module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E08709',
        secondary: '#71B100'
      },
      fontFamily: {
        body: ['Lato', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '6rem'
        }
      },
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

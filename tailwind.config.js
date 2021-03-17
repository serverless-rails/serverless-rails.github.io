module.exports = {
  purge: ['./src/**/*.html', './frontend/**/*.css', './frontend/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "neon-blue": "#E1F0FF"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

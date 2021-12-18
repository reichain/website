const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
      './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Karla', 'sans-serif'],  
      'body': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        amber: colors.amber
      }
    },
    container: {
      screens: {
        "sm": "600px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1200px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

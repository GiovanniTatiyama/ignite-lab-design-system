/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 18,
      md: 24,
      lg: 25,
      xl: 35,
      '2xl': 45,
    },

    colors: {

      transparent: 'transparent',

      black: '#000',
      white: 'fff',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyan: {
        500:'#61DAFB',
        200:'#D3F6FF',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}

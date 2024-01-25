/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],

  darkMode: 'class', 
  theme: {
    fontFamily: {
      'josefinSans': ['Josefin Sans', 'sans-serif'],
      'josefinSlab': ['Josefin Slab', 'serif'],
      'kalam': ['Kalam', 'cursive'],
      'kanit': ['Kanit', 'sans-serif'],
      'patuaOne': ['Patua One', 'serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
      'righteous': ['Righteous', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'spaceGrotesk': ['Space Grotesk', 'sans-serif'],
      'spaceMono': ['Space Mono', 'monospace'],
      'tiltPrism': ['Tilt Prism', 'sans-serif'],
      'tiltWrap': ['Tilt Wrap', 'sans-serif'],
      'titanOne': ['Titan One', 'sans-serif'],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('preline/plugin'),],
}
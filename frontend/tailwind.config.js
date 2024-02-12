/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin'
export default {
  darkMode: 'class',
  content: ['./index/html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {
      colors: {
        primary: '#19a873',
        green: '#00b69b',
        bgGreen: '#00b69b1a',
        red: '#ee368c',
        bgRed: '#ee368c1a'
      },
      fontFamily: {
        fontFamily: ['Open Sans'],
        headingFontFamily: ['Raleway'],
      },
    }
  },
  plugins: [prelinePlugin]
}

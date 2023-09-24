/** @type {import('tailwindcss').Config} */
import {} from './src/pages'
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}',
'./layout/**/*.{js,jsx}',
'./components/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  enable: process.env.NODE_ENV === 'production',
  content: ['./index.html', './src/**/*.{vue,js,jsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}

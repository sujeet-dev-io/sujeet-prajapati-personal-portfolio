/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Html/**/*.html",
    "./Js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#081b29',
        bgSecondColor: '#112e42',
        textColor: '#ededed',
        mainColor: '#00abf0',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
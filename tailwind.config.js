/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./HTML/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: {
          500: '#0d72e7',
        },
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
}
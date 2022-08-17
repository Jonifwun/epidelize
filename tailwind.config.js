/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      spacing: {
        '0.2': '0.03rem'
      }
    },
  },
  plugins: [],
}

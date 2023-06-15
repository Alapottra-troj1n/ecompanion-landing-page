/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
 

    extend: {
      fontFamily: {
        'poppins': 'Poppins, Arial, sans-serif',
      },
      colors: {
        primary : '#00B4D8',
        secondary: '#FF6D00',
        charcoal: '#212121',
        mygolden: '#FDBE3B'
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        'open-sans': ['Open Sans']
      }
    }
  },
  plugins: []
};

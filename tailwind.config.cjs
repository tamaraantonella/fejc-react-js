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
      },
      fontSize: {
        'heading-2': ['1.5rem','1.2']
      },
      colors: {
        comment: '#684E4E'
      }
    }
  },
  plugins: []
};

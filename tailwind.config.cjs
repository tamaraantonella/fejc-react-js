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
        comment: '#684E4E',
        text: '#4D4141',
        black: '#000000',
        accordion_bg:'#FFFFFF'
      },
      boxShadow: {
        'accordion': '0px 100px 80px rgba(8, 35, 50, 0.07), 0px 41.7776px 33.4221px rgba(8, 35, 50, 0.0503198), 0px 22.3363px 17.869px rgba(8, 35, 50, 0.0417275), 0px 12.5216px 10.0172px rgba(8, 35, 50, 0.035), 0px 6.6501px 5.32008px rgba(8, 35, 50, 0.0282725), 0px 2.76726px 2.21381px rgba(8, 35, 50, 0.0196802)',
      }
    }
  },
  plugins: []
};

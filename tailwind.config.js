/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-pink':'#EA1179',
      },
      textUnderlineOffset: {
        3: '15px',
      },
      boxShadow: {
        'inner': 'inset 0px -20px 20px 0px rgba(255, 255, 255, 0.20)',
        '1': '-3px -3px 0px 0px #FFF',
        '2': ' 0px 3px 0px 0px #D6DADF',
        '3': ' 0px 100px 70px -10px rgba(169, 180, 203, 0.20)'
      },
    },
  },
  plugins: [],
}



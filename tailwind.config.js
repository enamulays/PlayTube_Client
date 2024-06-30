/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        'custom26' : '26rem',
        'custom28' : '28rem',
        'custom30' : '30rem',
        'custom32' : '32rem',
        'custom34' : '34rem',
        'custom36' : '36rem',
        'custom38' : '38rem',
        'custom40' : '40rem',
        'custom42' : '42rem',
      },
      width:{
        'custom26' : '26rem',
        'custom28' : '28rem',
        'custom30' : '30rem',
        'custom32' : '32rem',
        'custom34' : '34rem',
        'custom36' : '36rem',
        'custom38' : '38rem',
        'custom40' : '40rem',
        'custom42' : '42rem',
      },
      gridColumn:{
        'span' : 'span 16 / span 17'
      }
    },
  },
  plugins: [],
};

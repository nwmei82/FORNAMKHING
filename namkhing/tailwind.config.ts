/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", 
    "./src/components/**/*.{js,ts,jsx,tsx}", 
    "./src/styles/**/*.{css}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'mitr' : ['Mitr','serif'],
        'fair' : ['Playfair Display','serif'],
        'athiti' : ['Athiti','serif']
      },
      backgroundImage: {
        'bgs': "url('/bgt.jpg')",
       }
    },
  },
  plugins: [],
};

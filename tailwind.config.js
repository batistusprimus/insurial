/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo-black': ['var(--font-archivo-black)'],
        'montserrat': ['var(--font-montserrat)'],
      },
      colors: {
        primary: '#1E3A8A',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB3F57',
        darkGray: '#454654',
        background: '#F5F5FA',
        gradientOne: {
          a: '#E83F57',
          b: '#8C3945'
        },
        gradientTwo: {
          a: '#DE3C5D',
          b: '#110943'
        }
      }
    },
  },
  plugins: [],
}
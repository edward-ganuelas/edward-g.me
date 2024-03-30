/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      'orange': '#ff9900',
      'buttonGrey': '#C0C0C0',
      'cardBackgroundColor': '#D3D3D3',
      'blue': '#0066FF'
    }
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}


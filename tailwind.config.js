/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '767px'},
        'md': {'min': '768px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1199px'},
        'xl': {'min': '1200px'},
      },
      backgroundImage: {
        'home': "url('/assets/bg-home.webp')",
        'hero': "url('/assets/bg-search.webp')"
      }
    },
  },
  plugins: [],
}

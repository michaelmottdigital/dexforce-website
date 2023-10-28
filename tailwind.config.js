/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#CCB892'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
        'pt-serif': ['PT Serif', 'serif'],
        oswald: ['Oswald', 'serif']

      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')

  ],
}

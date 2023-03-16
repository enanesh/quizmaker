/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'confetti': "url('/assets/confettiBg.png')",
      },
      fontFamily: {
        signature: ["Caveat"],
      }
     

    },
  },
  plugins: [],
}

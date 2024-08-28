/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // wide: 'Moderustic, sans-serif'
        // wide: 'Caveat, cursive'
        wide: 'Niramit, sans-serif'
        // wide: 'Metal Mania,  system-ui'
      }
    },
  },
  plugins: [require("daisyui")],
}

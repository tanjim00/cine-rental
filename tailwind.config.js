/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem"
      },
      colors:{
        primary: "#00D991"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aqui você pode adicionar as cores do FC25 depois!
        darkBg: '#18181b',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ceci est crucial pour que Tailwind génère les styles des composants de votre dossier 'src'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
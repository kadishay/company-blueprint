/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          dark: '#075E54',
          light: '#25D366',
          bg: '#ECE5DD',
          bubble: '#DCF8C6',
        }
      }
    },
  },
  plugins: [],
}

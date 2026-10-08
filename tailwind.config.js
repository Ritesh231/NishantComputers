/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#FFFDF7',
        bgSec: '#FEF2F2',
        yellowLight: '#FFF1B8',
        cyanSoft: '#FEE2E2',
        cyanPrimary: '#DC2626',
        coralSoft: '#F87171',
        coralDark: '#E85D5D',
        textMain: '#172033',
        textSec: '#64748B',
        borderColor: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

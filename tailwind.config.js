/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#F5F8FF',
        bgSec: '#EEF2FF',
        yellowLight: '#DBEAFE',
        cyanSoft: '#DBEAFE',
        cyanPrimary: '#2563EB',
        coralSoft: '#60A5FA',
        coralDark: '#1D4ED8',
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

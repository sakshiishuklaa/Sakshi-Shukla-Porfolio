/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        supply: {
          primary: '#0F766E',
          secondary: '#115E59',
          accent: '#14B8A6',
          highlight: '#0D9488',
          success: '#059669',
          dark: '#0B1220',
          gray: '#5C6570',
          lightgray: '#E4DFD4',
          light: '#F3EFE6',
          background: '#F7F5F0',
          'background-alt': '#EFEBE3',
          'background-dark': '#0B1220',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -20px rgba(11, 18, 32, 0.18)',
        card: '0 1px 0 rgba(11, 18, 32, 0.04), 0 18px 40px -24px rgba(11, 18, 32, 0.25)',
      },
    },
  },
  plugins: [],
};

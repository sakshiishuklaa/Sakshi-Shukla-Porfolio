/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#151515',
        surface: '#2C2421',
        accent: {
          DEFAULT: '#FF5A36',
          muted: '#8B3A28',
        },
        cream: '#F4F0EC',
        ink: '#F4F0EC',
        muted: '#A89F98',
        brush: '#151515',
        burgundy: {
          DEFAULT: '#F4F0EC',
          muted: '#A89F98',
        },
        brass: '#FF5A36',
        supply: {
          primary: '#FF5A36',
          secondary: '#151515',
          accent: '#FF5A36',
          highlight: '#FF5A36',
          success: '#FF5A36',
          dark: '#151515',
          gray: '#A89F98',
          lightgray: '#2C2421',
          light: '#F4F0EC',
          background: '#151515',
          'background-alt': '#2C2421',
          'background-dark': '#151515',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        body: ['1.0625rem', { lineHeight: '1.65' }],
        display: ['clamp(2.75rem, 8vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        soft: '0 22px 48px -28px rgba(0, 0, 0, 0.55)',
        card: '0 14px 36px -22px rgba(0, 0, 0, 0.45)',
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
};

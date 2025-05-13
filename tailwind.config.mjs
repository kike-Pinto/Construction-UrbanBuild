/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mjs}',
    './pages/**/*.{js,ts,jsx,tsx,mjs}',
    './components/**/*.{js,ts,jsx,tsx,mjs}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      dmSans: ['var(--font-dmSans)', 'sans-serif'],
      barlow: ['var(--font-barlow)', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#121315',
        secondary: '#666666',
        accent: '#ffca3b',
        border: '#d7d7d7',
        white: '#ffffff', // Asegúrate de que white esté definido
        black: '#000000', // Y también black
      },
      boxShadow: {
        custom: '0px 4px 54px 10px rgba(18, 19, 21, 0.06)',
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

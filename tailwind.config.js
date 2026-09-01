/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './gluteos/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: '#35141C',
        marsala: '#642C39',
        champagne: '#D8C3A5',
        nude: '#EFE7DF',
        offwhite: '#FAF7F5',
        graphite: '#1F1A1B',
        whatsapp: '#25D366',
        whatsappDark: '#1EBE5D',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
      keyframes: {
        'rotate-badge': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'rotate-badge': 'rotate-badge 16s linear infinite',
      },
    },
  },
  plugins: [],
};

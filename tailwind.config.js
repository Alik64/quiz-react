/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: '#f00',
        success: '#008000',
        darkblue: '#00008b',
        cyan: '#00d8ff',
      },
      fontFamily: {
        times: ['Times', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translate(-50%, -48%) scale(0.95)', opacity: '0' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        slideUp: 'slideUp 0.4s ease-out',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

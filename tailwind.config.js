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
    },
  },
  plugins: [],
}

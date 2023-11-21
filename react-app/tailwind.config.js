/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'green-light': '#d9f99d',
      'green-dark': '#365314',
    },
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['SFMono-Regular', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
};

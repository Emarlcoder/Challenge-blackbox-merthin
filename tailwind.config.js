/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        neutral: {
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        primary: {
          500: '#4785FF',
          600: '#1967FF',
        },
      },
    },
  },
  plugins: [],
};

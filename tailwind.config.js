const newColors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: {
        'screen/2': '44vh',
        45: '45rem',
        35: '35rem',
      },
      text: {
        responsive: '8vh',
      },
      width: {
        75: '75rem',
        63: '63rem',
      },
      scale: {
        minus1: '-1',
      },
      shadow: {
        '4xl': '0 50px 70px -20px rgba(29, 169, 242, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       spacing: {
//         128: '32rem',
//       },
//     },
//   },
//   variants: {},
//   plugins: [require('kutty')],
// };

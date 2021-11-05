module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
      zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '50': 50,
      '100': 100,
      '200': 200,
      '500': 500,
      '1000': 1000,
      '2000': 2000,
      '5000': 5000,
      'auto': 'auto',
    }
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}

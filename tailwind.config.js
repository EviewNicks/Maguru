/** @type {import('tailwindcss').Config} */
const colors = require('./src/config/colors');
const typographys = require('./src/config/typography');
const gradients = require('./src/config/gradients');
const shadows = require('./src/config/shadows');
const gridConfig = require('./src/config/grid');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js', // Menambahkan path ini untuk Flowbite
  ],
  theme: {
    extend: {
      colors,
      fontFamily: typographys.fontFamily,
      fontSize: typographys.fontSize,
      backgroundImage: gradients,
      boxshadow: shadows,
      gridTemplateColumns: gridConfig['col-temp'],
      gridTemplateRows: gridConfig['row-temp'],
    },
  },
  plugins: [
    require('flowbite/plugin'), // Pastikan ini digunakan untuk plugin Flowbite
  ],
};

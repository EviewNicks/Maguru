/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js', // Menambahkan path ini untuk Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Pastikan ini digunakan untuk plugin Flowbite
  ],
};

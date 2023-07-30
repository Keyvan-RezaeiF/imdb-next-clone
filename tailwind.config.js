/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1000px',
      'xl': '1360px',
      '2xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

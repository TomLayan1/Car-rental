/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        primaryColor: '#fa7602',
        darkTheme: '#151515',
        grayLight: '#424242',
        grayBg: '#0000003f',
        contactBg: '#00000088'
      },
      boxShadow: {
        customShadow: '0 0px 9px rgba(0, 0, 0, 0.6)',
        btnShadow: '0px 1px 10px rgba(12, 80, 39, 0.5)',
      }
  }
},
  plugins: [],
}
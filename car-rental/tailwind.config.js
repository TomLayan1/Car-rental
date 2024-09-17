/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#fa7602',
        darkTheme: '#151515',
        grayLight: '#424242',
        grayBg: '#0000003f',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          sm:'3rem'
        }
      },
      boxShadow: {
        customShadow: '0 0px 9px rgba(0, 0, 0, 0.3)',
        btnShadow: '0px 1px 10px rgba(12, 80, 39, 0.5)',
      }
  }
},
  plugins: [],
}
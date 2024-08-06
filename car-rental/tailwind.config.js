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
        secondaryColor: '#2B4521',
        grayLight: '#424242',
        grayBg: '#0000003f'
      },
      boxShadow: {
        customShadow: '0 0px 18px rgba(0, 0, 0, 0.6)',
      },
      buttonShadow: {
        btnShadow: '0px 1px 10px rgba(12, 80, 39, 0.5)'
      }
  }
},
  plugins: [],
}
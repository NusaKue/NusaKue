/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         // === PRIMARY COLORS ===
        'primary-100': '#9fbb73',
        'primary-80': '#B2C98F',
        'primary-60': '#C5D6AB',
        'primary-40': '#D9E4C7',
        'primary-20': '#ECF1E3',

        // === SECONDARY COLORS ===
        'secondary-100': '#F1EB90',
        'secondary-80': '#F4EFA6',
        'secondary-60': '#F7F3BC',
        'secondary-40': '#F9F7D3',
        'secondary-20': '#FCFBE9',

        // === BASE COLORS ===
        'black-100': '#111111',
        'black-80': '#707070',
        'black-60': '#A0A0A0',
        'black-40': '#CFCFCF',
        'black-20': '#F3F3F3',
        'white': '#FFFFFF',

        // === SUCCESS COLORS ===
        'success-100': '#3F845F',
        'success-80': '#659D7F',
        'success-60': '#8CB59F',
        'success-40': '#B2CEBF',
        'success-20': '#D9E6DF',

        // === WARNING COLORS ===
        'warning-100': '#E4C65B',
        'warning-80': '#E9D17C',
        'warning-60': '#EFDD9D',
        'warning-40': '#F4E8BD',
        'warning-20': '#FAF4DE',

        // === ERROR COLORS ===
        'error-100': '#B51F17',
        'error-80': '#C44C45',
        'error-60': '#D37974',
        'error-40': '#E1A5A2',
        'error-20': '#F0D2D1',

        // === INFO COLORS ===
        'info-100': '#2685CA',
        'info-80': '#519DD5',
        'info-60': '#7DB6DF',
        'info-40': '#A8CEEA',
        'info-20': '#D4E7F4',

        'accent-80': '#659d7f',
        'text-light': 'white',
        'text-dark': '#555555',     
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
       fontSize: {
        // Heading Baloo 2
        'heading-1': ['40px', { lineHeight: '110%', fontWeight: '600' }], // Semibold 40px
        'heading-2': ['32px', { lineHeight: '100%', fontWeight: '500' }], // Medium 32px
        'heading-3': ['30px', { lineHeight: '100%',  fontWeight: '500' }], // Medium 30px
        'heading-4': ['28px', { lineHeight: '135%', fontWeight: '500' }], // Medium 28px
        'heading-5': ['22px', { lineHeight: '145%', fontWeight: '500' }], // Medium 22px
        // Display Baloo 2
        'display-1': ['56px', { lineHeight: '110%', fontWeight: '400' }], // Regular 56px
        'display-2': ['28px', { lineHeight: '135%', letterSpacing: '0', fontWeight: '500' }], // Medium 28px
        'display-3': ['28px', { lineHeight: '120%', letterSpacing: '0', fontWeight: '500' }], // Regular 28px
        
        // Body Poppins
        'body-xl-medium': ['20px', { lineHeight: '130%',  fontWeight: '600' }], // Double Extra Large Text Medium
        'body-xl-regular': ['20px', { lineHeight: '130%',  fontWeight: '400' }], // Double Extra Large Text Regular
        
        'body-lg-medium': ['18px', { lineHeight: '145%', fontWeight: '600' }], // Extra Large Text Medium
        'body-lg-regular': ['18px', { lineHeight: '145%',  fontWeight: '400' }], // Extra Large Text Regular
        
        'body-md-medium': ['16px', { lineHeight: '140%',  fontWeight: '600' }], // Large Text Medium
        'body-md-regular': ['16px', { lineHeight: '140%',  fontWeight: '400' }], // Large Text Regular
        
        'body-sm-medium': ['14px', { lineHeight: '145%',  fontWeight: '600' }], // Medium Text Medium
        'body-sm-regular': ['14px', { lineHeight: '145%',  fontWeight: '400' }], // Medium Text Regular
        
        'body-xs-medium': ['12px', { lineHeight: '150%',  fontWeight: '600' }], // Small Text Medium
        'body-xs-regular': ['12px', { lineHeight: '150%',  fontWeight: '400' }], // Small Text Regular
        
        'body-xxs-medium': ['10px', { lineHeight: '160%',  fontWeight: '600' }], // Extra Small Text Medium
        'body-xxs-regular': ['10px', { lineHeight: '160%',  fontWeight: '400' }], // Extra Small Text Regular
      },
    },
  },
  plugins: [],
}
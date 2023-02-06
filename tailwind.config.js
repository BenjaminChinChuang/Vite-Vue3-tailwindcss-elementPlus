const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '576px',
      ...defaultTheme.screens, //'sm': '640px','md': '768px','lg': '1024px', 'xl': '1280px', '2xl': '1536px',
      xl: '1200px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        'rt-gray-darkest': '#444444',
        'rt-gray-darker': '#6e6e6e',
        'rt-gray-dark': '#8d8d8d',
        'rt-gray': '#a4a4a4',
        'rt-gray-light': '#c3c3c3',
        'rt-gray-lighter': '#e0e0e0',
        'rt-gray-lightest': '#efefef',
        'brand-color': '#f29100' /* Brand - Ruten logo and header */,
        'primary-color':
          '#00b3ff' /* primary - Main actions - form elements, switch, button */,
        'secondary-color': '#3679e1' /* secondary - Ruten IM */,
        'tertiary-color': '#ff5d0e' /* Tertiary - Price */,
        'warning-color': '#fcb300' /* Warning - Color for warning status */,
        'success-color': '#00ba5a' /* Success - Color for success status */,
        'important-color':
          '#f24013' /* Important - Color for importnat(error) status */,
        'rt-ink ': '#1d1d1d',
        ink: '#1d1d1d',
      },
      keyframes: {
        fadein: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
      },
      animation: {
        fadein: 'fadein 0.2s ease-in',
      },
      fontSize: {
        xxs: ['10px', '0.75rem'],
      },
    },
  },
  plugins: [],
}

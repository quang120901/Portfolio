/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'slate': {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        655: '#4E5C89',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
        960: '#090909',
        965: '#111111',
      },
      'gray': {
        100: '#353535',
        500: '#6b7280',
        600: '#4b5563',
        800: '#021500',
      },
      'green': {
        100: '#58BB71',
        700: '#0B2A13',
      },
      'red': {
        100: '#E92C55',
        200: '#E93131',
        250: '#ED6464',
        600: '#350E0C',
      },
      'blue': {
        100: '#9bddff',
        200: '#00A5FF',
        250: '#ED6464',
        600: '#350E0C',
      },
      'yellow': {
        200: '#F1C232',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '9.5rem',
      '11xl': '12rem',
    },
    extend: {
      fontFamily: {
        paytone: ["Paytone One", "vazirmatn"],
        lalezar: ["vazirmatn", "Paytone One"],
      },
    },
  },
  plugins: [],
}
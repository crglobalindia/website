/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f4',
          100: '#e1ede7',
          200: '#c5ddd1',
          300: '#9ec4b3',
          400: '#6fa48f',
          500: '#4c8670',
          600: '#386a57',
          700: '#2c5344',
          800: '#183D30', // Primary Forest Green
          900: '#133026',
          950: '#0a1a15',
        },
        ivory: {
          50: '#fdfcf9',
          100: '#F4F1E8', // Warm Ivory
          200: '#eae3d3',
          300: '#ded2b8',
          400: '#ccb893',
          500: '#be9f70',
        },
        gold: {
          50: '#faf7ee',
          100: '#f3eed8',
          200: '#e6dab0',
          300: '#d7c183',
          400: '#caa85b',
          500: '#B58B52', // Earth Gold
          600: '#a37743',
          700: '#835a35',
          800: '#6d4930',
          900: '#5c3e2b',
        },
        charcoal: {
          50: '#f6f7f6',
          100: '#e3e5e3',
          200: '#c5c9c5',
          300: '#9ea59f',
          400: '#757e77',
          500: '#5b645d',
          600: '#464e48',
          700: '#383e3a',
          800: '#1F2421', // Dark Charcoal
          900: '#161a18',
          950: '#0e1110',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(24, 61, 48, 0.04)',
        'card': '0 4px 20px -2px rgba(24, 61, 48, 0.06), 0 2px 6px -2px rgba(24, 61, 48, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(24, 61, 48, 0.1), 0 8px 10px -6px rgba(24, 61, 48, 0.04)',
        'gold-glow': '0 0 25px rgba(181, 139, 82, 0.25)',
      }
    },
  },
  plugins: [],
}

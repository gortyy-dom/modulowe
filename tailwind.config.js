/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': {
          800: '#2d3e2d',
          900: '#1a241a',
        },
        'olive': {
          800: '#3d4a2d',
          900: '#2a3320',
        },
      },
    },
  },
  plugins: [],
}


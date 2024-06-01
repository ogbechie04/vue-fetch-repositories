/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Adds a new utility class for the specified grid configuration
        'auto-fill-400': 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      boxShadow: {
        'gradient-purple-pink-yellow':
          '0 4px 6px -1px rgba(128, 90, 213, 0.1), 0 2px 4px -1px rgba(244, 114, 182, 0.1), 0 1px 2px -1px rgba(252, 211, 77, 0.1)'
      }
    }
  },
  plugins: []
}

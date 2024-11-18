/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Matches your JSX/TSX files
  ],
  theme: {
    screens: {
      sm: '685px',  // Custom "sm" breakpoint
      md: '768px',  // Default "md" breakpoint
      lg: '1024px', // Default "lg" breakpoint
      xl: '1280px', // Default "xl" breakpoint
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'], // Custom font family
        maitree: ['Maitree'], // Fixed case for consistency
      },
      spacing: {
        'scrollbar-width': '12px', // Custom width for scrollbar
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

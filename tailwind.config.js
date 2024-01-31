/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme}) {
      addComponents({
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.5'),
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.white'),
          backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent white
          border: `1px solid ${theme('colors.white')}`, // White border
          transition: 'background-color 0.3s ease',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly opaque white on hover
          },
        },
      });
    },
  ],
};

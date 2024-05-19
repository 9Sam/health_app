/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{html,ts}",
   ],
   theme: {
      extend: {
         fontSize: {
            'xs': '0.6rem',
            'sm': '0.8rem',
            'base': '1rem',
            'md': '1.1rem',
            'lg': '1.2rem',
         },
         colors: {
            'primary': "var(--primary-color)",
            'secondary': "var(--secondary-color)",
            'danger': "var(--danger-color)",
         },
         animation: {
            'ping-slow': 'ping 3s linear',
            'custom-ping': 'custom-ping 3s linear',
         },
         keyframes: {
            'custom-ping': {
               '0%': { transform: 'scale(1)', rotate: '-45deg' },
               '50%': { transform: 'scale(1.5)' },
               '100%': { transform: 'scale(1)', rotate: '-45deg' },
            },
         }
      },
   },
   corePlugins: {
      preflight: false,
   },
}


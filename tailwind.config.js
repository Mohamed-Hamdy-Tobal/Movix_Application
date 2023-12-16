/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT ({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: ({
        'main-gradient': 'linear-gradient(98.37deg, #f89e00 0.99 , #da2f58 100%)', 
        'gradient': 'linear-gradient(90deg, rgba(#193763, 0) 0, rgba(#193763, 0.2) 20%, rgba(#193763, 0.5) 60%, rgba(#193763, 0))', // Customize your gradient here
      }),
      boxShadow: {
        main: '0 0 8px 2px #d1d0d0',
        mainHover: '0 0 9px 4px #d1d0d0',
        mainDark: '0 0 6px 4px #0c222f',
        mainDarkHover: '0 0 8px 6px #0f2634',
      },
      colors: {
        black: '#04152d',
        black2: '#041226',
        black3: '#020clb',
        blackLighter: '#1c4b91',
        blackLight: '#173d77',
        pink: '#da2f68',
        orange: '#f89e00',
      },
      keyframes : {
        shimmer : {
          '100%': {transform:'translateX(100%)'},
        }
      },
      animation : {
        shimmer : 'shimmer 2s ease-in-out infinite', 
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200',
        '2xl': '1400px'
      },
    },
  },
  plugins: [],
})

// Here we apply an configuration customization to the selector build in tailwind like (colors, animation, )
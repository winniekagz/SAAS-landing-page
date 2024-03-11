/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'dark-purple':'#1f1c47',
        'light-purple':'#986ae1',
        "light-blue":'#5c9fea',
        'bg-main':'#f7f6fa',
        'purple':'#1e1d4c',
        'bg-light':'#cac9da'
       
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}



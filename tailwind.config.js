/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 
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
       
      },
     
            backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
          
      
    },
  },
  plugins: [
   
  ],
}



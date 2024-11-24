/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-texture': "url('/src/assets/main-texture.png')",
        // 'main-texture': "url('/src/assets/product_photos/OneKey Pro - Showcase - On a still life table.png')",
      },
      backgroundColor: {
        'sidebar': "rgba(0, 0, 0, 0.25)",
        'sidebar-block': 'rgb(248, 249, 250)',
        'checkout': '#F4F5F8',
        'primary': 'rgb(240, 240, 240)'
      },
      boxShadow: {
        custom: '1px 1px 16px 0px rgba(0, 0, 0, 0.1)', // Tailwind uses rgba for transparency
        custom2: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        custom3: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      },
      width: {
        'sidebar-desktop': '600px',
        'sidebar-mobile': '500px'
      },
      gridTemplateColumns: {
        '21': '2fr 1fr',
        'a1': 'auto 1fr',
        '1-20': '1fr 25px',
        '221': '1fr 1fr auto'
      },
      colors: {
        'h-checkout': '#838383',
        'gray-primary': '#6E6E6E',
        'green-primary': '#45E555'
      }
    },
    screens: {
      'sm-mobile': '500px',
      'tablet': '640px',
      'md': '768px',
      'ipad-air': '820px',
      'lg': '1024px',
      'desktop': '1280px'
    },
  },
  plugins: [],
}

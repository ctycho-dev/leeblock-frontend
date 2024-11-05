/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-texture': "url('/src/assets/main-texture.png')",
      },
      backgroundColor: {
        'sidebar': "rgba(0, 0, 0, 0.25)",
        'sidebar-block': 'rgb(248, 249, 250)',
        'checkout': '#F4F5F8'
      },
      boxShadow: {
        custom: '1px 1px 16px 0px rgba(0, 0, 0, 0.1)', // Tailwind uses rgba for transparency
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
        'h-checkout': '#838383'
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

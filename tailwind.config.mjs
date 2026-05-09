/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        beige: '#EAE4DE',
        graphite: '#3A3D40',
        milk: '#F6F4F2',
        sand: '#D8CEC4',
        lavender: '#B9AED4',
        'lavender-light': '#E6E0F2',
        olive: '#8A9F94',
        'olive-soft': '#BFCBB8',
        coral: '#C97A6B',
        terracotta: '#B35A4A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

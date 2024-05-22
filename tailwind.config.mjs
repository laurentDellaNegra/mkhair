/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        slideinLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideinRight: {
          from: {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        slideinLeft: 'slideinLeft 1.5s ease 300ms forwards',
        slideinRight: 'slideinRight 1.5s ease 300ms forwards',
      },
    },
  },
  plugins: [],
}

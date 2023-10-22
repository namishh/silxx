/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'darkbg': "#08090b",
        'darkmbg': "#140d24",
        'darkfg': "#dcdee6",
        'darkerror': "#b94e5d",
        'darksuccess': "#b5bb7b",
        'darkpr': "#76b5bd",
        'darksec': "#5e8a9c",
        'darkpink': "#cf667c",
        'darkwarn': "#8c5a48",
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      lineHeight: {
        'extra-loose': '2.5',
        '14': '3rem',
      },
      height: {
        'fuller': '140vh',
      },
    },
  },
	plugins: [],
}

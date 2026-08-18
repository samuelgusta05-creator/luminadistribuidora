import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        stone: {
          950: '#09090b',
        },
        champagne: {
          100: '#FAF0DC',
          200: '#F5E6C8',
          300: '#E8D4A9',
          400: '#D4AF37',
        }
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { paper: '#FFFFFF', 'paper-warm': '#FFF6F1', 'paper-2': '#F4F4F4', ink: '#171516', orange: '#DF481D', 'orange-deep': '#B73512' }, fontFamily: { sans: ['var(--font-montserrat)', 'sans-serif'], display: ['var(--font-syncopate)', 'sans-serif'] } } },
  plugins: [],
};
export default config;

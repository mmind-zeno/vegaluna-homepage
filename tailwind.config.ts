import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vl-forest': '#1B3A2D',
        'vl-forest-dark': '#122A20',
        'vl-forest-light': '#2A5040',
        'vl-sage': '#5A7A65',
        'vl-cream': '#FAF6EE',
        'vl-terracotta': '#C4622D',
        'vl-terra-hover': '#A3521F',
        'vl-gold': '#C9973A',
        'vl-charcoal': '#2A2A2A',
        'vl-light-sage': '#E8EFE8',
        'vl-warm-white': '#FFFDF8',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

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
        'vl-ink': '#1A1A18',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(27,58,45,0.12), 0 1px 4px rgba(27,58,45,0.06)',
        'card-hover': '0 12px 40px -8px rgba(27,58,45,0.20), 0 2px 8px rgba(27,58,45,0.08)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

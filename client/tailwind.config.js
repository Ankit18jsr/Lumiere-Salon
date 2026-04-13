/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Lumière Salon Design Tokens ──────────────────────────────
      colors: {
        blush: {
          50:  '#fef5f6',
          100: '#fce8eb',
          200: '#f9d4d8',   // lighter blush
          300: '#f4b8c1',   // primary blush
          400: '#ee8c9a',
          500: '#e45f72',
        },
        gold: {
          100: '#f5e6c8',
          300: '#d4af37',   // rich gold accent
          400: '#c8a96e',   // muted gold
          500: '#a3873a',
        },
        beige: {
          50:  '#fdfaf6',
          100: '#f5efe6',   // light beige bg
          200: '#ede0d4',   // warm beige
          300: '#dcc9b6',
        },
        charcoal: '#2d2d2d',
        ink: '#1a1a1a',
      },
      // ── Typography ───────────────────────────────────────────────
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'Inter', 'sans-serif'],
      },
      // ── Spacing / sizing extras ──────────────────────────────────
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      // ── Animations ───────────────────────────────────────────────
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        float:   'float 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
      // ── Box shadows ──────────────────────────────────────────────
      boxShadow: {
        'gold': '0 4px 24px rgba(200,169,110,0.35)',
        'blush': '0 4px 24px rgba(244,184,193,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.12)',
      },
      // ── Backdrop blur (glassmorphism) ────────────────────────────
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

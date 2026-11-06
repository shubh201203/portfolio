/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#F6F4ED',
        surface: '#FFFFFF',
        'surface-subtle': '#FAF9F5',
        'surface-hover': '#F0EDE3',
        ink: {
          DEFAULT: '#111215',
          primary: '#111215',
          secondary: '#3E434D',
          tertiary: '#656C7A',
          muted: '#8D95A5',
          border: 'rgba(17, 18, 21, 0.08)',
          'border-strong': 'rgba(17, 18, 21, 0.18)',
        },
        paper: {
          DEFAULT: '#F6F4ED',
          pure: '#FFFFFF',
          card: '#FFFFFF',
          muted: '#EDEAE0',
          dark: '#E2DECFCF',
        },
        acid: {
          DEFAULT: '#D8F243',
          hover: '#CCFF00',
          light: '#F5FCC2',
        },
        cobalt: {
          DEFAULT: '#1D4ED8',
          hover: '#1E40AF',
          soft: '#EFF6FF',
        },
        dark: {
          DEFAULT: '#101114',
          surface: '#16181D',
          card: '#1D2027',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        headline: ['Syne', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(17, 18, 21, 0.04)',
        'card': '0 2px 4px 0 rgba(17, 18, 21, 0.04), 0 1px 2px -1px rgba(17, 18, 21, 0.04)',
        'editorial': '0 10px 30px -10px rgba(17, 18, 21, 0.08)',
        'elevated': '0 12px 28px -6px rgba(17, 18, 21, 0.09), 0 4px 10px -4px rgba(17, 18, 21, 0.05)',
        'acid-pill': '0 0 20px -3px rgba(216, 242, 67, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}


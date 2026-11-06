/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#F7F7F3',
        surface: '#FFFFFF',
        'surface-subtle': '#F9FAFB',
        'surface-hover': '#F3F4F6',
        ink: {
          primary: '#171717',
          secondary: '#4B5563',
          tertiary: '#6B7280',
          muted: '#9CA3AF',
        },
        lab: {
          bg: '#0B0F19',
          surface: '#111827',
          card: '#162032',
          cardHover: '#1B273D',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.05)',
          borderGlow: 'rgba(53, 99, 255, 0.3)',
          text: '#F3F4F6',
          muted: '#94A3B8',
          blue: '#3563FF',
          blueGlow: '#4F75FF',
          teal: '#14B8A6',
          cyan: '#06B6D4',
        },
        border: {
          light: '#E5E7EB',
          subtle: '#F3F4F6',
          strong: '#D1D5DB',
        },
        accent: {
          blue: '#3563FF',
          blueHover: '#254EDB',
          blueLight: '#EFF4FF',
          blueBorder: '#BFDBFE',
          teal: '#14B8A6',
          tealLight: '#F0FDFA',
        },
        paper: '#F5F3EC',
        'paper-muted': '#ECE9E2',
        'paper-dark': '#E2DDD3',
        dark: '#08090C',
        'dark-surface': '#101218',
        'dark-card': '#161922',
        acid: '#D8F243',
        'acid-hover': '#CCFF00',
        cobalt: '#1D4ED8',
        'cobalt-glow': '#3B82F6',
        status: {
          success: '#16A34A',
          successBg: '#F0FDF4',
          successBorder: '#BBF7D0',
          warning: '#D97706',
          warningBg: '#FFFBEB',
          warningBorder: '#FDE68A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        headline: ['Syne', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'glow-blue': '0 0 25px -5px rgba(53, 99, 255, 0.25)',
        'glow-teal': '0 0 25px -5px rgba(20, 184, 166, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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


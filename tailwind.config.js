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
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
        },
        border: {
          light: '#E5E7EB',
          subtle: '#F3F4F6',
          strong: '#D1D5DB',
        },
        accent: {
          blue: '#2563EB',
          blueHover: '#1D4ED8',
          blueLight: '#EFF6FF',
          blueBorder: '#BFDBFE',
        },
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
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}


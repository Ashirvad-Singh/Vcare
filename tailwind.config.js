/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#DC2626',
        'brand-red-light': '#EF4444',
        'brand-red-dark': '#B91C1C',
        'brand-red-50': '#FEF2F2',
        'brand-red-100': '#FEE2E2',
        'brand-blue': '#1E3A8A',
        'brand-blue-light': '#2563EB',
        'brand-blue-dark': '#172554',
        'brand-blue-indigo': '#3730A3',
        'brand-blue-50': '#EFF6FF',
        'brand-blue-100': '#DBEAFE',
        'brand-gold': '#F59E0B',
        'brand-gold-light': '#FBBF24',
        'brand-gold-dark': '#D97706',
        brand: {
          red: {
            DEFAULT: '#DC2626',
            light: '#EF4444',
            dark: '#B91C1C',
            50: '#FEF2F2',
            100: '#FEE2E2',
          },
          blue: {
            DEFAULT: '#1E3A8A',
            light: '#2563EB',
            dark: '#172554',
            indigo: '#3730A3',
            50: '#EFF6FF',
            100: '#DBEAFE',
          },
          gold: {
            DEFAULT: '#F59E0B',
            light: '#FBBF24',
            dark: '#D97706',
          }
        },
        medical: {
          DEFAULT: '#1E3A8A',
          dark: '#172554',
          light: '#2563EB',
        },
        navy: {
          DEFAULT: '#0F223A',
          800: '#0F223A',
          900: '#0A1829',
          950: '#06101D',
        },
        soft: '#F6F8FB',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 34, 58, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(220, 38, 38, 0.15)',
        'card': '0 4px 20px -2px rgba(15, 34, 58, 0.05)',
        'card-hover': '0 20px 35px -5px rgba(15, 34, 58, 0.12), 0 10px 15px -5px rgba(220, 38, 38, 0.08)',
        'glow-red': '0 0 25px rgba(220, 38, 38, 0.35)',
        'glow-blue': '0 0 30px rgba(30, 58, 138, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s ease-in-out infinite alternate',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(0%)', opacity: '0.2' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(100%)', opacity: '0.2' },
        }
      }
    },
  },
  plugins: [],
}

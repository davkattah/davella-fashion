/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E8',
          200: '#F3E5C8',
          300: '#EBD4A4',
          400: '#DFBA63',
          500: '#D4AF37', // Royal Gold
          600: '#C5A059',
          700: '#9B7B34',
          800: '#6C5420',
          900: '#433412',
        },
        onyx: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#525252',
          700: '#3A3A3A',
          800: '#1E1E1E',
          900: '#141414',
          950: '#0B0B0B', // Deep Onyx
        },
        emerald: {
          900: '#0A2F1D', // Heritage Green
        },
        crimson: {
          900: '#4A0E17',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.25)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'dark-luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-[#C5A059], linear-[#D4AF37], linear-[#E6CA65]',
        'dark-glass': 'linear-gradient(135deg, rgba(20, 20, 20, 0.75), rgba(11, 11, 11, 0.85))',
        'light-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(250, 249, 245, 0.95))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

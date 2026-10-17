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
        brand: {
          dark: '#0A0A0A',
          card: '#121212',
          surface: '#1A1A1A',
          border: '#2A2A2A',
          orange: '#F7861E',
          orangeHover: '#DE7313',
          amber: '#FF8A00',
          yellow: '#FFE500',
          teal: '#18A999',
          tealDark: '#0E7A6E',
          aqua: '#7ED6D3',
          lightBg: '#F8FAFC',
          lightCard: '#FFFFFF',
          lightBorder: '#E2E8F0',
        }
      },
      fontFamily: {
        display: ['Montserrat', 'Poppins', 'sans-serif'],
        sans: ['DM Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'sticker-white': '0 0 0 3px #FFFFFF, 0 10px 25px -5px rgba(0,0,0,0.5)',
        'sticker-black': '0 0 0 3px #0A0A0A, 0 10px 25px -5px rgba(247,134,30,0.3)',
        'glow-orange': '0 0 25px rgba(247, 134, 30, 0.45)',
        'glow-sun': '0 0 50px rgba(255, 138, 0, 0.6), 0 0 100px rgba(255, 229, 0, 0.3)',
        'glow-teal': '0 0 25px rgba(24, 169, 153, 0.4)',
      },
      backgroundImage: {
        'sun-gradient': 'linear-gradient(135deg, #FF8A00 0%, #FFE500 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #F7861E 0%, #FF8A00 50%, #FFE500 100%)',
        'teal-gradient': 'linear-gradient(135deg, #18A999 0%, #7ED6D3 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #151515 100%)',
      },
      animation: {
        'drive': 'driveBus 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'sun-glow': 'sunGlow 5s ease-in-out infinite alternate',
      },
      keyframes: {
        driveBus: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120vw)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sunGlow: {
          '0%': { filter: 'drop-shadow(0 0 20px rgba(255,138,0,0.5))' },
          '100%': { filter: 'drop-shadow(0 0 60px rgba(255,229,0,0.8))' },
        }
      }
    },
  },
  plugins: [],
}

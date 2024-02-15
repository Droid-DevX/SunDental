/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#0e9aa7',
          light: '#3ec1cb',
          dark: '#087f8c',
          50: '#f0fafb',
          100: '#d9f2f4',
          200: '#b3e5ea',
          500: '#0e9aa7',
          600: '#087f8c',
          700: '#066570',
        },
        accent: '#14b8a6',
        dental: {
          white: '#ffffff',
          cream: '#f7fafa',
          light: '#eef5f5',
          dark: '#1a2332',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee-mobile': 'marquee 20s linear infinite',
        'marquee-desktop': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(14,154,167,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(14,154,167,0.2)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}

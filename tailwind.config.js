/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#08090e',
          850: '#0c0e15',
          800: '#10131c',
          700: '#171b27',
          600: '#222738',
          500: '#2e3448',
        },
        fg: {
          DEFAULT: '#ecedf2',
          muted: '#9a9db0',
          dim: '#6b6f84',
        },
        mint: {
          DEFAULT: '#6ef2c4',
          400: '#8cf5d1',
          600: '#3fd9a6',
        },
        iris: {
          DEFAULT: '#9b8cff',
          400: '#b4a9ff',
          600: '#7a68ff',
        },
        ember: '#ffb27a',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -8%) scale(1.15)' },
          '66%': { transform: 'translate(-6%, 6%) scale(0.92)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee-reverse 45s linear infinite',
        orbit: 'orbit 40s linear infinite',
        'orbit-slow': 'orbit 70s linear infinite',
        'orbit-reverse': 'orbit-reverse 40s linear infinite',
        'orbit-reverse-slow': 'orbit-reverse 70s linear infinite',
        aurora: 'aurora 22s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        // Light theme colors
        background: '#ffffff',
        foreground: '#f8f9fa',
        'main-text': '#1a1a1a',
        'subtle-text': '#6b7280',
        primary: '#f800ff',  // Using the exact pink color requested
        'primary-hover': '#e000e6',  // Slightly darker for hover states
        muted: '#e5e7eb',
        'accent-cyan': '#00FFFF',
        'accent-magenta': '#f800ff',
        'accent-pink': '#f800ff',
        'accent-blue': '#f800ff',
        'accent-teal': '#20B2AA',
        'accent-purple': '#9400D3',
        'accent-yellow': '#FFFF00',
        'accent-orange': '#FFA500',
        'accent-red': '#FF0000',
        'accent-green': '#00FF00',
        
        // Dark theme colors
        dark: {
          background: '#121212',
          foreground: '#1a1a1a',
          'main-text': '#e0e0e0',
          'subtle-text': '#a0a0a0',
          primary: '#ff33ff',  // Bright pink for dark mode
          'primary-hover': '#ff66ff',  // Even brighter for hover in dark mode
          muted: '#2a2a2a',
          'accent-cyan': '#00FFFF',
          'accent-magenta': '#ff33ff',
          'accent-pink': '#ff33ff',
          'accent-blue': '#ff33ff',  // Using the same bright pink for blue accent in dark mode
          'accent-teal': '#20B2AA',
          'accent-purple': '#9400D3',
          'accent-yellow': '#FFFF00',
          'accent-orange': '#FFA500',
          'accent-red': '#FF0000',
          'accent-green': '#00FF00',
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 25s ease infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
        },
        'fade-in-up': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
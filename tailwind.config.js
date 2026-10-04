/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#007AFF',
          blueHover: '#0062CC',
          blueLight: '#E8F2FF',
          green: '#34C759',
          greenHover: '#2DB34E',
          greenLight: '#EAF9EE',
          bg: '#F8F9FA',
          surface: '#FFFFFF',
          text: '#1C1C1E',
          muted: '#6B7280',
          lightMuted: '#9CA3AF',
          border: '#E5E7EB',
          received: '#F0F2F5',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Consolas', 'monospace']
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        altius: {
          50: '#f4f7fb',
          100: '#e8eff7',
          200: '#d2e0f0',
          300: '#adc8e4',
          400: '#81aad4',
          500: '#5c8ec2',
          600: '#4673ab',
          700: '#385c8b',
          800: '#314e73',
          900: '#2c4360',
          950: '#1b2a3d',
        },
        lavender: {
          50: '#faf8ff',
          100: '#f3eeff',
          200: '#e9e0ff',
          300: '#d6c4ff',
          400: '#bb9bff',
          500: '#9e6eff',
          600: '#874bf5',
          700: '#7536dc',
          800: '#612cb9',
          900: '#512696',
        },
        signal: {
          low: '#0d9488',       // Teal suave para señal baja/normal
          'low-bg': '#f0fdfa',
          'low-border': '#99f6e4',
          mid: '#d97706',       // Ámbar suave para señal moderada
          'mid-bg': '#fffbeb',
          'mid-border': '#fde68a',
          high: '#7c3aed',      // Lavanda/Índigo cálido para señal relevante (no rojo agresivo)
          'high-bg': '#f5f3ff',
          'high-border': '#ddd6fe',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

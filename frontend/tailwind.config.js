/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial ALTIUS según especificación
        canvas: '#F9F7EE',           // Fondo general cálido
        surface: '#FFFDF9',          // Tarjeta / contenedor cálido
        main: '#253444',             // Texto principal
        muted: '#576574',            // Texto suave / secundario
        
        // Primario azul suave
        primary: {
          DEFAULT: '#3E83A8',        // Botón principal
          hover: '#326E8F',          // Hover botón
          text: '#F5FBFF',           // Texto sobre botón
          muted: '#E4EEF6',          // Fondo suave muted
          ring: '#6BA7C9',           // Anillo de foco
        },

        // Secundario menta
        mint: {
          DEFAULT: '#CAEFDD',        // Fondo secundario menta
          text: '#1C463C',           // Texto secundario menta
          badge: '#BCEBD1',          // Fondo mint badges
          badgetext: '#0D4233',      // Texto mint badges
        },

        // Lavanda
        lavender: {
          DEFAULT: '#DFD5F5',        // Fondo lavanda suave
          text: '#483962',           // Texto lavanda
        },

        // Azul cielo suave
        skysoft: {
          DEFAULT: '#C2E4F8',        // Fondo azul cielo
          text: '#12415E',           // Texto azul cielo
        },

        // Cálido disclaimer / alertas suaves
        warm: {
          DEFAULT: '#F6E6CB',        // Fondo aviso cálido
          text: '#65452A',           // Texto aviso cálido
        },

        // Bordes e inputs
        borderline: '#D4DFEB',       // Bordes e inputs
        destructive: '#C25040',      // Destructivo / Error

        // Modo oscuro preparado (opcional)
        darkcanvas: '#2C3748',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Nunito', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        'base-custom': ['1.0625rem', { lineHeight: '1.65' }], // 17px base, 1.65 line-height
      },
      borderRadius: {
        'base': '1rem',              // Radio base 1rem
        '2xl': '1rem',
        '3xl': '1.5rem',             // Tarjetas redondeadas hasta 1.5rem
      },
      maxWidth: {
        '3xl-custom': '48rem',       // 48rem ancho máximo centrado
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(62, 131, 168, 0.08), 0 1px 4px -1px rgba(37, 52, 68, 0.04)',
        'soft-md': '0 6px 16px -4px rgba(62, 131, 168, 0.12), 0 2px 6px -2px rgba(37, 52, 68, 0.06)',
        'soft-lg': '0 12px 28px -6px rgba(62, 131, 168, 0.16), 0 4px 12px -2px rgba(37, 52, 68, 0.08)',
      }
    },
  },
  plugins: [],
}

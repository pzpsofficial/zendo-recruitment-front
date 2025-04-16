export default {
  darkMode: 'class',
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A',
        accent: '#FACC15',
        surface: {
          DEFAULT: '#ffffff',
          dark: '#1f2937',
        },
        text: {
          DEFAULT: '#1f2937',
          muted: '#6b7280',
          dark: '#f3f4f6',
        },
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#374151',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

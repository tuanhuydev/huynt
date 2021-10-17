module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    mode: 'jit',
    theme: {
      fontFamily: {
        'serif': ['IBM Plex Mono, monospace'],
        'san': ['Noto Sans JP, sans-serif'],
      },
      maxWidth: {
        heading: '450px',
        paragraph: '565px',
      },
      letterSpacing: {
        widest: '1.1em'
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
      colors: {
        mockbg: '#FFF8F1',
        mockpri: '#144D4D',
        mockprihover: '#0D3333',
      },
      textColor: {
        white: "#FFF",
        black: "#000",
        mockpri: '#144D4D',
        mocksec: '#66624C',
      },
      extends: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
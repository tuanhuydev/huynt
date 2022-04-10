module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    mode: 'jit',
    theme: {
      extend: {
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
          grey0: '#FAFBFC',
          grey50: '#FAFAFA',
          grey100: '#F5F5F5',
          grey200: '#EEEEEE',
          grey300: '#E0E0E0',
          grey400: '#BDBDBD',
          grey500: '#9E9E9E',
          grey600: '#757575',
          grey700: '#616161',
          grey800: '#424242',
          grey900: '#212121',
          mockbg: '#FFF8F1',
          mockpri: '#144D4D',
          mockprihover: '#0D3333',

          // temporary color palette
          primaryBlue: '#367C93'
        },
        blur: {
          xs: '2px',
        },
        borderColor: {
          grey0: '#FAFBFC',
          grey50: '#FAFAFA',
          grey100: '#F5F5F5',
          grey200: '#EEEEEE',
          grey300: '#E0E0E0',
          grey400: '#BDBDBD',
          grey500: '#9E9E9E',
          grey600: '#757575',
          grey700: '#616161',
          grey800: '#424242',
          grey900: '#212121',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
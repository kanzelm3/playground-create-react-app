const SPACING_UNIT = 8

const typography = styles => ({
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  fontWeight: 400,
  ...styles
})

export default {
  palette: {
    background: {
      paper: '#fff',
      default: '#aac4dc'
    },
    primary: {
      variant: '#3700b3',
      default: '#6200ee',
      contrastText: '#fff'
    },
    secondary: {
      variant: '#018786',
      default: '#03dac6',
      contrastText: '#fff'
    },
    error: '#b00020',
    accent: '#2e7d32',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    type: 'light'
  },
  shadows: [
    '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    '0px 1px 8px 0px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.12)'
  ],
  shape: {
    borderRadius: 4
  },
  spacing: factor => SPACING_UNIT * factor,
  typography: {
    h1: typography({
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1,
      letterSpacing: '-0.01562em'
    }),
    h2: typography({
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1,
      letterSpacing: '-0.00833em'
    }),
    h3: typography({
      fontSize: '3rem',
      lineHeight: 1.04,
      letterSpacing: '0em'
    }),
    h4: typography({
      fontSize: '2.125rem',
      lineHeight: 1.17,
      letterSpacing: '0.00735em'
    }),
    h5: typography({
      fontSize: '1.5rem',
      lineHeight: 1.33,
      letterSpacing: '0em'
    }),
    h6: typography({
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em'
    }),
    subtitle1: typography({
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em'
    }),
    subtitle2: typography({
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em'
    }),
    body1: typography({
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em'
    }),
    body2: typography({
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em'
    }),
    button: typography({
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em'
    }),
    caption: typography({
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em'
    }),
    overline: typography({
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    })
  }
}

const SPACING_UNIT = 8

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
      contrastText: '#000'
    },
    error: '#b00020',
    accent: '#66bb6a'
  },
  shadows: [
    '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    '0px 1px 8px 0px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.12)'
  ],
  spacing: factor => SPACING_UNIT * factor
}

export const THEME = {
  overrides: {
    MuiInputBase: {
      input: {
        borderBottomColor: '#FFFFFF !important'
        // .. other styling that you want
      }
    }
  },
  palette: {
    primary: {
      main: '#0096c7' //8AC926
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#ED254E'
    },
    white: {
      main: '#FFFFFF',
    },
    grey: {
      main: '#FBFCFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
};

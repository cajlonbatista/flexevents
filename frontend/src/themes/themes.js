import { createMuiTheme } from '@material-ui/core/styles';

export const poupTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#303030',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
    fontSize: 12
  }
});

export const chipTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF5F5F",
      contrastText: "#303030",
    },
  },
  typography: {
    fontFamily: [
      'Inter'
    ].join(','),
    fontSize: 14
  },
});
export const radioTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#FF5F5F',
    },
  },
  typography: {
    fontFamily: [
      'Inter'
    ].join(','),
    fontSize: 12.5
  },

});

export const dialogTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5f5f',
    },
  },
  typography: {

  }
});
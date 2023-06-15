import { createTheme } from '@mui/material';

export const theme = createTheme(
  Object.freeze({
    colors: {
      border: '#22343D',
      mainBg: '#FFFFFF',
      text: '#22343D',
      accent: '#b5c4ca',
      accentSecondary: '#02897A',
    },

    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

    fontsSizes: {
      xs: 12,
      s: 14,
      m: 18,
      l: 32,
      xl: 64,
    },
    palette: {
      primary: {
        main: '#FFFFFF',
        darker: '#053e85',
      },
      header: {
        main: '#02897A',
        contrastText: '#FFFFFF',
      },
    },
  })
);

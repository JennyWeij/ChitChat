import { Theme, createTheme } from "@mui/material";

export let theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(','),
    h1: {
        fontSize: '2.5rem',
        color: 'white',
    },
    body1: {
        fontSize: '20px',
  },
},
  palette: {
    primary: {
      main: '#DCEFD3',
    },
    secondary: {
      main: '#AAD098',
    },
    darkaccent: {
      main: '#4E4E4E',
    },
    lightaccent: {
        main: '#A99693',
    },
  },
});

declare module '@mui/material/styles' {
    interface Palette {
      darkaccent: Palette['primary'];
      lightaccent: Palette['primary'];
    }
    interface PaletteOptions {
      darkaccent?: PaletteOptions['primary'];
      lightaccent?: PaletteOptions['primary'];
    }
  }

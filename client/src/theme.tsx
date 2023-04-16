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
    fontFamily: ["Montserrat", "Sarabun", "Sulphur Point"].join(","),
    h1: {
      fontSize: "2.5rem",
      color: "#7A9C6A",
    },
    body1: {
      fontSize: "20px",
    },
  },
  palette: {
    primary: {
      main: "#DCEFD3",
    },
    secondary: {
      main: "#AAD098",
    },
    darktext: {
      main: "#7A9C6A",
    },
    darkaccent: {
      main: "#4E4E4E",
    },
    lightaccent: {
      main: "#A99693",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    darktext: Palette["primary"];
    darkaccent: Palette["primary"];
    lightaccent: Palette["primary"];
  }
  interface PaletteOptions {
    darktext?: PaletteOptions["primary"];
    darkaccent?: PaletteOptions["primary"];
    lightaccent?: PaletteOptions["primary"];
  }
}

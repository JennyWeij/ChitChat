import { createTheme, Theme } from "@mui/material";

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
    fontFamily: ["Montserrat", "Sarabun", "Sulphur Point", "Lato"].join(","),
    h1: {
      fontSize: "3.5rem",
      color: "#7A9C6A",
    },
    h2: {
      fontSize: "2rem",
      color: "#7A9C6A",
    },
    h5: {
      color: "#57724B",
      fontWeight: 700,
      fontSize: "20px",
    },
    body2: {
      fontSize: "20px",
      fontFamily: "Lato",
      color: "#57724B",
    },
  },
  palette: {
    primary: {
      main: "#DCEFD3",
    },
    secondary: {
      main: "#AAD098",
    },
    mediumtext: {
      main: "#7A9C6A",
    },
    darktext: {
      main: "#57724B",
    },
    lighttext: {
      main: "#A99693",
    },
    black: {
      main: "#000000",
    },
    lightgrey: {
      main: "#d3d3d3",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    mediumtext: Palette["primary"];
    darktext: Palette["primary"];
    lighttext: Palette["primary"];
    black: Palette["primary"];
    lightgrey: Palette["primary"];
  }
  interface PaletteOptions {
    mediumtext?: PaletteOptions["primary"];
    darktext?: PaletteOptions["primary"];
    lighttext?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    lightgrey?: PaletteOptions["primary"];
  }
}

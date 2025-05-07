import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Josefin Sans", sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
    body2: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
    button: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
    caption: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
    overline: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
  },
});

const rfStyles = {
  backgroundColor: "black",
};

export { rfStyles, theme };

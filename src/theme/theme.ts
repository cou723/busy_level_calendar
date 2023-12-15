import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688",
      contrastText: "#795548",
    },
    background: {
      default: "#000",
    },
    text: { primary: "#ff9800" },
  },
});

export default theme;

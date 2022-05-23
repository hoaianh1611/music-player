import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  lighter: "#ffffff",
  light: "#ffffff",
  main: "#f3f3f3",
  dark: "#c0c0c0",
  darker: "#cccccc",
  contrastText: "#000000",
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      mode: "dark",
      primary: PRIMARY,
    },
    shape: { borderRadius: 3 },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;

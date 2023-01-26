import { createTheme, ThemeOptions } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

export const theme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        fontFamily: "Ubuntu, Arial, sans-serif",
    },
});

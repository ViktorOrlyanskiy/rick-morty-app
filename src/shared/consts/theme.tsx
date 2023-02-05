import { grey } from "@mui/material/colors";
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: grey[800],
        },
    },
    typography: {
        fontFamily: "Ubuntu, Arial, sans-serif",
    },
});

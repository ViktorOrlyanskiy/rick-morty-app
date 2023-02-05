import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Main } from "@/widgets/Main";
import { Navbar } from "@/widgets/Navbar";
import { theme } from "@/shared/consts/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    console.log(theme);

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Main>
                    <Component {...pageProps} />
                </Main>
            </ThemeProvider>
        </CssBaseline>
    );
}

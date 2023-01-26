import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";
import "@/styles/globals.css";
import { theme } from "@/shared/consts/theme";
import { Main } from "@/widgets/Main/Main";

export default function App({ Component, pageProps }: AppProps) {
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

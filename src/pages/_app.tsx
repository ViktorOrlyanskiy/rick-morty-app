import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { Main } from "@/widgets/Main";
import { theme } from "@/shared/consts/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    console.log(theme);

    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Stack sx={{ height: "100vh" }}>
                    <Header />
                    <Main>
                        <Component {...pageProps} />
                    </Main>
                    <Footer />
                </Stack>
            </ThemeProvider>
        </CssBaseline>
    );
}

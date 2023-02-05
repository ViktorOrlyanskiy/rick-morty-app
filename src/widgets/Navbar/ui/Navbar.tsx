import Link from "next/link";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { CharacterSearch } from "@/features/CharacterSearch";
import { ContainerPage } from "@/shared/ui/ContainerPage";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarSearch } from "./NavbarSearch";

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export const Navbar: React.FC = () => {
    return (
        <HideOnScroll>
            <AppBar>
                <ContainerPage>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                        padding="15px 0"
                        minHeight={72}
                    >
                        <Grid item xs={3}>
                            <Link href="/">
                                <Typography
                                    variant="h1"
                                    fontWeight="light"
                                    fontSize={28}
                                >
                                    Rick & Morty WiKi
                                </Typography>
                            </Link>
                        </Grid>
                        <NavbarSearch />
                        <NavbarLinks />
                    </Grid>
                </ContainerPage>
            </AppBar>
        </HideOnScroll>
    );
};

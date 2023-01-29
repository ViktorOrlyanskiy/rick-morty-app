import Grid from "@mui/material/Grid";
import { NavbarLink } from "./NavbarLink";

export const NavbarLinks: React.FC = () => {
    return (
        <Grid
            item
            xs={4}
            container
            spacing={2}
            alignItems="center"
            justifyContent="right"
        >
            <NavbarLink path="/" name="Characters" />
            <NavbarLink path="/episode" name="Episode" />
            <NavbarLink path="/location" name="Location" />
        </Grid>
    );
};
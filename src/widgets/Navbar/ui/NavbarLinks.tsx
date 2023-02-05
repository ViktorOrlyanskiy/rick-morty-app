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
            <NavbarLink path="/characters" name="Characters" />
            <NavbarLink path="/episodes" name="Episodes" />
            <NavbarLink path="/locations" name="Locations" />
        </Grid>
    );
};

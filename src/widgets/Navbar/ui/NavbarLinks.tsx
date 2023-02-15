import Grid from "@mui/material/Grid";
import {
    getRouteCharacters,
    getRouteEposodes,
    getRouteLocations,
} from "@/shared/consts/routes";
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
            <NavbarLink path={getRouteCharacters()} name="Characters" />
            <NavbarLink path={getRouteEposodes()} name="Episodes" />
            <NavbarLink path={getRouteLocations()} name="Locations" />
        </Grid>
    );
};

import Grid from "@mui/material/Grid";
import {
    getRouteCharacters,
    getRouteEpisodes,
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
            <NavbarLink path={getRouteEpisodes()} name="Episodes" />
            <NavbarLink path={getRouteLocations()} name="Locations" />
        </Grid>
    );
};

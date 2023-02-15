import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { CharacterSearch } from "@/features/CharacterSearch";
import { getRouteCharacters, getRouteMain } from "@/shared/consts/routes";
import { switchElement } from "@/shared/lib/switchElement";

export const NavbarSearch: React.FC = () => {
    const { pathname } = useRouter();
    const cases = [
        {
            value: getRouteMain(),
            element: <CharacterSearch />,
        },
        {
            value: getRouteCharacters(),
            element: <CharacterSearch />,
        },
    ];
    return (
        <Grid item xs={5}>
            {switchElement<string>(pathname, cases)}
        </Grid>
    );
};

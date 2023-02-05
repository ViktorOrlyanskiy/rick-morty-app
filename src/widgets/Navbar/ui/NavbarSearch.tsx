import Grid from "@mui/material/Grid";
import { CharacterSearch } from "@/features/CharacterSearch";
import { useRouter } from "next/router";
import { switchElement } from "@/shared/lib/switchElement";

export const NavbarSearch: React.FC = () => {
    const { pathname } = useRouter();
    const cases = [
        {
            value: "/",
            element: <CharacterSearch />,
        },
        {
            value: "/characters",
            element: <CharacterSearch />,
        },
    ];
    return (
        <Grid item xs={5}>
            {switchElement<string>(pathname, cases)}
        </Grid>
    );
};
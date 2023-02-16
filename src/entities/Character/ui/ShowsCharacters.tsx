import { Grid } from "@mui/material";
import { List } from "@/shared/ui/List";
import { CharacterSchema } from "../model/types/characterSchema";
import { CharacterCard } from "./CharacterCard";

interface ShowsCharactersProps {
    characters: CharacterSchema[];
}

export const ShowsCharacters: React.FC<ShowsCharactersProps> = (props) => {
    const { characters } = props;

    return (
        <Grid container spacing={2} alignContent="stretch">
            <List
                data={characters}
                renderItem={(data) => <CharacterCard {...data} />}
            />
        </Grid>
    );
};

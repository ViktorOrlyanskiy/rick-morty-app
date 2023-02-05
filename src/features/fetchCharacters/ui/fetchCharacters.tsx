import { Grid } from "@mui/material";
import { CharacterCard, CharacterSchema } from "@/entities/Character";
import { List } from "@/shared/ui/List";

interface FetchCharactersProps {
    characters: CharacterSchema[];
}

export const FetchCharacters: React.FC<FetchCharactersProps> = (props) => {
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

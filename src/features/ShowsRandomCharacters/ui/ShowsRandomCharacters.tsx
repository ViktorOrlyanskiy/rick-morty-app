import { Grid } from "@mui/material";
import { CharacterInfo, CharacterSchema } from "@/entities/Character";
import { List } from "@/shared/ui/List";

interface ShowsRandomCharactersProps {
    characters: CharacterSchema[];
}

export const ShowsRandomCharacters: React.FC<ShowsRandomCharactersProps> = (
    props
) => {
    const { characters } = props;

    return (
        <Grid container spacing={2}>
            <List
                data={characters}
                renderItem={(data) => (
                    <CharacterInfo variant="small" {...data} />
                )}
            />
        </Grid>
    );
};

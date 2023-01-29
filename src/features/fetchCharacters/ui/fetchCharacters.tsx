import { CharacterCard, CharacterSchema } from "@/entities/Character";
import { Grid } from "@mui/material";

interface FetchCharactersProps {
    characters: CharacterSchema[];
}

export const FetchCharacters: React.FC<FetchCharactersProps> = (props) => {
    const { characters } = props;

    console.log(characters);
    return (
        <Grid container spacing={2} alignContent="stretch">
            {characters?.map((character: CharacterSchema) => (
                <CharacterCard key={character.id} {...character} />
            ))}
        </Grid>
    );
};

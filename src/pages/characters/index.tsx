import { Box, Card, Grid } from "@mui/material";
import { HeadTag } from "@/widgets/Head/HeadTag";
import { FetchCharacters } from "@/features/fetchCharacters";
import { CharacterSchema } from "@/entities/Character";

interface CharactersProps {
    characters: CharacterSchema[];
}

export async function getServerSideProps() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    return {
        props: {
            characters: data.results,
        },
    };
}

const Characters: React.FC<CharactersProps> = ({ characters }) => {
    console.log(characters);

    return (
        <>
            <HeadTag title="Characters" desc="Characters page" />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card component="section" variant="outlined">
                        сайдбар
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <FetchCharacters characters={characters} />
                </Grid>
            </Grid>
        </>
    );
};

export default Characters;
